import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Error } from "./components/layout/Error";
import { Home } from "./components/layout/Home";
import { Cart } from "./components/layout/Cart";
import { UserProvider } from "./Context/UserProvider";
import { Store } from "./components/layout/Store";
import { Product } from "./components/layout/Product";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "/store/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ],
  {
    basename: "/Cartify",
  }
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  );
}

export default App;
