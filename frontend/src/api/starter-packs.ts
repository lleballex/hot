import { useQuery } from "@tanstack/react-query";
import { ApiEndpoints } from "@/config/api";
import { axiosClient } from "@/config/axios";
import { StarterPack } from "@/types/starter-pack";

export const useStarterPacks = () => {
  const { data, isLoading } = useQuery({
    queryKey: [ApiEndpoints.starterPacks],
    queryFn: () =>
      axiosClient
        .get<StarterPack[]>(ApiEndpoints.starterPacks)
        .then((res) => res.data),
  });
  return { starterPacks: data, isLoading };
};
