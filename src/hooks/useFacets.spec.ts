import { renderHook, act } from "@testing-library/react";
import useFacets from "@/hooks/useFacets"; // Assuming your hook is in the '@/hooks' directory
import { describe, it, expect, afterEach } from "vitest";
import { LOCAL_STORAGE_KEY } from "@/const";

describe("useFacets hook", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useFacets());

    expect(result.current.period).toBe("monthly");
    expect(result.current.valueType).toBe("margin");
  });

  it("should update values and persist to localStorage", () => {
    const { result } = renderHook(() => useFacets());

    act(() => {
      result.current.setPeriod("weekly");
      result.current.setValueType("revenue");
    });

    expect(result.current.period).toBe("weekly");
    expect(result.current.valueType).toBe("revenue");

    const storedFacets = localStorage.getItem(LOCAL_STORAGE_KEY);
    expect(storedFacets).toEqual(
      JSON.stringify({ valueType: "revenue", period: "weekly" })
    );
  });
});
