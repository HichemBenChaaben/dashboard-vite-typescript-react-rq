import { type Period, type ValueType } from "@/types";

export interface HotkeyConfig {
  keys: string;
  action: (valueType: ValueType, period: Period) => void;
  description: string;
  value: Period | ValueType;
}

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

export const LOCAL_STORAGE_KEY = "im-facets-users";