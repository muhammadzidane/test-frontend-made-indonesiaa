// React
import React from "react";

// React Router DOM
import {
  createBrowserRouter,
} from "react-router-dom";

import todoRouter from "@/features/todo/router";

// Routers

const todo = todoRouter()

const router = createBrowserRouter([
  {
    path: "/",
    children: [...todo],
  },
]);

export default router
