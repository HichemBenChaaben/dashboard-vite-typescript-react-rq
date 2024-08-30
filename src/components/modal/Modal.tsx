import React, { type FC } from "react";
import Portal from "./Portal";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20">{children}</div>
  );
};
const Modal: FC<{
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Portal>
      <BackDrop isShown={isOpen}>
        <div
          tabIndex={-1}
          aria-hidden="true"
          className={`${isOpen ? "block" : "hidden"} flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <span className="sr-only" onClick={() => onClose()}>
                    Close modal
                  </span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">{children}</div>
              <div className="flex items-end justify-end gap-4 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={() => onClose()}
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </BackDrop>
    </Portal>
  );
};

export default Modal;
