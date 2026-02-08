import { useState } from "react";

import "../layout/Faq.css";

const faqs = [
  {
    question: "¿Hacen envíos a domicilio?",
    answer:
      "Sí 😺 Hacemos envíos a domicilio dentro de la zona. El costo depende de la distancia.",
  },
  {
    question: "¿Puedo personalizar mi hamburguesa?",
    answer:
      "Claro que sí. Puedes pedir cambios como quitar ingredientes o agregar extras.",
  },
  {
    question: "¿Aceptan pagos con tarjeta?",
    answer: "Sí, aceptamos efectivo, transferencia y tarjetas.",
  },
  {
    question: "¿En cuánto tiempo llega mi pedido?",
    answer:
      "El tiempo promedio es de 30 a 45 minutos, dependiendo de la demanda.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq__title">Preguntas frecuentes</h2>

      <div className="faq__list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
            >
              <button
                className="faq__question"
                onClick={() => toggle(index)}
              >
                {item.question}
                <span className="faq__icon">{isOpen ? "−" : "+"}</span>
              </button>

              <div className="faq__content">
                <p className="faq__answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
