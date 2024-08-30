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
  return (
    <div
      onClick={onClick}
      className="fixed overflow-hidden inset-0 bg-black bg-opacity-50 z-20"
    />
  );
};

export default BackDrop;
