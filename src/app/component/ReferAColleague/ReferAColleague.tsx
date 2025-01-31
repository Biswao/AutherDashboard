"use client";

import { useState } from "react";
import useReferAColleague from "@/app/hooks/authorDashboard/useReferAColleague";

const ReferAColleague = () => {
    const { loading, submitReferAColleague } = useReferAColleague();
    const [formData, setFormData] = useState({
        yourSalutation: "Mr.",
        yourFirstName: "",
        yourEmail: "",
        colleagueSalutation: "Mr.",
        colleagueFirstName: "",
        colleagueEmail: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value.trim(), // Trim whitespace
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Final Form Data Before Submit:", formData); // Debugging
        submitReferAColleague(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-10 px-4">
            <div className="w-full bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-bold text-[#003366] mb-4">Refer A Colleague</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Your Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-600">Your Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Salutation</label>
                                <select name="yourSalutation" value={formData.yourSalutation} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md">
                                    <option value="Mr.">Mr.</option>
                                    <option value="Ms.">Ms.</option>
                                    <option value="Dr.">Dr.</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" name="yourFirstName" value={formData.yourFirstName} onChange={handleChange} required className="mt-1 w-full border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Email ID</label>
                            <input type="email" name="yourEmail" value={formData.yourEmail} onChange={handleChange} required className="mt-1 w-full border-gray-300 rounded-md" />
                        </div>
                    </div>

                    {/* Colleague's Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-600">Colleague's Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Salutation</label>
                                <select name="colleagueSalutation" value={formData.colleagueSalutation} onChange={handleChange} className="mt-1 w-full border-gray-300 rounded-md">
                                    <option value="Mr.">Mr.</option>
                                    <option value="Ms.">Ms.</option>
                                    <option value="Dr.">Dr.</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" name="colleagueFirstName" value={formData.colleagueFirstName} onChange={handleChange} required className="mt-1 w-full border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">Email ID</label>
                            <input type="email" name="colleagueEmail" value={formData.colleagueEmail} onChange={handleChange} required className="mt-1 w-full border-gray-300 rounded-md" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none">
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReferAColleague;
