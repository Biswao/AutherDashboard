"use client";

import React, { useState } from "react";

const PublicationSupportForm = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    majorSubjectType: "",
    specificSubject: "",
    styleOfEnglish: "American English",
    wordRange: "",
    wordCount: "",
    turnaroundTime: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Details About Your Submission</h2>
      <p className="text-sm text-gray-600 mb-6">
        Before we start working on your submission, please answer all the questions below. Your answers will help us to provide you the best possible services.
      </p>

      {/* Service Type */}
      <div className="mb-4">
        <label htmlFor="serviceType" className="block font-medium mb-2">
          Service Type <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleInputChange}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Select --</option>
          <option value="Editing">Editing</option>
          <option value="Proofreading">Proofreading</option>
          <option value="Formatting">Formatting</option>
        </select>
      </div>

      {/* Major Subject Type */}
      <div className="mb-4">
        <label htmlFor="majorSubjectType" className="block font-medium mb-2">
          Major Subject Type <span className="text-red-500">*</span>
        </label>
        <select
          id="majorSubjectType"
          name="majorSubjectType"
          value={formData.majorSubjectType}
          onChange={handleInputChange}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Select --</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
          <option value="Commerce">Commerce</option>
        </select>
      </div>

      {/* Provide Specific Subject */}
      <div className="mb-4">
        <label htmlFor="specificSubject" className="block font-medium mb-2">
          Provide Specific Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="specificSubject"
          name="specificSubject"
          value={formData.specificSubject}
          onChange={handleInputChange}
          placeholder="Enter ..."
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Style of English */}
      <div className="mb-4">
        <label className="block font-medium mb-2">
          Style of English <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="styleOfEnglish"
              value="American English"
              checked={formData.styleOfEnglish === "American English"}
              onChange={handleInputChange}
              className="text-blue-500 focus:ring-blue-500"
            />
            <span className="ml-2">American English</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="styleOfEnglish"
              value="British English"
              checked={formData.styleOfEnglish === "British English"}
              onChange={handleInputChange}
              className="text-blue-500 focus:ring-blue-500"
            />
            <span className="ml-2">British English</span>
          </label>
        </div>
      </div>

      {/* Word Range */}
      <div className="mb-4">
        <label htmlFor="wordRange" className="block font-medium mb-2">
          Word Range <span className="text-red-500">*</span>
        </label>
        <select
          id="wordRange"
          name="wordRange"
          value={formData.wordRange}
          onChange={handleInputChange}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Select --</option>
          <option value="1-1000">1-1000</option>
          <option value="1001-5000">1001-5000</option>
          <option value="5001-10000">5001-10000</option>
        </select>
        <p className="text-sm text-gray-500 mt-2">
          If your word count is more than 40,000 then <a href="#" className="text-blue-500 underline">Click here</a>.
        </p>
      </div>

      {/* Word Count */}
      <div className="mb-4">
        <label htmlFor="wordCount" className="block font-medium mb-2">
          Word Count <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="wordCount"
          name="wordCount"
          value={formData.wordCount}
          onChange={handleInputChange}
          placeholder="Enter word count"
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Turnaround Time */}
      <div className="mb-4">
        <label htmlFor="turnaroundTime" className="block font-medium mb-2">
          Turnaround Time <span className="text-red-500">*</span>
        </label>
        <select
          id="turnaroundTime"
          name="turnaroundTime"
          value={formData.turnaroundTime}
          onChange={handleInputChange}
          className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">-- Select --</option>
          <option value="24 Hours">24 Hours</option>
          <option value="48 Hours">48 Hours</option>
          <option value="72 Hours">72 Hours</option>
        </select>
        <p className="text-sm text-gray-500 mt-2">
          If you desire a turnaround time different than those in the list, please <a href="#" className="text-blue-500 underline">click here</a>.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default PublicationSupportForm;
