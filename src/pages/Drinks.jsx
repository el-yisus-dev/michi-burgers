import { Link } from "react-router-dom";

import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/Card";

import Button from "../components/Button";

import "../layout/Drinks.css";

const DRINKS = [
  {
    id: 1,
    name: "Refresco",
    description: "Coca-Cola, Sprite o Fanta",
    price: "$45.00",
    image: "/products/drink-1.jpg",
  },
  {
    id: 2,
    name: "Agua natural",
    description: "Botella 600ml",
    price: "$30.00",
    image: "/products/drink-2.jpg",
  },
  {
    id: 3,
    name: "Cerveza",
    description: "Refrescante y ponedora",
    price: "$35.00",
    image: "/products/drink-3.jpg",
  },
  {
    id: 4,
    name: "Malteada",
    description: "Vainilla, chocolate o fresa",
    price: "$65.00",
    image: "/products/drink-4.jpg",
  },
];

export default function Drinks() {
  return (
    <section className="drinks">
      <h2 className="drinks__title">Bebidas</h2>

      <div className="drinks__grid">
        {DRINKS.map(drink => (
          <Card key={drink.id} className="drinks__card">
            <CardHeader>
              <img
                src={drink.image}
                alt={drink.name}
                className="drinks__image"
                loading="lazy"
              />
            </CardHeader>

            <CardContent>
              <CardTitle>{drink.name}</CardTitle>
              <CardDescription>{drink.description}</CardDescription>
              <p className="drinks__price">{drink.price}</p>
            </CardContent>

            <CardFooter>
              <Link
                to={`/contacto?producto=${encodeURIComponent(drink.name)}`}
              >
                <Button size="sm">Pedir</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
