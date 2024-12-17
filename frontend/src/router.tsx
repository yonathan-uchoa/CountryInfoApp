import { createBrowserRouter, Navigate } from "react-router-dom";
import { DefaultLayout } from "./layouts/default/default-layout";
import HomePage from "./pages/Home/HomePage";
import CountryPage from "./pages/Country/CountryPage";
import HomeLoader from "./pages/Home/HomeLoader";
import CountryLoader from "./pages/Country/CountryLoader";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: HomeLoader,
      },
      {
        path: "/:countryCode",
        element: <CountryPage />,
        loader: CountryLoader,
      },
    ],
  },
]);
