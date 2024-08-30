const BackDrop = ({
  isShown,
  children,
  onClick,
  ...rest
}: {
  isShown: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  if (!isShown) {
    return null;
  }
  return (
    <div
      onClick={onClick}
      className="fixed overflow-hidden inset-0 bg-black bg-opacity-50 z-20"
      {...rest}
    >
      {children}
    </div>
  );
};

export default BackDrop;
