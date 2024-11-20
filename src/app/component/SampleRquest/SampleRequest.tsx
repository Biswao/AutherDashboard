

const SampleRequest = () => {

    return (
        <>
            <div className="min-h-screen flex items-center justify-center py-10 px-4">
                <div className="w-full bg-white shadow-md rounded-lg p-8">
                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">
                        To have a feel of the quality of our Substantive editing service, you can get any 1 page sample document edited by us for USD 15 only. The document for sample editing should contain a maximum of 275 words. If the total number of words in the document submitted for sample editing exceeds the specified word limit, only the first 275 words will be edited and returned to the author.
                        <br />
                        <br />
                        Please fill in the form below to complete submission of your document (up to 275 words only) for Sample editing.
                    </p>

                    {/* Form */}
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Service Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Service Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    className="mt-1 w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                >
                                    <option value="">-- Select --</option>
                                    <option value="editing">Editing</option>
                                    <option value="proofreading">Proofreading</option>
                                </select>
                            </div>

                            {/* Preferred Language */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Preferred Language <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-1 flex items-center space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="language"
                                            value="American English"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            required
                                        />
                                        <span className="ml-2 text-sm text-gray-700">
                                            American English
                                        </span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="language"
                                            value="British English"
                                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">
                                            British English
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Major Subject Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Major Subject Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="mt-1 w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            >
                                <option value="">-- Select --</option>
                                <option value="science">Science</option>
                                <option value="arts">Arts</option>
                                <option value="commerce">Commerce</option>
                            </select>
                        </div>

                        {/* Word Count */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Word Count of your full paper <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                className="mt-1 w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Enter the word count"
                                required
                            />
                        </div>

                        {/* Instructions for Editor */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Instruction for Editor
                            </label>
                            <textarea
                                className="mt-1 w-full h-24 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Enter any specific instructions..."
                            />
                        </div>

                        {/* Upload Content File */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Upload Content File <span className="text-red-500">*</span>
                                <span className="text-sm text-red-500 ml-2">
                                    (Compress multiple documents in a single zip file)
                                </span>
                            </label>
                            <input
                                type="file"
                                className="mt-1 w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        {/* Note */}
                        <div className="bg-gray-100 p-4 rounded-md border border-gray-300 text-sm text-gray-600">
                            <strong>*Please note:</strong>
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>We will not entertain more than one sample for a particular client.</li>
                                <li>
                                    The sample edit of 275 words will be considered within the total manuscript word count, for those who avail our services.
                                </li>
                                <li>
                                    You are requested to provide any of your social media contacts such as WhatsApp, Viber, Line, Telegram, WeChat for better correspondence.
                                </li>
                                <li>The Paid Sample Editing will be charged USD 5 only.</li>
                            </ul>
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
    )
}

export default SampleRequest