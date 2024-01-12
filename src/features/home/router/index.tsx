// React Router DOM
import { type RouteObject } from "react-router-dom";

// UI
import { HomeIndex, HomeResult } from "../pages";

const homeRouter = (): RouteObject[] => [
  {
    path: "",
    element: <HomeIndex />,
  },
  {
    path: "result",
    element: <HomeResult />,
  },
];

export default homeRouter;
