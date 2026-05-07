import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Reservation from "../pages/Reservation";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/:id",
    element: <ServiceDetail />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);