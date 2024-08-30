import { useQuery } from "@tanstack/react-query";
import fetcher from "@/api/fetcher";
import { Product } from "@/types";

export const useProductsQuery = (id?: number) => {
  const endpoint = id ? `/api/products/${id}` : `/api/products`;
  return useQuery<Product | Product[]>({
    queryKey: ["products", id],
    queryFn: () => fetcher<Product | Product[]>(endpoint),
    refetchOnWindowFocus: true,
  });
};
