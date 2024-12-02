"use client";
import "./ReferAColleague.css";

const ReferAColleague = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center py-10 px-4">
                <div className="w-full bg-white shadow-md rounded-lg p-6">
                    {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Refer a Colleague
                    </h2> */}
                    <h2 style={{fontSize:'18px',fontWeight:'bold',color:'#003366',marginBottom:'16px'}}>Refer A Colleague</h2>
                    {/* Your Details Section */}
                    <form className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-600">Your Details</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Salutation
                                    </label>
                                    <select
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
                                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Enter your name"
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
                                    className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        {/* Colleague's Details Section */}
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
                                        className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Enter colleague's name"
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
                                    className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Enter colleague's email"
                                    required
                                />
                            </div>
                        </div>

                        {/* Security Code */}
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Security Code
                            </label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="text"
                                    className="mt-1 flex-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Enter the code"
                                    required
                                />
                                <img
                                    src="/captcha-placeholder.png"
                                    alt="CAPTCHA"
                                    className="h-10 w-28 bg-gray-200 rounded"
                                />
                                <button
                                    type="button"
                                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                                >
                                    Try new code
                                </button>
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
        </>
    );
};

export default ReferAColleague;
