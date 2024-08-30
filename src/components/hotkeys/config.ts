import { type HotkeyConfig, hotKeysMap } from "@/const";
import { type ValueType, type Period } from "@/types";

/**
 * Creats a hotkeys configuration and share it between components
 * such as allowing the user to press certain keys to fast execute filtering
 * @param setValueType
 * @param setPeriod
 * @returns HotkeyConfig[]
 */
export const createHotkeysConfig = (
  setValueType: (value: ValueType) => void,
  setPeriod: (value: Period) => void
): HotkeyConfig[] =>
  hotKeysMap.map((hotkey) => ({
    ...hotkey,
    action: (valueType: ValueType, period: Period) => {
      const toggleMap = {
        monthly: "weekly",
        weekly: "monthly",
        revenue: "margin",
        margin: "revenue",
      };

      if (hotkey.value === "weekly") {
        setPeriod(toggleMap[period] as Period);
      } else if (hotkey.value === "margin") {
        setValueType(toggleMap[valueType] as ValueType);
      }
    },
  }));
