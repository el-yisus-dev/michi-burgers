import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <h3>🍔 Michi Burgers</h3>
          <p>Las mejores hamburguesas del barrio.</p>
        </div>

        <div className="footer__links">
          <a href="/menu">Menú</a>
          <a href="/sobre-nosotros">Sobre Nosotros</a>
          <a href="/contacto">Contacto</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Michi Burgers — Todos los derechos reservados
      </div>
    </footer>
  );
}
