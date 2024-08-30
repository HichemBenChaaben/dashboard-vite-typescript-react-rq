import { useContext } from "react";
import {
  useInvoicesQuery,
  useRevenuesQuery,
  useBestCustomersQuery,
  useBestProductCategoriesQuery,
} from "@/api/queries";
import { UserFacetsContext } from "@/context/Facets";

export const useDashboardData = (invoiceId?: number) => {
  const { period, valueType } = useContext(UserFacetsContext);
  
  const { data: revenues, isLoading: isRevenuesLoading } =
    useRevenuesQuery(period);
  const { data: invoices, isLoading: isInvoiceQueryLoading } =
    useInvoicesQuery(invoiceId);
  const { data: bestCustomers, isLoading: isBestCustomersLoading } =
    useBestCustomersQuery();
  const { data: bestProductCategories, isLoading: isBestCategoriesLoading } =
    useBestProductCategoriesQuery();

  return {
    period,
    valueType,
    invoices,
    revenues,
    isRevenuesLoading,
    bestCustomers,
    isBestCustomersLoading,
    isBestCategoriesLoading,
    isInvoiceQueryLoading,
    bestProductCategories,
  };
};
