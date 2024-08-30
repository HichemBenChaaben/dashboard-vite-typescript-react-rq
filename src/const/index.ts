import { type Period, type ValueType } from "@/types";

export interface HotkeyConfig {
  keys: string;
  action: (valueType: ValueType, period: Period) => void;
  description: string;
  value: Period | ValueType;
}

/*
 * used to namespace the localstorage items
 * to avoid namespace collision
 */
export const LOCAL_STORAGE_KEY = "im-facets-users";

/**
 * hotkey map maps a hotkey with an action
 * if the application grows further its easier to track
 * all hotkeys being used by placing all hotkeys here
 */
export const hotKeysMap: Omit<HotkeyConfig, "action">[] = [
  {
    keys: "shift+r",
    value: "margin",
    description: "toggle revenue margin / revenue",
  },
  {
    keys: "shift+w",
    value: "weekly",
    description: "toggle the period weekly / monthly",
  },
];
