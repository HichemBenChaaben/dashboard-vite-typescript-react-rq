import React, { ReactNode, useState } from "react";

interface SnackBarContentProps {
  children: ReactNode;
}

interface SnackBarIndicatorProps {
  children: ReactNode;
  [key: string]: any;
}

const SnackBar: React.FC<SnackBarIndicatorProps> & {
  Content: React.FC<SnackBarContentProps>;
} = ({ children, ...props }) => {
  const [visible, toggleVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      data-testid="snack-bar"
      className="fixed bottom-4 right-4 w-[400px] p-4 bg-gray-800 text-white rounded-lg shadow-lg flex items-start space-x-4 md:flex"
      {...props}
    >
      {children}
      <button
        data-testid="snack-bar-close-btn"
        onClick={() => toggleVisible(false)}
        className="p-2 rounded-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <span className="text-white text-xl fa fa-times" />
      </button>
    </div>
  );
};

const SnackBarContent: React.FC<SnackBarContentProps> = ({ children }) => (
  <div className="flex-1 text-sm font-medium">{children}</div>
);

SnackBar.Content = SnackBarContent;

export default SnackBar;
