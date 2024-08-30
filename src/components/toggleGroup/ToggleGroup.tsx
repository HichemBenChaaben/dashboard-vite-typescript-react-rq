import { type FC } from "react";
import { type ValueType } from "@/types";

interface ToggleButtonProps {
  value: string;
  icon: string; // FontAwesome icon class
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface Props {
  buttons: ToggleButtonProps[];
  type: ValueType;
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
          <span className="sr-only">{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ToggleButtons;
