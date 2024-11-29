import { SubmitManuscriptContext } from '@/app/context/SubmitManuscriptContext';
import useManuscript from '@/app/hooks/authorDashboard/useManuscript';
import React, { useContext, useState } from 'react';

const PublicationForm = () => {
  const [formData, setFormData] = useState({
    package: 'Standard Package',
    
  });

  const { submitQuotationJournalPublicationPackage } = useManuscript()

  const {publicationFormdata,setPublicationFormData,formDataOne,formDataTwo,formDataThree, selectedService} = useContext(SubmitManuscriptContext)

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setPublicationFormData({ ...publicationFormdata, [name]: value });
  };

  const handleFileChange = (e:any) => {
    const { name, files } = e.target;
    setPublicationFormData({ ...publicationFormdata, [name]: files[0] });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Submitted Data:', publicationFormdata);
    submitQuotationJournalPublicationPackage(publicationFormdata,formDataOne,formDataTwo,formDataThree)
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Publication Support Package</h2>
      <p>All <span className="text-danger">*</span> mark fields are mandatory.</p>
      <form className="form-section bg-light p-4 rounded" onSubmit={handleSubmit}>
        {/* Package Selection */}
        <div className="mb-3">
          <label className="form-label">Select Publication Support Package <span className="text-danger">*</span></label>
          <select
            className="form-select"
            name="package"
            value={formData.package}
            onChange={handleInputChange}
            required
          >
            <option>{selectedService}</option>
          </select>
        </div>

        {/* Manuscript Title */}
        <div className="mb-3">
          <label className="form-label">Title of the Manuscript <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={publicationFormdata.title}
            onChange={handleInputChange}
            placeholder="Enter..."
            required
          />
        </div>

        {/* Language Preference */}
        <div className="mb-3">
          <label className="form-label">Preferred Language <span className="text-danger">*</span></label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="language"
                value="American English"
                checked={publicationFormdata.language === 'American English'}
                onChange={handleInputChange}
              />
              <label className="form-check-label">American English</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="language"
                value="British English"
                checked={publicationFormdata.language === 'British English'}
                onChange={handleInputChange}
              />
              <label className="form-check-label">British English</label>
            </div>
          </div>
        </div>

        {/* Abstract */}
        <div className="mb-3">
          <label className="form-label">Abstract <span className="text-danger">*</span></label>
          <textarea
            className="form-control"
            name="abstract"
            value={publicationFormdata.abstract}
            onChange={handleInputChange}
            rows={3}
            placeholder="Enter..."
            required
          ></textarea>
        </div>

        {/* Keywords */}
        <div className="mb-3">
          <label className="form-label">Keywords <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="keyword"
            value={publicationFormdata.keyword}
            onChange={handleInputChange}
            placeholder="Enter..."
            required
          />
        </div>

        {/* Instructions for Editor */}
        <div className="mb-3">
          <label className="form-label">Instruction for Editor</label>
          <textarea
            className="form-control"
            name="inst_for_editor"
            value={publicationFormdata.inst_for_editor}
            onChange={handleInputChange}
            rows={3}
            placeholder="Enter..."
          ></textarea>
        </div>

        {/* Word Count */}
        <div className="mb-3">
          <label className="form-label">Word Count <span className="text-danger">*</span></label>
          <input
            type="number"
            className="form-control"
            name="word_count"
            value={publicationFormdata.word_count}
            onChange={handleInputChange}
            placeholder="Enter..."
            required
          />
        </div>

        {/* File Uploads */}
        <div className="mb-3">
          <label className="form-label">Upload Content File <span className="text-danger">*</span> (Compress multiple documents in a single zip file)</label>
          <input
            type="file"
            className="form-control"
            name="upld_content_file"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Figure File (Compress multiple documents in a single zip file)</label>
          <input
            type="file"
            className="form-control"
            name="upld_figure_file"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Table File (Compress multiple documents in a single zip file)</label>
          <input
            type="file"
            className="form-control"
            name="upld_table_file"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
  );
};

export default PublicationForm;
