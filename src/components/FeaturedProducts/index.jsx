import { useState } from "react";
import "./style.css";

import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "../Card";

export const PRODUCTS = {
  clasicas: [
    {
      id: 1,
      name: "Michi Clásica",
      description: "Carne, cheddar, lechuga, tomate y salsa michi",
      price: "$420.00",
      image: "/products/burger-1.jpg"
    },
    {
      id: 2,
      name: "Doble Michi",
      description: "Doble carne, doble cheddar y pan brioche",
      price: "$480.00",
      image: "/products/burger-2.jpg"
    },
    {
      id: 3,
      name: "Michi Bacon",
      description: "Carne, cheddar, bacon crocante y salsa barbacoa",
      price: "$470.00",
      image: "/products/burger-3.jpg"
    },
    {
      id: 4,
      name: "Michi Onion",
      description: "Carne, cheddar, onion rings y mayonesa casera",
      price: "$460.00",
      image: "/products/burger-4.jpg"
    },
  ],

  premio: [
    {
      id: 5,
      name: "Golden Michi",
      description: "Carne premium, cheddar madurado y cebolla caramelizada",
      price: "$550.00",
      image: "/products/burger-1.jpg"
    },
    {
      id: 6,
      name: "Truffle Michi",
      description: "Carne premium, queso brie y mayo de trufa",
      price: "$580.00",
      image: "/products/burger-3.jpg"
    },
    {
      id: 7,
      name: "Blue Crown",
      description: "Carne premium, queso azul y pera grillada",
      price: "$570.00",
      image: "/products/burger-2.jpg"
    },
    {
      id: 8,
      name: "Smoked Royal",
      description: "Carne ahumada, provolone y panceta ahumada",
      price: "$590.00",
      image: "/products/burger-4.jpg"
    },
  ],

  vegetarianas: [
    {
      id: 9,
      name: "Green Michi",
      description: "Medallón veggie, palta, rúcula y alioli",
      price: "$460.00",
      image: "/products/burger-2.jpg"
    },
    {
      id: 10,
      name: "Veggie Deluxe",
      description: "Medallón de lentejas, cheddar vegano y tomate",
      price: "$450.00",
      image: "/products/burger-3.jpg"
    },
    {
      id: 11,
      name: "Mushroom Lovers",
      description: "Portobellos grillados, queso y cebolla morada",
      price: "$470.00",
      image: "/products/burger-4.jpg"
    },
    {
      id: 12,
      name: "Mediterránea",
      description: "Medallón vegetal, hummus, pepino y rúcula",
      price: "$440.00",
      image: "/products/burger-1.jpg"
    },
  ],

  pollo: [
    {
      id: 13,
      name: "Chicken Michi",
      description: "Pollo crispy, coleslaw y mayo casera",
      price: "$430.00",
      image: "/products/burger-1.jpg"
    },
    {
      id: 14,
      name: "Spicy Chicken",
      description: "Pollo crispy picante, cheddar y salsa chipotle",
      price: "$450.00",
      image: "/products/burger-3.jpg"
    },
    {
      id: 15,
      name: "Chicken BBQ",
      description: "Pollo grillado, bacon y salsa barbacoa",
      price: "$460.00",
      image: "/products/burger-4.jpg"
    },
    {
      id: 16,
      name: "Chicken Caesar",
      description: "Pollo grillado, lechuga, parmesano y salsa caesar",
      price: "$440.00",
      image: "/products/burger-2.jpg"
    },
  ],
};

const TABS = [
  { id: "clasicas", label: "Clásicas" },
  { id: "premio", label: "Premier" },
  { id: "vegetarianas", label: "Vegetarianas" },
  { id: "pollo", label: "Pollo" },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("clasicas");

  return (
    <section className="featured-products">
      <h2 className="featured-products__title">Lo más pedido</h2>

      <div className="featured-products__tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`featured-products__tab ${
              activeTab === tab.id
                ? "featured-products__tab--active"
                : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="featured-products__grid">
        {PRODUCTS[activeTab].map(product => (
          <Card
            key={product.id}
            className="featured-products__card"
          >
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>
                {product.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="featured-products__content">
              <img
                src={product.image}
                alt={product.name}
                className="featured-products__image"
                loading="lazy"
              />

              <span className="featured-products__price">
                {product.price}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
