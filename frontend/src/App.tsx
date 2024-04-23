import { useTelegram } from "@/components/special/TelegramProvider";

export default function App() {
  const telegram = useTelegram();

  return <div>Hello world, {telegram.user.username} f</div>;
}
