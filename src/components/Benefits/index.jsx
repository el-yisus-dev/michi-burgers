import "./style.css";

const benefits = [
  {
    icon: "🚀",
    title: "Entrega rápida",
    description: "Tu hamburguesa llega caliente y lista para devorar."
  },
  {
    icon: "🍔",
    title: "Ingredientes de calidad",
    description: "Solo usamos ingredientes frescos y bien seleccionados."
  },
  {
    icon: "💳",
    title: "Pago fácil",
    description: "Paga como quieras: efectivo, tarjeta o transferencia."
  },
  {
    icon: "😼",
    title: "Hecho con amor Michi",
    description: "Recetas artesanales con mucha personalidad."
  }
];

export default function Benefits() {
  return (
    <section className="benefits">
        <h2>Beneficios claros</h2>
        <div className="benefits__container">
            {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
                <span className="benefit-card__icon">{benefit.icon}</span>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">
                {benefit.description}
                </p>
            </div>
            ))}
        </div>
    </section>
  );
}
