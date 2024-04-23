import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App.tsx";
import TelegramProvider from "@/components/special/TelegramProvider";
import "@/assets/css/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TelegramProvider>
      <RouterProvider router={router} />
    </TelegramProvider>
  </React.StrictMode>
);
