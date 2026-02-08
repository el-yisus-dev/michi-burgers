import { Link, useLocation } from "react-router-dom";

import "./style.css";

const breadcrumbNameMap = {
  "/": "Inicio",
  "/menu": "Menú",
  "/menu/hamburguesas": "Hamburguesas",
  "/menu/bebidas": "Bebidas",
  "/menu/extras": "Extras",
  "/menu/promociones": "Promociones",
  "/sobre-nosotros": "Sobre nosotros",
  "/opiniones": "Opiniones",
  "/faq": "FAQ",
  "/contacto": "Contacto",
  "/pedidos": "Pedidos",
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link to="/" className="breadcrumb__link">
            Inicio
          </Link>
        </li>

        {paths.map((segment, index) => {
          const to = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          return (
            <li
              key={to}
              className={`breadcrumb__item ${
                isLast ? "breadcrumb__item--current" : ""
              }`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast ? (
                <span className="breadcrumb__text">
                  {breadcrumbNameMap[to] || segment}
                </span>
              ) : (
                <Link to={to} className="breadcrumb__link">
                  {breadcrumbNameMap[to] || segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
