import { useQuery } from "@tanstack/react-query";
import fetcher from "@/api/fetcher";
import { Customer } from "@/types";

export const useCustomersQuery = (id?: number) => {
  const endpoint = id ? `/api/customers/${id}` : `/api/customers`;
  return useQuery<Customer | Customer[]>({
    queryKey: ["customers", id],
    refetchOnWindowFocus: true,
    queryFn: () => fetcher<Customer | Customer[]>(endpoint),
  });
};
