import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { RemoteData } from "@/types/remote-data";

export const createUseQuery = <Args extends unknown[], Data>(
  key: string,
  func: (...args: Args) => Promise<Data>,
  options?: Omit<
    UseQueryOptions<Promise<Data>, AxiosError, Data>,
    "queryKey" | "queryFn"
  >
) => {
  return (...args: Args): RemoteData<Data, AxiosError> => {
    const { data, status, error } = useQuery<Promise<Data>, AxiosError, Data>({
      queryKey: [key, args],
      queryFn: () => func(...args),
      ...options,
    });

    if (status === "error") {
      return { status: "error", error };
    } else if (status === "success") {
      return { status: "success", value: data };
    } else {
      return { status: "pending" };
    }
  };
};
