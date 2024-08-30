// utility types
type Maybe<T> = T | undefined;
type Nullish<T> = T | null | undefined;
type TypeOrNull<T> = T | null;

// general types
type Period = "weekly" | "monthly";
type ValueType = "revenue" | "margin";

// Product Type
export interface Product {
  id: number;
  category: string;
  name: string;
  sale_price: number;
  margin: number;
}

// Customer Type
export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
}

// Invoice Line Type
export interface InvoiceLine {
  product_id: number;
  product_name: string;
  unit_price: number;
  quantity: number;
  total_line: number;
  total_margin: number;
}

// Invoice Type
export interface Invoice {
  id: number;
  customer_id: number;
  customer_name: string;
  date: string; // Format: YYYY-MM-DD
  total_invoice: number;
  total_margin: number;
  region: string;
  invoice_lines: InvoiceLine[];
}

interface InvoicesTransformed extends Invoice {
  countryCode: Uppercase<string>;
}

// Revenue Type (for both monthly and weekly)
export interface Revenue {
  week?: string; // Format: YYYY W-ww, available only for weekly revenues
  month?: string; // Format: YYYY-MM, available only for monthly revenues
  start_date: string; // Format: YYYY-MM-DD
  end_date: string; // Format: YYYY-MM-DD
  invoices_count: number;
  total_margin: number;
  total_revenue: number;
}

// Best Customer Type
export interface BestCustomer {
  customer_id: number;
  customer_name: string;
  total_revenue: number;
  total_margin: number;
  invoices_count: number;
}

// Best Product Category Type
export interface BestProductCategory {
  category_name: string;
  total_revenue: number;
  total_margin: number;
}
