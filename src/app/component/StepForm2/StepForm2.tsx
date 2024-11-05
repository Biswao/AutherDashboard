import { useState } from 'react';

const StepForm2 = () => {
    const [formData, setFormData] = useState({
        mainDocument: null,
        figureFile: null,
        tableFile: null,
        manuscriptTitle: '',
        abstract: '',
        keywords: ''
    });

    const handleFileChange = (e:any) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0]
        });
    };

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can add form submission logic here (e.g., sending data to an API endpoint)
    };

    return (
        <div className="container">
            <h2>Upload Your Documents</h2>
            <p>Upload your files and provide any specific instructions for the editors who will be working on your paper. The word count you entered in the previous step should match what is in the "main document" section. Your total word count will be verified by Manuscriptedit and you will be contacted via email if there is a discrepancy in price (increase or decrease).</p>

            <p><strong>Only files in the "main document" section</strong> will be edited, translated, formatted or will receive Review comments, depending on the service you purchased. Files in the "supporting or reference document" section are for the editors' reference only - they will not be charged.</p>
            <p>Files in the "main document" section should be either .doc or .txt format. Supporting reference or figure files can be of any type. You can move to the next step only after your files have finished uploading.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="mainDocument">Upload your main document or content file *</label>
                <input type="file" id="mainDocument" name="mainDocument" onChange={handleFileChange} className="file-input" required />
                <p className="note">(Compress multiple documents in a single zip file)</p>

                <label htmlFor="figureFile">Upload your Figure File</label>
                <input type="file" id="figureFile" name="figureFile" onChange={handleFileChange} className="file-input" />
                <p className="note">(Compress multiple documents in a single zip file)</p>

                <label htmlFor="tableFile">Upload your Table File</label>
                <input type="file" id="tableFile" name="tableFile" onChange={handleFileChange} className="file-input" />
                <p className="note">(Compress multiple documents in a single zip file)</p>

                <label htmlFor="manuscriptTitle">Title of the Manuscript *</label>
                <input type="text" id="manuscriptTitle" name="manuscriptTitle" value={formData.manuscriptTitle} onChange={handleChange} className="input" required />

                <label htmlFor="abstract">Abstract</label>
                <textarea id="abstract" name="abstract" value={formData.abstract} onChange={handleChange} className="textarea"></textarea>

                <label htmlFor="keywords">Keywords *</label>
                <input type="text" id="keywords" name="keywords" value={formData.keywords} onChange={handleChange} className="input" required />

                <div className="button-group">
                    <button type="button" className="prev-btn">Previous</button>
                    <button type="submit" className="next-btn">Next</button>
                </div>
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
                .file-input {
                    display: block;
                    margin-top: 5px;
                }
                .note {
                    font-size: 0.875rem;
                    color: #dc3545;
                    margin-top: 5px;
                    margin-bottom: 15px;
                }
                .input,
                .textarea {
                    width: 100%;
                    padding: 8px;
                    margin-top: 5px;
                    border: 1px solid #ced4da;
                    border-radius: 4px;
                }
                .textarea {
                    resize: vertical;
                }
                .button-group {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }
                .prev-btn,
                .next-btn {
                    background-color: #28a745;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    font-size: 1rem;
                    cursor: pointer;
                }
                .prev-btn:hover,
                .next-btn:hover {
                    background-color: #218838;
                }
            `}</style>
        </div>
    );
};

export default StepForm2;
