"use client"
// import Sidebar from "@/app/component/Sidebar/Sidebar"
// import Table from "@/app/component/Table/Table";
import "./Quotation.css"
import useQuotation from "@/app/hooks/authorDashboard/useQuotation";
import { useEffect, useState } from "react";
import { majorSubjectTypeOptions } from "@/app/utils/lib/lib";
import { GroupedOption } from "@/app/utils/interfaces/types";
import Select from "react-select";

const Quotation = () => {
    const [majorSubjectDropdown, setMajorSubjectDropdown] = useState<GroupedOption[]>([])
    const [formData, setFormData] = useState<
        {
            user_id: string | null;
            order_type: string;
            service_type: string;
            service_name: string;
            major_subject: string;
            specific_subject: string;
            delivery_date: string;
            language: string;
            inst_for_editor: string;
            word_count: string;
            pay_mode: string;
            upld_content_file: File | null;
            upld_figure_file: File | null;
            upld_table_file: File | null;
        }>({
            user_id: typeof window !== 'undefined' ? localStorage.getItem('user_id') : "",
            order_type: "quote",
            service_type: "",
            service_name: "",
            major_subject: "",
            specific_subject: "",
            delivery_date: "",
            language: "",
            inst_for_editor: "",
            word_count: "",
            pay_mode: "debit",
            upld_content_file: null,
            upld_figure_file: null,
            upld_table_file: null,
        });

    const { loading, error, serviceType, getServiceNameById, serviceName, majorSubjectType, submitQuotation } = useQuotation()

    useEffect(() => {
        if (majorSubjectType && majorSubjectType.length) {
            const majorSubjectDropdownData = majorSubjectTypeOptions(majorSubjectType)
            setMajorSubjectDropdown(majorSubjectDropdownData)
        }
    }, [majorSubjectType])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleMajorSubjectType = (e: any) => {
        const { value } = e
        setFormData((prev) => ({ ...prev, major_subject: value }));
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // Store the file object
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        if (formData?.user_id && formData?.service_type && formData?.service_name && formData?.major_subject && formData?.language && formData?.specific_subject && formData?.pay_mode) {
            await submitQuotation(formData);
        } else {
            alert("Please fill all the required field.")
            return
        }
    };
    return (

        <div className="flex flex-col items-center justify-center min-h-screen dark">
            <h2 className="title">Request a Quotation</h2>
            <div className="w-full rounded-lg shadow-md p-6">
                <form className="flex flex-col">
                    <div className="flex space-x-4 mb-4">
                        <div className="col-lg-6">

                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Service Type*
                            </label>
                            <select
                                className="text-gray-400 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                id="gender"
                                name="service_type"
                                onChange={(e) => {
                                    getServiceNameById(e.target.value)
                                    handleChange(e)
                                }}
                            >
                                {serviceType && serviceType.length && serviceType.map(val => (
                                    <option value={val.id}>{val.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <label className="block text-sm mb-2 text-gray-700 cursor-pointer">
                                Delivery Date*
                            </label>
                            <input
                                className="text-gray-400 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                id="age"
                                name="delivery_date"
                                type="date"
                                value={formData.delivery_date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Service Name*
                            </label>
                            <select
                                className="text-gray-400 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                id="gender"
                                onChange={handleChange}
                                name="service_name"
                            >
                                {serviceName && serviceName.length && serviceName.map(val => (
                                    <option value={val.id}>{val.service_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Preferred Language*
                            </label>
                            <input name="language" onChange={handleChange} type="radio" placeholder="American English" />
                            &nbsp;
                            <label className="text-md mb-2 text-gray-700 cursor-pointer">
                                American English
                            </label>
                            &nbsp;
                            &nbsp;
                            <input onChange={handleChange} type="radio" />
                            &nbsp;
                            <label className="text-md mb-2 text-gray-700 cursor-pointer">
                                British English
                            </label>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Major Subject Type *
                            </label>
                            <Select
                                id="gender"
                                options={majorSubjectDropdown}
                                onChange={handleMajorSubjectType}
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Instruction for Editor
                            </label>
                            <textarea
                                name="inst_for_editor"
                                onChange={handleChange}
                                placeholder="Enter your message here..."
                                className="text-gray-700 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ease-in-out duration-150"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Specific Subject Area *
                            </label>
                            <textarea
                                name="specific_subject"
                                onChange={handleChange}
                                placeholder="Enter your message here..."
                                className="text-gray-700 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ease-in-out duration-150"
                            ></textarea>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Word Count
                            </label>
                            <input
                                onChange={handleChange}
                                name="word_count"
                                placeholder="Word Count"
                                className="text-gray-200 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="border-2 border-dashed border-blue-400 rounded-lg p-4 w-1/2 flex flex-col items-center hover:bg-blue-200">
                            <h3 className="text-gray-700 font-semibold mb-2">Upload Content File</h3>
                            <p className="text-sm text-red-500 italic mb-4">(Compress multiple documents in a single zip file)</p>
                            <label className="flex items-center cursor-pointer">
                                <input name="upld_content_file" onChange={handleFileChange} type="file" className="hidden" />
                                <div className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                                    Choose File
                                </div>
                                <span className="ml-2 text-gray-600"> {formData.upld_content_file ? formData.upld_content_file.name : "No file chosen"}</span>
                            </label>
                        </div>
                        <div className="border-2 border-dashed border-blue-400 rounded-lg p-4 w-1/2 flex flex-col items-center hover:bg-blue-200">
                            <h3 className="text-gray-700 font-semibold mb-2">Upload Figure File</h3>
                            <p className="text-sm text-red-500 italic mb-4">(Compress multiple documents in a single zip file)</p>
                            <label className="flex items-center cursor-pointer">
                                <input name="upld_figure_file" onChange={handleFileChange} type="file" className="hidden" />
                                <div className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                                    Choose File
                                </div>
                                <span className="ml-2 text-gray-600">{formData.upld_figure_file ? formData.upld_figure_file.name : "No file chosen"}</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="border-2 border-dashed border-blue-400 rounded-lg p-4 w-1/2 flex flex-col items-center hover:bg-blue-200">
                            <h3 className="text-gray-700 font-semibold mb-2">Upload Table File</h3>
                            <p className="text-sm text-red-500 italic mb-4">(Compress multiple documents in a single zip file)</p>
                            <label className="flex items-center cursor-pointer">
                                <input name="upld_table_file" onChange={handleFileChange} type="file" className="hidden" />
                                <div className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                                    Choose File
                                </div>
                                <span className="ml-2 text-gray-600">{formData.upld_table_file ? formData.upld_table_file.name : "No file chosen"}</span>
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Payment Mode *          (We will not be charging you now, we just need to know your preferred mode)
                            </label>
                            <select
                                className="text-gray-400 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                id="gender"
                                onChange={handleChange}
                                name="pay_mode"
                            >
                                <option value="debit">Debit</option>
                                <option value="credit">Credit</option>
                            </select>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
                                >
                                    {loading ? "Loading..." : "Submit"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Quotation