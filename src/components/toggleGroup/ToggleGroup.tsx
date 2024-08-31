import { type FC } from "react";

interface ToggleButtonProps {
  value: string;
  icon: string; // FontAwesome icon class
  isActive: boolean;
  onClick: () => void;
}

interface Props {
  buttons: ToggleButtonProps[];
}

const ToggleButtons: FC<Props> = ({ buttons, ...rest }) => {
  return (
    <div className="flex justify-center" {...rest}>
      {buttons.map((button, index) => (
        <button
          key={button.value}
          className={`flex items-center justify-center w-10 h-10 ${index === 0 ? "rounded-tl-md rounded-bl-md" : "rounded-tr-md rounded-br-md"} transition-all duration-300 ${
            button.isActive
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={button.onClick}
        >
          <i className={`fas ${button.icon} text-sm`} />
        </button>
      ))}
    </div>
  );
};

export default ToggleButtons;
