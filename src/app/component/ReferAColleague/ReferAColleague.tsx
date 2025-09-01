"use client";
import React, { useState } from "react";
import "./ReferAColleague.css";

const ReferAColleague = () => {
  const [formData, setFormData] = useState({
    ref_by_sal: "Mr.",
    ref_by_name: "",
    ref_by_email: "",
    colg_sal: "Mr.",
    colg_name: "",
    colg_email: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://secure.manuscriptedit.com/api/refer_a_colleague.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert("Referral submitted successfully!");
      } else {
        alert(
          `Failed to submit referral: ${result.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      alert("An error occurred while submitting the referral.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full bg-white shadow-md rounded-lg p-6">
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#003366",
            marginBottom: "16px",
          }}
        >
          Refer A Colleague
        </h2>
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          {/* Your Details */}
          <div>
            <h6 className="text-lg font-semibold text-gray-600">
              Enter Your Details
            </h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Salutation
                </label>
                <select
                  name="ref_by_sal"
                  value={formData.ref_by_sal}
                  onChange={handleChange}
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Dr.">Dr.</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="ref_by_name"
                  value={formData.ref_by_name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email ID
              </label>
              <input
                type="email"
                name="ref_by_email"
                value={formData.ref_by_email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Colleague Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              Colleague's Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Salutation
                </label>
                <select
                  name="colg_sal"
                  value={formData.colg_sal}
                  onChange={handleChange}
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Dr.">Dr.</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="colg_name"
                  value={formData.colg_name}
                  onChange={handleChange}
                  placeholder="Enter colleague's name"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email ID
              </label>
              <input
                type="email"
                name="colg_email"
                value={formData.colg_email}
                onChange={handleChange}
                placeholder="Enter colleague's email"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferAColleague;
