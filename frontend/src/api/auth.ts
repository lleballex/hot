import { Api } from "@/config/api";
import { axiosClient } from "@/config/axios";
import { createUseMutation } from "@/lib/create-use-mutation";

export const useTgLogin = createUseMutation(Api.tgLogin, {
  onSuccess: (data) => {
    axiosClient.defaults.headers.common["Authorization"] = `Bearer ${data}`;
  },
});
