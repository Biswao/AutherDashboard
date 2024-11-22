import Sidebar from "@/app/component/Sidebar/Sidebar"
import Table from "@/app/component/Table/Table";
import "./Quotation.css"

const Quotation = () => {
    // const headers: string[] = ['Quotation Id', 'Service Type', 'Submit Date', 'Delivery Date'];
    // const data: string[][] = [];
    return (
        <div className="flex flex-col items-center justify-center min-f-screen dark">
            <div className="w-full rounded-lg shadow-md p-6">
                <form className="flex flex-col">
                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Service Type*
                            </label>
                            <select
                                className="text-gray-400 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                id="gender"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm mb-2 text-gray-700 cursor-pointer">
                                Delivery Date*
                            </label>
                            <input
                                className="text-gray-400 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                id="age"
                                type="date"
                            />
                        </div>
                        {/* <input
                            placeholder="First Name"
                            className="text-gray-200 border-0 rounded-md p-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                        />
                        <input
                            placeholder="Last Name"
                            className="text-gray-200 border-0 rounded-md p-2 w-1/2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="text"
                        /> */}
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Service Name*
                            </label>
                            <select
                                className="text-gray-400 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                id="gender"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Preferred Language*
                            </label>
                            <input type="radio" placeholder="American English"/>
                            &nbsp;
                            <label className="text-md mb-2 text-gray-700 cursor-pointer">
                                American English
                            </label>
                            &nbsp;
                            &nbsp;
                            <input type="radio" />
                            &nbsp;
                            <label className="text-md mb-2 text-gray-700 cursor-pointer">
                                British English
                            </label>
                        </div>
                        {/* <input
                            placeholder="Email"
                            className="text-gray-200 border-0 rounded-md p-2 w-1/2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="email"
                        />
                        <input
                            placeholder="Confirm Email"
                            className="text-gray-200 border-0 rounded-md p-2 w-1/2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                            type="email"
                        /> */}
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Major Subject Type *
                            </label>
                            <select
                                className="text-gray-400 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                id="gender"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Instruction for Editor
                            </label>
                            <textarea
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
                                placeholder="Enter your message here..."
                                className="text-gray-700 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ease-in-out duration-150"
                            ></textarea>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Word Count
                            </label>
                            <input
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
                                <input type="file" className="hidden" />
                                <div className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                                    Choose File
                                </div>
                                <span className="ml-2 text-gray-600">No file chosen</span>
                            </label>
                        </div>
                        <div className="border-2 border-dashed border-blue-400 rounded-lg p-4 w-1/2 flex flex-col items-center hover:bg-blue-200">
                            <h3 className="text-gray-700 font-semibold mb-2">Upload Figure File</h3>
                            <p className="text-sm text-red-500 italic mb-4">(Compress multiple documents in a single zip file)</p>
                            <label className="flex items-center cursor-pointer">
                                <input type="file" className="hidden" />
                                <div className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                                    Choose File
                                </div>
                                <span className="ml-2 text-gray-600">No file chosen</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <div className="border-2 border-dashed border-blue-400 rounded-lg p-4 w-1/2 flex flex-col items-center hover:bg-blue-200">
                            <h3 className="text-gray-700 font-semibold mb-2">Upload Table File</h3>
                            <p className="text-sm text-red-500 italic mb-4">(Compress multiple documents in a single zip file)</p>
                            <label className="flex items-center cursor-pointer">
                                <input type="file" className="hidden" />
                                <div className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                                    Choose File
                                </div>
                                <span className="ml-2 text-gray-600">No file chosen</span>
                            </label>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-md mb-2 text-gray-700 cursor-pointer">
                                Payment Mode *          (We will not be charging you now, we just need to know your preferred mode)
                            </label>
                            <select
                                className="text-gray-400 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                id="gender"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Quotation