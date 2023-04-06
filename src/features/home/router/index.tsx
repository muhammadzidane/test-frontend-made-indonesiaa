// React Router DOM
import { type RouteObject } from "react-router-dom";

// UI
import { HomeIndex } from "../pages";

const homeRouter = (): RouteObject[] => [
  {
    path: "",
    element: <HomeIndex />,
  },
];

export default homeRouter;
