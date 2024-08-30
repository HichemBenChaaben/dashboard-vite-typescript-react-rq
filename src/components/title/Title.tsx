import React from "react";

interface TitleTagProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

const Title: React.FC<TitleTagProps> = ({
  as: Tag = "h2",
  className,
  children,
}) => {
  return <Tag className={`text-xl text-gray-800 ${className}`}>{children}</Tag>;
};

export default Title;
