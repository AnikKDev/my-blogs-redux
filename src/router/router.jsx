import Homepage from "../pages/Home/Homepage";
import Main from "../pages/MainPage/Main";

import { createBrowserRouter } from "react-router-dom";
import WriteBlog from "../pages/Blogs/WriteBlog/WriteBlog";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/write-blog",
        element: <WriteBlog />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default router;
