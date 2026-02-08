import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import "../layout/Contact.css";

const productOptions = [
  { value: "michi-clasica", label: "Michi Clásica" },
  { value: "michi-doble", label: "Michi Doble" },
  { value: "combo-michi", label: "Combo Michi" },
  { value: "boneless", label: "Boneless" },
  { value: "papas", label: "Papas" },
];

export default function Contact({ selectedProduct = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setForm((prev) => ({
        ...prev,
        product: selectedProduct,
      }));
    }
  }, [selectedProduct]);

  function handleChange(field) {
    return (e) => {
      setForm({ ...form, [field]: e.target.value });
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <section className="contact">
      <h2 className="contact__title">Contáctanos</h2>
      <p className="contact__subtitle">
        ¿Se te antojó algo? Déjanos tu pedido 😺
      </p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <FormRow columns={2}>
          <Input
            label="Nombre"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange("name")}
          />

          <Input
            label="Teléfono"
            type="tel"
            placeholder="Tu número"
            value={form.phone}
            onChange={handleChange("phone")}
          />
        </FormRow>

        <FormRow>
          <Select
            label="Producto"
            options={productOptions}
            value={form.product}
            onChange={handleChange("product")}
            placeholder="Selecciona un producto"
          />
        </FormRow>

        <FormRow>
          <Input
            label="Mensaje"
            placeholder="¿Algo extra? ¿Sin cebolla?"
            value={form.message}
            onChange={handleChange("message")}
          />
        </FormRow>

        <Button type="submit">Enviar pedido</Button>
      </form>
    </section>
  );
}
