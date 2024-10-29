import { TableProps } from "@/app/utils/interfaces/types";


const Table: React.FC<TableProps> = ({ mainHeader, headers, data, emptyMessage }) => {
    return (
        <div className="w-full max-w-screen bg-white shadow-md rounded-lg p-4 border border-gray-300">
            <h2 className="text-lg font-semibold mb-4">{mainHeader}</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-full">
                    <thead>
                        <tr className="border-t border-b">
                            {headers.map((header, index) => (
                                <th key={index} className="py-2 px-4 text-left text-gray-700 font-medium whitespace-nowrap">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border-b">
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="py-2 px-4 text-gray-600 whitespace-nowrap">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={headers.length} className="py-4 text-center text-gray-500">
                                    {emptyMessage}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;