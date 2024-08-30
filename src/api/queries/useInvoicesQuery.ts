import { useQuery } from "@tanstack/react-query";
import fetcher from "@/api/fetcher";
import { type Invoice, type InvoicesTransformed } from "@/types";

export const useInvoicesQuery = (id?: number) => {
  // for optimal rendering in the frontend the query can be extended to support filtering
  // like this below
  // ?limit=${limit}&sort=date,desc
  const endpoint = id ? `/api/invoices/${id}` : `/api/invoices`;
  return useQuery<InvoicesTransformed | InvoicesTransformed[]>({
    queryKey: ["invoices", id],
    queryFn: () =>
      fetcher<InvoicesTransformed | InvoicesTransformed[]>(endpoint),
    refetchOnWindowFocus: true,
    select: querySelector,
  });
};

// return the latest recent fifteen invoices
const querySelector = (data: Invoice[] | Invoice): InvoicesTransformed[] => {
  const invoicesArray = Array.isArray(data) ? data : [data];
  const sortedInvoices = invoicesArray.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  // add region country code to optimise rendering of the flags in the ui
  return sortedInvoices.slice(0, 15).map((invoice: Invoice) => ({
    ...invoice,
    countryCode: invoice.region.slice(0, 2).toUpperCase() as Uppercase<string>,
  }));
};
