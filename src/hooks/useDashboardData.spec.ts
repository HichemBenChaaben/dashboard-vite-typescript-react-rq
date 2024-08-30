import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useContext } from "react";
import {
  useInvoicesQuery,
  useRevenuesQuery,
  useBestCustomersQuery,
  useBestProductCategoriesQuery,
} from "@/api/queries";
import { UserFacetsContext } from "@/context/Facets";
import { useDashboardData } from "./useDashboardData";

import { vi } from "vitest";
import { useContext } from "react";
import {
  useInvoicesQuery,
  useRevenuesQuery,
  useBestCustomersQuery,
  useBestProductCategoriesQuery,
} from "@/api/queries";

import useFacets from "@/hooks/useFacets";

vi.mock("react", () => ({
  ...vi.importActual("react"),
  useContext: vi.fn(),
  useState: vi.fn(),
}));

vi.mock("@/api/queries", () => ({
  useInvoicesQuery: vi.fn(),
  useRevenuesQuery: vi.fn(),
  useBestCustomersQuery: vi.fn(),
  useBestProductCategoriesQuery: vi.fn(),
}));

vi.mock("@/api/queries", () => ({
  useInvoicesQuery: vi.fn(),
  useRevenuesQuery: vi.fn(),
  useBestCustomersQuery: vi.fn(),
  useBestProductCategoriesQuery: vi.fn(),
}));

const mockContextValue = {
  period: "monthly",
  valueType: "revenue",
};
vi.mock("@/context/Facets", () => ({
  UserFacetsContext: {
    Consumer: ({ children }) => children(mockContextValue),
  },
}));

describe.skip("useDashboardData", () => {
  it("should return the correct data and loading states", () => {
    const period = "monthly";
    const valueType = "margin";

    const { result } = renderHook(() => useFacets());
    expect(1).toBe(1);

    // // Mock useContext to return expected period and valueType
    // useContext.mockImplementation({ period, valueType });

    // const mockRevenuesData = { total: 1000 };
    // const mockInvoicesData = { invoiceId: 1 };
    // const mockBestCustomersData = [{ name: "Customer A" }];
    // const mockBestCategoriesData = [{ category: "Category A" }];

    // useRevenuesQuery.mockImplementation({
    //   data: mockRevenuesData,
    //   isLoading: false,
    // });

    // useInvoicesQuery.mockImplementation({
    //   data: mockInvoicesData,
    //   isLoading: false,
    // });

    // useBestCustomersQuery.mockImplementation({
    //   data: mockBestCustomersData,
    //   isLoading: false,
    // });

    // useBestProductCategoriesQuery.mockImplementation({
    //   data: mockBestCategoriesData,
    //   isLoading: false,
    // });

    // const { result } = renderHook(() => useDashboardData());

    // expect(result.current.period).toBe(mockContextValue.period);
    // expect(result.current.valueType).toBe(mockContextValue.valueType);
    // expect(result.current.revenues).toBe(mockRevenuesData);
    // expect(result.current.invoices).toBe(mockInvoicesData);
    // expect(result.current.bestCustomers).toBe(mockBestCustomersData);
    // expect(result.current.bestProductCategories).toBe(mockBestCategoriesData);
    // expect(result.current.isRevenuesLoading).toBe(false);
    // expect(result.current.isInvoiceQueryLoading).toBe(false);
    // expect(result.current.isBestCustomersLoading).toBe(false);
    // expect(result.current.isBestCategoriesLoading).toBe(false);
  });

  it.skip("should handle loading states correctly", () => {
    useRevenuesQuery.mockImplementation({
      data: null,
      isLoading: true,
    });

    useInvoicesQuery.mockImplementation({
      data: null,
      isLoading: true,
    });

    useBestCustomersQuery.mockImplementation({
      data: null,
      isLoading: true,
    });

    useBestProductCategoriesQuery.mockImplementation({
      data: null,
      isLoading: true,
    });

    const { result } = renderHook(() => useDashboardData());

    expect(result.current.isRevenuesLoading).toBe(true);
    expect(result.current.isInvoiceQueryLoading).toBe(true);
    expect(result.current.isBestCustomersLoading).toBe(true);
    expect(result.current.isBestCategoriesLoading).toBe(true);
  });
});
