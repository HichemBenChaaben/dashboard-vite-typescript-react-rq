import SnackBar from "@/components/snackbar/SnackBar";
import { hotKeysMap } from "@/const";

const HotKeys = () => {
  return (
    <SnackBar>
      <div className="flex-1">
        <div className="text-sm font-medium">
          <span className="text-lg mr-2 fa fa-keyboard" />
          <strong>😎 Hotkeys:</strong>
          <div className="mt-2 space-y-1">
            {hotKeysMap.map(({ description, keys }, index) => (
              <div id={`hotkey-${index}`}>
                <kbd className="bg-gray-700 p-1 rounded">{keys}</kbd>
                {description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SnackBar>
  );
};

export default HotKeys;
