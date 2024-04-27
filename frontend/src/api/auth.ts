import { useMutation } from "@tanstack/react-query";
import { ApiEndpoints } from "@/config/api";
import { axiosClient } from "@/config/axios";

// TODO: add error notifications to all requests

export const useTgLogin = () => {
  const { mutate, isPending } = useMutation({
    // TODO: should I use interface to describe data?
    mutationFn: (data: { initData: string }) =>
      axiosClient
        .post<string>(ApiEndpoints.authLoginTg, data)
        .then((res) => res.data),
    onSuccess: (data) => {
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${data}`;
    },
  });

  return { login: mutate, isLoginPending: isPending };
};
