import { Api } from "@/config/api";
import { createUseQuery } from "@/lib/create-use-query";

export const useStarterPacks = createUseQuery(
  "getStarterPacks",
  Api.getStarterPacks
);
