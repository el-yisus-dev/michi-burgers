import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Promos from "../components/Promos";
import Benefits from "../components/Benefits";

import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <Promos />
      <FeaturedProducts />
      <Benefits />
      <Link to="pedidos" className="orders__button_fixed">
        <Button size="lg"> <i className='bxrdm  bx-cart'></i> Hacer Pedido</Button>
      </Link>
    </>
  );
}
