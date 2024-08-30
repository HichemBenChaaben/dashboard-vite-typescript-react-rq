import { useState, useEffect } from "react";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      className={`${isOnline && "hidden"} fixed bottom-0 w-full flex justify-center items-center bg-orange-300 z-50 right-0 left-0 p-4 shadow-lg text-white`}
    >
      {!isOnline && "You are offline"}
    </div>
  );
};

export default NetworkStatus;
