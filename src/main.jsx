import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import BookingProvider from "./Provider/BookingProvider/BookingProvider.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BookingProvider>
          <RouterProvider router={router}></RouterProvider>
        </BookingProvider>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  </HelmetProvider>
);
