import { useContext } from "react";
import { UserFacetsContext } from "@/context/Facets";
import SnackBar from "@/components/snackbar/SnackBar";
import { hotKeysMap } from "@/const";
import useHotkey from "@/hooks/useHotKey";
import { createHotkeysConfig } from "./config";

const HotKeys = () => {
  const { valueType, setValueType, period, setPeriod } =
    useContext(UserFacetsContext);

  const hotKeys = createHotkeysConfig(setValueType, setPeriod);

  hotKeys.forEach((hotkey) => {
    useHotkey(hotkey.keys, hotkey.action, valueType, period);
  });

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
