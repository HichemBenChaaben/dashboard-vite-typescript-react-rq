import { useQuery } from "@tanstack/react-query";
import fetcher from "@/api/fetcher";
import { type BestCustomer } from "@/types";

export const useBestCustomersQuery = () => {
  const endpoint = `/api/customers/revenues`;
  return useQuery<BestCustomer[]>({
    queryKey: ["bestCustomers"],
    queryFn: () => fetcher<BestCustomer[]>(endpoint),
    refetchOnWindowFocus: false,
    staleTime: 300000,
    select: querySelector,
  });
};

// returning best customers sorted by total revenue
const querySelector = (data: BestCustomer[]): BestCustomer[] => {
  return data.sort((a, b) => b.total_revenue - a.total_revenue);
};
