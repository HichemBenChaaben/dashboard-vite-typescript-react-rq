import React from "react";

const Alert = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="p-2 mb-2 text-sm text-blue-800 rounded-md bg-blue-50 dark:bg-gray-800 dark:text-blue-400 border border-solid border-1 border-blue-100"
      role="alert"
    >
      {children}
    </div>
  );
};

export default Alert;
