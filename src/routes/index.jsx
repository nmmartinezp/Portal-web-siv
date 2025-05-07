import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Culture from "../pages/Culture";
import Territory from "../pages/Territory";
import Tourism from "../pages/Tourism";
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
        children: [
          {
            index: true,
            element: <History />,
          },
          {
            path: ":history",
            element: <History />,
          },
        ],
      },
      {
        path: "territorio",
        element: <Territory />,
      },
      {
        path: "cultura",
        children: [
          {
            index: true,
            element: <Culture />,
          },
          {
            path: ":article/:culture",
            element: <Culture />,
          },
        ],
      },
      {
        path: "turismo",
        children: [
          {
            index: true,
            element: <Tourism />,
          },
          {
            path: ":localization",
            element: <Tourism />,
          },
        ],
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
