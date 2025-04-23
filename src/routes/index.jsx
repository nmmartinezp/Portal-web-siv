import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error 404</div>,
    children: [
      {
        index: true,
        element: <div>Querido jhon</div>,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
