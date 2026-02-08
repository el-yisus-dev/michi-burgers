import { Link } from "react-router-dom";

import Button from "../components/Button";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/Card";

import "../layout/Orders.css";

export default function Orders() {
  return (
    <section className="orders">
      <h1 className="orders__title">Pedidos</h1>
      <p className="orders__subtitle">
        Haz tu pedido fácil, rápido y sin complicaciones 😼
      </p>

      <div className="orders__grid">
        <Card>
          <CardHeader>
            <CardTitle>1. Elige tu burger</CardTitle>
            <CardDescription>
              Explora nuestro menú y selecciona tus hamburguesas favoritas.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p>
              Puedes elegir entre clásicas, premium, vegetarianas o de pollo.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Personaliza</CardTitle>
            <CardDescription>
              Agrega extras, bebidas o promociones.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p>
              Papas, boneless, aderezos y todo lo que se te antoje.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Contáctanos</CardTitle>
            <CardDescription>
              Envíanos tu pedido y nos ponemos en acción.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p>
              Usa el formulario de contacto para enviarnos tu pedido.
            </p>
          </CardContent>

          <CardFooter>
            <Link to="/contacto">
              <Button variant="primary">Ir a contacto</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
