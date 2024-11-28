import React, { useState } from 'react';

const PublicationForm = () => {
  const [formData, setFormData] = useState({
    package: 'Standard Package',
    manuscriptTitle: '',
    language: 'American English',
    abstract: '',
    keywords: '',
    instructions: '',
    wordCount: '',
    contentFile: null,
    figureFile: null,
    tableFile: null,
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e:any) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Form submitted successfully!');
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
            <option>Standard Package</option>
            <option>Premium Package</option>
          </select>
        </div>

        {/* Manuscript Title */}
        <div className="mb-3">
          <label className="form-label">Title of the Manuscript <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            name="manuscriptTitle"
            value={formData.manuscriptTitle}
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
                checked={formData.language === 'American English'}
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
                checked={formData.language === 'British English'}
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
            value={formData.abstract}
            onChange={handleInputChange}
            rows="3"
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
            name="keywords"
            value={formData.keywords}
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
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            rows="3"
            placeholder="Enter..."
          ></textarea>
        </div>

        {/* Word Count */}
        <div className="mb-3">
          <label className="form-label">Word Count <span className="text-danger">*</span></label>
          <input
            type="number"
            className="form-control"
            name="wordCount"
            value={formData.wordCount}
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
            name="contentFile"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Figure File (Compress multiple documents in a single zip file)</label>
          <input
            type="file"
            className="form-control"
            name="figureFile"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Table File (Compress multiple documents in a single zip file)</label>
          <input
            type="file"
            className="form-control"
            name="tableFile"
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
