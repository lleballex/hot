import { PropsWithChildren, useEffect, useState } from "react";
import { Telegram, TelegramWebApp } from "./types";
import { TelegramContext } from "./context";
import { useTgLogin } from "@/api/auth";

export default function TelegramProvider({ children }: PropsWithChildren) {
  const [telegram, setTelegram] = useState<Telegram | null>(null);

  const { login } = useTgLogin();

  useEffect(() => {
    if (telegram) return;

    const app: TelegramWebApp | undefined = (window as any).Telegram?.WebApp;

    if (app && app.initDataUnsafe.user) {
      login(
        {
          initData: app.initData,
        },
        {
          onSuccess: () => {
            app.ready();
            setTelegram({
              user: app.initDataUnsafe.user!,
              webApp: app,
              initData: app.initDataUnsafe,
            });
          },
          onError: () => {
            // TODO: what to do exactly?
            app.close();
          },
        }
      );
    }
  }, [telegram, login]);

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
