import TelegramProvider from "./TelegramProvider";

export default TelegramProvider;

export type {
  Telegram,
  TelegramUser,
  TelegramWebApp,
  TelegramWebAppInitData,
} from "./types";

export { useTelegram } from "./context";
