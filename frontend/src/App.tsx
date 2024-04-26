import { useTelegram } from "@/components/special/TelegramProvider";
import styles from "./App.module.scss";

export default function App() {
  const telegram = useTelegram();

  return (
    <div className={styles.container}>
      Hello world, {telegram.user.username}
    </div>
  );
}
