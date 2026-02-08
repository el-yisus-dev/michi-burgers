import { NavLink } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div>
        <NavLink to="/">
          <img src="/michi-burgers-fit.png" alt="" className="navbar__img"/>
        </NavLink>
      </div>

      <nav className="navbar__nav">
        <NavLink to="/" className="navbar__link">Inicio</NavLink>
        <NavLink to="/menu" className="navbar__link">Menú</NavLink>
        <NavLink to="/sobre-nosotros" className="navbar__link">Sobre Nosotros</NavLink>
        <NavLink to="/faq" className="navbar__link">FAQ</NavLink>
        <NavLink to="/contacto" className="navbar__link">Contacto</NavLink>
        <NavLink to="/pedidos" className="navbar__link navbar__link--cta">
          Pedidos
        </NavLink>
      </nav>
    </header>
  );
}
