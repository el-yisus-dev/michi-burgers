import "../layout/Promos.css";

const promos = [
  {
    title: "Combo Michi",
    description: "Hamburguesa clásica + papas + refresco",
    price: "$129",
    tag: "Más vendido",
  },
  {
    title: "Pareja Felina",
    description: "2 hamburguesas + papas grandes",
    price: "$219",
    tag: "Ideal para compartir",
  },
  {
    title: "Noche Michi",
    description: "Hamburguesa doble + boneless + bebida",
    price: "$179",
    tag: "Edición especial",
  },
];

export default function Promos() {
  return (
    <>
      <h2 className="promos-title">Promociones</h2>
            <section className="promos">
      <div className="promos-grid">
        {promos.map((promo, index) => (
          <div className="promo-card" key={index}>
            <span className="promo-tag">{promo.tag}</span>
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
            <strong>{promo.price}</strong>
          </div>
        ))}
      </div>
    </section>    
    </>
)};
