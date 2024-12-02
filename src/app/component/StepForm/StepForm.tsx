import { SubmitManuscriptContext } from '@/app/context/SubmitManuscriptContext';
import { useContext, useEffect, useState } from 'react';

let journalCheckboxData = [0,0,0]

const StepForm = ({setCheck}: any) => {
    const [formData, setFormData] = useState({
        service_type: 'Proofreading',
        majorSubject: '',
        specificSubject: '',
        englishStyle: 'American',
        wordRange: '',
        wordCount: '',
        turnaroundTime: '',
        instructions: ''
    });

    const { stepFormData,setStepFormData } = useContext(SubmitManuscriptContext)

    useEffect(() => {
        if(formData.specificSubject){
            setCheck(true)
        }else{
            setCheck(false)
        }
    },[formData])

    const handleChange = (e:any) => {
        const { name, value, type, checked } = e.target;
        console.log({name})
        if(name === 'journalFormatting'){
            journalCheckboxData[0] = value === "on" ? 1 : 0
        }else if(name === 'journalSelection'){
            journalCheckboxData[1] = value === "on" ? 1 : 0
        }else if(name === "journalSubmission"){
            journalCheckboxData[2] = value === "on" ? 1 : 0
        }

        const checkboxName = 'journal_format'
        const key = 
        name === "journalFormatting" || name === "journalSelection" || name === "journalSubmission"
            ? checkboxName
            : name;

        console.log({key})
        setFormData({
            ...formData,
            [key]: type === 'checkbox' ? journalCheckboxData.join("") : value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can add form submission logic here (e.g., sending data to an API endpoint)
    };

    console.log({formData})

    return (
        <div className="container">
            <h2>Details About Your Submission</h2>
            <p>Before we start working on your submission, please answer all the questions below. Your answers will help us to provide you the best possible services.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="serviceType">Service Type *</label>
                <select id="serviceType" name="service_type" value={formData.service_type} onChange={handleChange} className="select" required>
                    <option>Proofreading</option>
                </select>

                <div>
                    <label className="checkbox-label">
                        <input type="checkbox" name="journalFormatting" onChange={handleChange} /> Add journal formatting<br />
                        For less than 3,000 words, additional 1 day turnaround time & $80 extra.<br />
                        For 3,000 to 6,000 words, additional 2 days turnaround time & $130 extra.
                    </label>
                </div>

                <div>
                    <label className="checkbox-label">
                        <input type="checkbox" name="journalSelection" onChange={handleChange} /> Add journal selection<br />
                        Additional 5 days turnaround time & $350 extra charge.
                    </label>
                </div>

                <div>
                    <label className="checkbox-label">
                        <input type="checkbox" name="journalSubmission" onChange={handleChange} /> Add journal submission<br />
                        Additional 2 days turnaround time & $120 extra charge.
                    </label>
                </div>

                <label htmlFor="majorSubject">Major Subject Type *</label>
                <select id="majorSubject" name="majorSubject" value={formData.majorSubject} onChange={handleChange} className="select" required>
                    <option value="" disabled>-- Select --</option>
                    {/* Add other options as needed */}
                </select>

                <label htmlFor="specificSubject">Provide Specific Subject *</label>
                <input type="text" id="specificSubject" name="specificSubject" value={formData.specificSubject} onChange={handleChange} className="input" required />

                <label>Style of English *</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="englishStyle" value="American" checked={formData.englishStyle === 'American'} onChange={handleChange} /> American English
                    </label>
                    <label>
                        <input type="radio" name="englishStyle" value="British" checked={formData.englishStyle === 'British'} onChange={handleChange} /> British English
                    </label>
                </div>
                

                <label htmlFor="wordRange">Word Range *</label>
                <select id="wordRange" name="wordRange" value={formData.wordRange} onChange={handleChange} className="select" required>
                    <option value="" disabled>-- Select --</option>
                    {/* Add other options as needed */}
                </select>
                <p className="note">If your word count is more than 40,000 then <a href="#">Click here</a>.</p>

                <label htmlFor="wordCount">Word Count *</label>
                <input type="number" id="wordCount" name="wordCount" value={formData.wordCount} onChange={handleChange} className="input" required />

                <label htmlFor="turnaroundTime">Turnaround Time *</label>
                <select id="turnaroundTime" name="turnaroundTime" value={formData.turnaroundTime} onChange={handleChange} className="select" required>
                    <option value="" disabled>-- Select --</option>
                    {/* Add other options as needed */}
                </select>
                <p className="note">If you desire a turnaround time different than those in the list, please <a href="#">click here</a>.</p>

                <label htmlFor="instructions">Instruction for Editor</label>
                <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange} className="textarea"></textarea>

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

