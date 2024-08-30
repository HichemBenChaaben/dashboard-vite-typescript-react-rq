const BackDrop = ({
  isShown,
  children,
  onClick,
}: {
  isShown: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  if (!isShown) {
    return null;
  }

  const handleClick = () => {
    console.log("clicked....");
    onClick();
  };
  return (
    <div
      onClick={handleClick}
      className="fixed overflow-hidden inset-0 bg-black bg-opacity-50 z-20"
    >
      {children}
    </div>
  );
};

export default BackDrop;
