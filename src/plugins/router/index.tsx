// React
import React from "react";

// React Router DOM
import { useRoutes } from "react-router-dom";

// Routers
import homeRouter from "@/features/home/router";

// Template components
import { MainLayout } from "@/features/app/components/template";

// Pages
import { NotFoundPage } from "@/features/app/pages";

// Get routers
const home = homeRouter();

const useRouter = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [...home],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};

export default useRouter;
