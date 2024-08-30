import { useQuery } from "@tanstack/react-query";
import fetcher from "@/api/fetcher";
import { BestProductCategory } from "@/types";

export const useBestProductCategoriesQuery = () => {
  const endpoint = `/api/categories/revenues`;
  return useQuery<BestProductCategory[]>({
    queryKey: ["bestProductCategories"],
    refetchOnWindowFocus: false,
    staleTime: 300000,
    queryFn: () => fetcher<BestProductCategory[]>(endpoint),
  });
};
