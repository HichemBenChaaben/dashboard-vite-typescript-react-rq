import React from "react";

interface Props {
  cols?: number;
  rows?: number;
}
const LoadingTable: React.FC<Props> = ({ cols = 6, rows = 6 }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {[...Array(rows)].map((_, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[...Array(rows)].map((_, index) => (
                  <tr key={index}>
                    {[...Array(cols)].map((_, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingTable;
