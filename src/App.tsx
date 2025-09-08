// import React from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Settings from "./components/Settings";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  );
};

export default App;
