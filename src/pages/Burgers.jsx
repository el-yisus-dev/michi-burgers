import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/Card";

import Button from "../components/Button";
import Select from "../components/Select";

import { PRODUCTS } from "../components/FeaturedProducts";
import { parsePrice } from "../helpers/parsePrice";
import Input from "../components/Input";

import "../layout/Burger.css";


/* =========================
   Constantes
========================= */

const PRICE_OPTIONS = [
  { value: "asc", label: "Precio: menor a mayor" },
  { value: "desc", label: "Precio: mayor a menor" },
];

/* =========================
   Component
========================= */

export default function Burgers() {
  const [priceOrder, setPriceOrder] = useState("");
  const [search, setSearch] = useState("")
  
  const filteredProducts = useMemo(() => {
    const result = {};
    const query = search.toLowerCase().trim();

    Object.entries(PRODUCTS).forEach(([category, items]) => {
      let filteredItems = [...items];

      // 🔍 SEARCH
      if (query) {
        filteredItems = filteredItems.filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
      }

      // 💰 SORT
      if (priceOrder === "asc") {
        filteredItems.sort(
          (a, b) => parsePrice(a.price) - parsePrice(b.price)
        );
      }

      if (priceOrder === "desc") {
        filteredItems.sort(
          (a, b) => parsePrice(b.price) - parsePrice(a.price)
        );
      }

      // ❗ Solo mostrar categorías con resultados
      if (filteredItems.length > 0) {
        result[category] = filteredItems;
      }
    });

    return result;
  }, [priceOrder, search]);


  return (
    <section className="burgers">
      {/* Filtros */}
      <header className="burgers__filters">
        <Select
          label="Ordenar por"
          value={priceOrder}
          onChange={(e) => setPriceOrder(e.target.value)}
          options={PRICE_OPTIONS}
          placeholder="Selecciona un orden"
        />
        <Input
          type="text"
          placeholder="Buscar hamburguesa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
        <Input
          label="Clásicas"
          type="checkbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <Input
          label="Premio"
          type="checkbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <Input
          label="Vegetarianas"
          type="checkbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          />
        <Input
          label="Pollo"
          type="checkbox"
          value="check"
          onChange={(e) => setSearch(e.target.value)}
          />
        </ul>
        
      </header>

      {/* Listado */}
      {Object.entries(filteredProducts).map(([category, items]) => (
        <div key={category} className="burgers__section">
          <h2 className="burgers__section-title">{category}</h2>

          <div className="burgers__grid">
            {items.map((product) => (
              <Card key={product.id} className="burgers__card">
                <CardHeader>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="burgers__image"
                    loading="lazy"
                  />
                </CardHeader>

                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>
                    {product.description}
                  </CardDescription>
                  <p className="burgers__price">{product.price}</p>
                </CardContent>

                <CardFooter>
                  <Link
                    to={`/contacto?producto=${encodeURIComponent(
                      product.name
                    )}`}
                  >
                    <Button size="sm">Pedir</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
