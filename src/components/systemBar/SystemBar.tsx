const SystemBar = ({
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
    <div className="fixed bottom-0 w-full flex justify-center items-center bg-orange-300 z-50 right-0 left-0 p-4 shadow-lg text-white">
      {children}
    </div>
  );
};

export default SystemBar;
