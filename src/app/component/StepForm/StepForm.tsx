import { SubmitManuscriptContext } from '@/app/context/SubmitManuscriptContext';
import useQuotation from '@/app/hooks/authorDashboard/useQuotation';
import { FormDataOne, GroupedOption, SelectedService, SubmitManuscriptRequest } from '@/app/utils/interfaces/types';
import { majorSubjectTypeOptions } from '@/app/utils/lib/lib';
import { useContext, useEffect, useState } from 'react';
import Select from "react-select";

let journalCheckboxData = [0, 0, 0]

const StepForm = ({ setCheck, check }: any) => {
    const [majorSubjectDropdown, setMajorSubjectDropdown] = useState<GroupedOption[]>([])

    const { serviceTitle, setFormDataOne, formDataOne, serviceName, selectedService, setSelectedServices } = useContext(SubmitManuscriptContext)
    const { majorSubjectType } = useQuotation()

    const handleMajorSubjectType = (e: any) => {
        const { value } = e
        setFormDataOne({ ...formDataOne, major_subject: value });
    }

    useEffect(() => {
        if (majorSubjectType && majorSubjectType.length) {
            const majorSubjectDropdownData = majorSubjectTypeOptions(majorSubjectType)
            setMajorSubjectDropdown(majorSubjectDropdownData)
        }
    }, [majorSubjectType])


    useEffect(() => {
        if (formDataOne.specific_subject && formDataOne.word_count && formDataOne.turn_ar_time) {
            setCheck(true)
        } else {
            setCheck(false)
        }
    }, [formDataOne])

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;

        console.log({name,value,type,checked})

        if(name === 'journalFormatting'){
            if(checked){
                setSelectedServices((prev: SelectedService[]) => [...prev, {name: "Jornal Formatting", price: 80}])
            }else{
                setSelectedServices((prev: SelectedService[]) => prev.filter((service) => service.name !== "Jornal Formatting"));
            }
        }
        if(name === 'journalSelection'){
            if(checked){
                setSelectedServices((prev: SelectedService[]) => [...prev, {name: "Jornal Selection", price: 350}])
            }else{
                setSelectedServices((prev: SelectedService[]) => prev.filter((service) => service.name !== "Jornal Selection"));
            }
        }
        if(name === 'journalSubmission'){
            if(checked){
                setSelectedServices((prev: SelectedService[]) => [...prev, {name: "Jornal Submission", price: 120}])
            }else{
                setSelectedServices((prev: SelectedService[]) => prev.filter((service) => service.name !== "Jornal Submission"));
            }
        }

        if (name === "word_count" && formDataOne.wordRange) {
            if (+formDataOne.wordRange < value) {
                alert("Your word count exceeds according to the word range you have selected.")
                return
            }
        }
        if (name === 'journalFormatting') {
            journalCheckboxData[0] = checked ? 1 : 0
        } else if (name === 'journalSelection') {
            journalCheckboxData[1] = checked ? 1 : 0
        } else if (name === "journalSubmission") {
            journalCheckboxData[2] = checked ? 1 : 0
        }

        const checkboxName = 'journal_format'
        const key =
            name === "journalFormatting" || name === "journalSelection" || name === "journalSubmission"
                ? checkboxName
                : name;

        setFormDataOne({
            ...formDataOne,
            [key]: type === 'checkbox' ? journalCheckboxData.join("") : value
        });
    };

    return (
        <div className="container">
            <h2>Details About Your Submission</h2>
            <p>Before we start working on your submission, please answer all the questions below. Your answers will help us to provide you the best possible services.</p>

            <form onSubmit={() => { }}>
                <label htmlFor="serviceType">Service Type *</label>
                {serviceTitle === "Publication Support Services" ? (<select id="serviceType" name='service_name' onChange={handleChange} className="select" required>
                    {serviceName && serviceName.length && serviceName.map((val:any) => (
                        <option value={val.id}>{val.service_name}</option>
                    ))}
                </select>) : (<select id="serviceType" onChange={handleChange} className="select" required disabled>
                    <option>{selectedService}</option>
                </select>)}

                {serviceTitle !== "Publication Support Services" && (<div>
                    <label className="checkbox-label">
                        <input type="checkbox" name="journalFormatting" onChange={handleChange} /> Add journal formatting<br />
                        For less than 3,000 words, additional 1 day turnaround time & $80 extra.<br />
                        For 3,000 to 6,000 words, additional 2 days turnaround time & $130 extra.
                    </label>
                </div>)}

                {serviceTitle !== "Publication Support Services" && (<div>
                    <label className="checkbox-label">
                        <input type="checkbox" name="journalSelection" onChange={handleChange} /> Add journal selection<br />
                        Additional 5 days turnaround time & $350 extra charge.
                    </label>
                </div>)}

                {serviceTitle !== "Publication Support Services" && (<div>
                    <label className="checkbox-label">
                        <input type="checkbox" name="journalSubmission" onChange={handleChange} /> Add journal submission<br />
                        Additional 2 days turnaround time & $120 extra charge.
                    </label>
                </div>)}

                <label htmlFor="majorSubject">Major Subject Type *</label>
                <Select
                    name='major_subject'
                    options={majorSubjectDropdown}
                    onChange={handleMajorSubjectType}
                />

                <label htmlFor="specificSubject">Provide Specific Subject *</label>
                <input type="text" id="specificSubject" name="specific_subject" value={formDataOne.specific_subject} onChange={handleChange} className="input" required />

                <label>Style of English *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="language" value="American" checked={formDataOne.language === 'American'} onChange={handleChange} /> American English
                    </label>
                    <label>
                        <input type="radio" name="language" value="British" checked={formDataOne.language === 'British'} onChange={handleChange} /> British English
                    </label>
                </div>


                <label htmlFor="wordRange">Word Range *</label>
                <select id="wordRange" name="wordRange" value={formDataOne.wordRange} onChange={handleChange} className="select" required>
                    <option value="2500">Below 2,500</option>
                    <option value="5999">2,500-5,999</option>
                    <option value="9999">6,000-9,999</option>
                    <option value="19999">10,000-19,999</option>
                    <option value="39999">20,000-39,999</option>
                </select>
                <p className="note">If your word count is more than 40,000 then <a href="#">Click here</a>.</p>

                <label htmlFor="wordCount">Word Count *</label>
                <input type="number" id="wordCount" name="word_count" value={formDataOne.word_count} onChange={handleChange} className="input" required />

                <label htmlFor="turnaroundTime">Turnaround Time *</label>
                <select id="turnaroundTime" name="turn_ar_time" value={formDataOne.turn_ar_time} onChange={handleChange} className="select" required>
                    <option value="" disabled>-- Select --</option>
                    <option value="5">5 days</option>
                    <option value="10">10 days</option>
                </select>
                <p className="note">If you desire a turnaround time different than those in the list, please <a href="#">click here</a>.</p>

                <label htmlFor="instructions">Instruction for Editor</label>
                <textarea id="instructions" name="inst_for_editor" value={formDataOne.inst_for_editor} onChange={handleChange} className="textarea"></textarea>

                {/* <button type="submit" className="submit-btn">Next</button> */}
            </form>

            <style jsx>{`
                .container {
                    max-width: 600px;
                    background-color: #ffffff;
                    border: 1px solid #dee2e6;
                    padding: 20px;
                    border-radius: 4px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #dc3545;
                    font-size: 1.25rem;
                }
                label {
                    font-weight: bold;
                    display: block;
                    margin-top: 15px;
                    margin-bottom: 5px;
                    
                }
                .checkbox-label {
                    font-weight: normal;
                }
                input[type="checkbox"] {
                    margin-right: 5px;
                }
                .select,
                .input,
                .textarea {
                    width:      100%;
                    padding: 8px;
                    margin-top: 5px;
                    border: 1px solid #ced4da;
                    border-radius: 4px;
                }
                .radio-group {
                    margin-top: 5px;
                }
                .radio-group input[type="radio"] {
                    margin-right: 5px;
                }
                .note {
                    font-size: 0.875rem;
                    color: #6c757d;
                    margin-top: 5px;
                }
                .submit-btn {
                    margin-top: 20px;
                    background-color: #28a745;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    font-size: 1rem;
                    cursor: pointer;
                }
                .submit-btn:hover {
                    background-color: #218838;
                }`}
            </style>
        </div>
    );
};

export default StepForm;

