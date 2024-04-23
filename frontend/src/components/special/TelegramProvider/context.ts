import { createContext, useContext } from "react";
import { Telegram } from "./types";

export const TelegramContext = createContext<Telegram>({} as Telegram);

export const useTelegram = () => useContext(TelegramContext);
