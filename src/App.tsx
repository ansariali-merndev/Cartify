import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Error } from "./components/layout/Error";
import { Home } from "./components/layout/Home";
import { Cart } from "./components/layout/Cart";
import { UserProvider } from "./Context/UserProvider";

const router = createBrowserRouter([
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
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  );
}

export default App;
