import { type ValueType, type Period } from "@/types";
import { useEffect } from "react";
/**
 * trigger a callback on a combination of keys
 * because every trader in the world need hot keys!
 * @param hotkey string
 * @param cb () => void
 */
const useHotkey = (
  hotkey: string,
  cb: (valueType: ValueType, period: Period) => void,
  valueType: ValueType,
  period: Period
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const [modifier, key] = hotkey.split("+");
      const keyIsPressed = event.key.toUpperCase() === key.toUpperCase();
      const modifierIsPressed = modifier === "shift" ? event.shiftKey : true;
      if (modifierIsPressed && keyIsPressed) {
        cb(valueType, period);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hotkey, cb]);
};

export default useHotkey;
