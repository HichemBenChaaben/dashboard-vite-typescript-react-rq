const BackDrop = ({
  isShown,
  onClick,
}: {
  isShown: boolean;
  onClick: () => void;
}) => {
  if (!isShown) {
    return null;
  }

  const handleClick = () => {
    onClick();
  };
  return (
    <div
      onClick={handleClick}
      className="fixed overflow-hidden inset-0 bg-black bg-opacity-50 z-20"
    />
  );
};

export default BackDrop;
