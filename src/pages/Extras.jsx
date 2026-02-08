import { Link } from "react-router-dom";

import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/Card";
import Button from "../components/Button";

import "../layout/Extras.css";

const EXTRAS = [
  {
    id: 1,
    name: "Papas a la francesa",
    description: "Papas crujientes con sal",
    price: "$70.00",
    image: "/products/extras-1.jpg",
  },
  {
    id: 2,
    name: "Papas gajo",
    description: "Papas sazonadas con especias",
    price: "$80.00",
    image: "/products/extras-2.jpg",
  },
  {
    id: 3,
    name: "Boneless",
    description: "Boneless bañados en salsa búfalo o BBQ",
    price: "$120.00",
    image: "/products/extras-3.jpg",
  },
  {
    id: 4,
    name: "Aros de cebolla",
    description: "Crujientes y dorados",
    price: "$85.00",
    image: "/products/extras-5.jpg",
  },
  {
    id: 5,
    name: "Aderezo extras",
    description: "Chipotle, ranch o BBQ",
    price: "$20.00",
    image: "/products/extras-4.jpg",
  },
];

export default function Extras() {
  return (
    <section className="extras">
      <h2 className="extras__title">Extras</h2>

      <div className="extras__grid">
        {EXTRAS.map(extra => (
          <Card key={extra.id} className="extras__card">
            <CardHeader>
              <img
                src={extra.image}
                alt={extra.name}
                className="extras__image"
                loading="lazy"
              />
            </CardHeader>

            <CardContent>
              <CardTitle>{extra.name}</CardTitle>
              <CardDescription>{extra.description}</CardDescription>
              <p className="extras__price">{extra.price}</p>
            </CardContent>

            <CardFooter>
              <Link
                to={`/contacto?producto=${encodeURIComponent(extra.name)}`}
              >
                <Button size="sm">Agregar</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
