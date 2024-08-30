import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useHotkey from "@/hooks/useHotKey";

describe("useHotkey hook", () => {
  it("should trigger callback on correct hotkey combination", () => {
    const mockCallback = vi.fn();
    const hotkey = "Shift+A";
    const valueType = "margin";
    const period = "monthly";

    renderHook(() => useHotkey(hotkey, mockCallback, valueType, period));
    const event = new KeyboardEvent("keydown", { key: "A", shiftKey: true });
    window.dispatchEvent(event);
    act(() => {
      document.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "A",
          shiftKey: true,
        })
      );
    });

    expect(mockCallback).toHaveBeenCalledWith(valueType, period);
  });

  it("should not trigger callback on correct hotkey combination", () => {
    const mockCallback = vi.fn();
    const hotkey = "Shift+A";
    const valueType = "margin";
    const period = "monthly";

    renderHook(() => useHotkey(hotkey, mockCallback, valueType, period));
    const event = new KeyboardEvent("keydown", { key: "X", shiftKey: true });
    window.dispatchEvent(event);

    act(() => {
      document.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "X",
          shiftKey: true,
        })
      );
    });

    expect(mockCallback).not.toHaveBeenCalled();
  });

  it("should clean up the event listener when the component unmounts", () => {
    const mockCallback = vi.fn();
    const valueType = "revenue";
    const period = "monthly";
    const { unmount } = renderHook(() =>
      useHotkey("shift+A", mockCallback, valueType, period)
    );
    unmount();
    const event = new KeyboardEvent("keydown", { key: "A", shiftKey: true });
    window.dispatchEvent(event);
    expect(mockCallback).not.toHaveBeenCalled();
  });
});
