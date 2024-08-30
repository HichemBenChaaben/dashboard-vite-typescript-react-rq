import { useContext } from "react";
import {
  useInvoicesQuery,
  useRevenuesQuery,
  useBestCustomersQuery,
  useBestProductCategoriesQuery,
} from "@/api/queries";
import { UserFacetsContext } from "@/context/Facets.context";

export const useDashboardData = (invoiceId?: number) => {
  const { period, valueType } = useContext(UserFacetsContext);

  const {
    data: revenues,
    isLoading: isRevenuesLoading,
    isLoadingError: isRevenuesLoadingError,
  } = useRevenuesQuery(period);

  const {
    data: invoices,
    isLoading: isInvoiceQueryLoading,
    isLoadingError: isInvoiceQueryLoadingError,
  } = useInvoicesQuery(invoiceId);

  const {
    data: bestCustomers,
    isLoading: isBestCustomersLoading,
    isLoadingError: isBestCustomersLoadingError,
  } = useBestCustomersQuery();

  const {
    data: bestProductCategories,
    isLoading: isBestCategoriesLoading,
    isLoadingError: isBestCategoriesLoadingError,
  } = useBestProductCategoriesQuery();

  return {
    period,
    valueType,

    isInvoiceQueryLoading,
    isInvoiceQueryLoadingError,
    invoices,

    isRevenuesLoading,
    isRevenuesLoadingError,
    revenues,

    isBestCustomersLoading,
    isBestCustomersLoadingError,
    bestCustomers,

    isBestCategoriesLoading,
    isBestCategoriesLoadingError,
    bestProductCategories,
  };
};
