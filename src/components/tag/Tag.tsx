import { type FC } from "react";

interface TagProps {
  children: React.ReactNode;
}
const Tag: FC<TagProps> = ({ children }) => (
  <span className="bg-indigo-100 border border-solid border-indigo-200 text-indigo-800 dark:bg-indigo-900 dark:text-blue-300 text-xs p-1 rounded-md inline-flex items-center font-medium px-2.5 py-0.5 capitalize mr-2">
    <span className="relative flex h-2 w-2 mr-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
    </span>
    {children}
  </span>
);

export default Tag;
