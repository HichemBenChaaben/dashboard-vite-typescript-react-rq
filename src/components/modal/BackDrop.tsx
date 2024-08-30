const BackDrop = ({
  isShown,
  children,
}: {
  isShown: boolean;
  children: React.ReactNode;
}) => {
  if (!isShown) {
    return null;
  }
  return (
    <div className="fixed overflow-hidden inset-0 bg-black bg-opacity-50 z-20">
      {children}
    </div>
  );
};

export default BackDrop;
