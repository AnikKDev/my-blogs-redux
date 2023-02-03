import Homepage from "../pages/Home/Homepage";
import Main from "../pages/MainPage/Main";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);
export default router;
