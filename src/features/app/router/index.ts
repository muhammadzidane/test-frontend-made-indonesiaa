// React Router DOM
import { RouteObject } from "react-router-dom";
import { TodoIndex } from "../../todo/pages";

const routers = (): RouteObject[] => {
  return [
    {
      path: "customer",
      children: [
        {
          path: "",
          element: <TodoIndex />,
        },
      ],
    },
  ];
};

export default routers;
