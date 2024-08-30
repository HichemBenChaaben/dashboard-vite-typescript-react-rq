import {
  type BestCustomer,
  type ValueType,
  type InvoicesTransformed,
} from "@/types";

/**
 * calculates aggregate of best customers by valuetype
 * @param data
 * @param valueType
 * @returns
 */
export const aggBestCustomers = (
  data: BestCustomer[] = [],
  valueType: ValueType
) => {
  const mappedType: Record<ValueType, string> = {
    margin: "total_margin",
    revenue: "total_revenue",
  };
  const type = mappedType[valueType] as keyof BestCustomer;
  return data.reduce((acc, next) => {
    return acc + (next[type] as number);
  }, 0);
};

/**
 * calculates aggregate of invoices by valuetype
 * @param data
 * @param valueType
 * @returns
 */
export const aggInvoices = (
  data: InvoicesTransformed[] = [],
  valueType: ValueType
) => {
  const mappedType: Record<ValueType, string> = {
    margin: "total_margin",
    revenue: "total_invoice",
  };
  const type = mappedType[valueType] as keyof InvoicesTransformed;
  return data.reduce((acc, next) => {
    return acc + (next[type] as number);
  }, 0);
};
