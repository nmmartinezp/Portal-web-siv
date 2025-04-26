import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import History from "../pages/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error 404</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "historia",
        element: <History />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
