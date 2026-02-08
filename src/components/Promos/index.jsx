import { Link } from "react-router-dom";
import Button from "../Button";
import Card, { CardHeader, CardTitle, CardDescription } from "../Card";
import "./style.css";

const PROMOS = [
  {
    id: 1,
    title: "Combo Michi + Papas",
    description: "Burger clásica + papas + bebida por $5500",
  },
  {
    id: 2,
    title: "2x1 Clásicas",
    description: "Llevá 2 burgers clásicas al precio de 1",
  },
  {
    id: 3,
    title: "Michi Familiar",
    description: "4 burgers + 2 papas grandes + 2 bebidas $18000",
  },
  {
    id: 4,
    title: "Happy Hour",
    description: "Todas las bebidas a mitad de precio de 5pm a 7pm",
  },
];

export default function Promos() {
  return (
    <section className="promos">
        <article className="promos__left">
            <h2 className="promos__title">Combo Michi Especial</h2>
            <p>Hamburguesa + papas + Bebida por solo <span>$ 120 </span></p>
            <Link to="/menu">
              <Button size="lg" variant="tertiary">Obtener Compo</Button>
            </Link>
        </article>
        <article className="promos__right">
            🍔 🍟 🥤
        </article>
    </section>
  );
}
