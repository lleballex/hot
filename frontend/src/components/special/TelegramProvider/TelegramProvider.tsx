import { PropsWithChildren, useEffect, useState } from "react";
import { Telegram, TelegramWebApp } from "./types";
import { TelegramContext } from "./context";

export default function TelegramProvider({ children }: PropsWithChildren) {
  const [telegram, setTelegram] = useState<Telegram | null>(null);

  useEffect(() => {
    const app: TelegramWebApp | undefined = (window as any).Telegram?.WebApp;

    if (app && app.initDataUnsafe.user) {
      app.ready();
      setTelegram({
        user: app.initDataUnsafe.user,
        webApp: app,
        initData: app.initDataUnsafe,
      });
    }
  }, []);

  if (!telegram) {
    // TODO: show nice error
    return <div>Open app from telegram</div>;
  }

  return (
    <TelegramContext.Provider value={telegram}>
      {children}
    </TelegramContext.Provider>
  );
}
