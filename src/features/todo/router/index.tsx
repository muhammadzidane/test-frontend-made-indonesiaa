// React Router DOM
import { type RouteObject } from "react-router-dom";

// UI
import { TodoIndex } from "../pages";

const todoRouter = (): RouteObject[] => [
  {
    path: "todo",
    children: [
      {
        path: "",
        element: <TodoIndex />,
      },
    ],
  },
];

export default todoRouter;
