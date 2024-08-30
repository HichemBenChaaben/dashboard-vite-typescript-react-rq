import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@/api/queryClientInstance";
import UseFacetsContextProvider from "@/context/Facets";
import { ModalProvider } from "@/context/Modal";
import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UseFacetsContextProvider>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <App />
        </ModalProvider>
        {/**
         * will work only on development
         * https://tanstack.com/query/v4/docs/framework/react/devtools
         * */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UseFacetsContextProvider>
  </React.StrictMode>
);
