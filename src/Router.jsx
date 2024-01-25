import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Posts from "./page/Post";


const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post", element: <Posts /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
