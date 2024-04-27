import { axiosClient } from "@/config/axios";
import { StarterPack } from "@/entities/starter-pack";

export const Api = {
  // auth
  tgLogin: (data: { initData: string }) =>
    axiosClient.post<string>("/auth/login/tg", data).then((res) => res.data),

  // starterPacks
  getStarterPacks: () =>
    axiosClient.get<StarterPack[]>("/starter-packs").then((res) => res.data),
};
