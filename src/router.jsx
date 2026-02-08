import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Extras from "./pages/Extras";
import About from "./pages/About";
import FAQ from "./pages/Faq";
import Hamburguesas from "./pages/Burgers";
import Drinks from "./pages/Drinks";
import Promos from "./pages/Promos";
import Opinions from "./pages/Opinions";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
     children: [
      { index: true, element: <Home /> },

      {
        path: "menu",
        element: <Menu />,
        children: [
          { index: true, element: <Hamburguesas /> },
          { path: "hamburguesas", element: <Hamburguesas /> },
          { path: "bebidas", element: <Drinks /> },
          { path: "extras", element: <Extras /> },
          { path: "promociones", element: <Promos /> },
        ],
      },

      { path: "sobre-nosotros", element: <About /> },
      { path: "opiniones", element: <Opinions /> },
      { path: "faq", element: <FAQ /> },
      { path: "contacto", element: <Contact /> },
      { path: "pedidos", element: <Orders /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
