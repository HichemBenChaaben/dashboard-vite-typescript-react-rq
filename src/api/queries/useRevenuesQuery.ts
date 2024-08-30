import { useQuery } from "@tanstack/react-query";
import fetcher from "@/api/fetcher";
import { Period, Revenue } from "@/types";

export const useRevenuesQuery = (period: Period) => {
  const endpoint = `/api/revenues/${period}`;
  return useQuery<Revenue[]>({
    queryKey: ["revenues", period],
    queryFn: () => fetcher<Revenue[]>(endpoint),
    refetchOnWindowFocus: true,
  });
};
