import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "@/App.tsx";
import TelegramProvider from "@/components/special/TelegramProvider";
import "@/assets/css/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TelegramProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </TelegramProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
