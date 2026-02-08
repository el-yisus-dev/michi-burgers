import { NavLink, Outlet } from "react-router-dom";
import "../layout/Menu.css";

const MENU_CATEGORIES = [
  { path: "hamburguesas", label: "Hamburguesas" },
  { path: "bebidas", label: "Bebidas" },
  { path: "extras", label: "Extras" },
  { path: "promociones", label: "Promociones" },
];

export default function Menu() {
  return (
    <section className="menu">
      <header className="menu__header">
        <h1 className="menu__title">Menú</h1>
        <p className="menu__subtitle">
          Explora nuestras deliciosas opciones
        </p>
      </header>

      {/* Navegación del menú */}
      <nav className="menu__nav">
        {MENU_CATEGORIES.map(category => (
          <NavLink
            key={category.path}
            to={category.path}
            className={({ isActive }) =>
              `menu__nav-item ${isActive ? "menu__nav-item--active" : ""}`
            }
          >
            {category.label}
          </NavLink>
        ))}
      </nav>

      {/* Contenido dinámico */}
      <div className="menu__content">
        <Outlet />
      </div>
    </section>
  );
}
