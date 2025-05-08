"use client";
import "./ReferAColleague.css";
import { useRef } from "react";
import useReferAColleague from "@/app/hooks/authorDashboard/useReferAColleague";

const ReferAColleague = () => {
  const { submitReferAColleague, loading } = useReferAColleague();
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("hey heello");

    const form = formRef.current;

    if (!form) return;

    const formData = {
      yourSalutation: form.ref_by_sal.value,
      yourName: form.ref_by_name.value,
      yourEmail: form.ref_by_email.value,
      colleagueSalutation: form.colg_sal.value,
      colleagueName: form.colg_name.value,
      colleagueEmail: form.colg_email.value,
    };

    await submitReferAColleague(formData);
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
        <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
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
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
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
                  name="ref_by_name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email ID
              </label>
              <input
                name="ref_by_email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
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
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
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
                  name="colg_name"
                  type="text"
                  placeholder="Enter colleague's name"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email ID
              </label>
              <input
                name="colg_email"
                type="email"
                placeholder="Enter colleague's email"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferAColleague;
