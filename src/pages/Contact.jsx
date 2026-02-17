import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import "../layout/Contact.css";

import ReCAPTCHA from "react-google-recaptcha";

const productOptions = [
  { value: "michi-clasica", label: "Michi Clásica" },
  { value: "michi-doble", label: "Michi Doble" },
  { value: "combo-michi", label: "Combo Michi" },
  { value: "boneless", label: "Boneless" },
  { value: "papas", label: "Papas" },
];

function validateForm(form) {
  const newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "El nombre es obligatorio";
  }

  if (!form.phone.trim()) {
    newErrors.phone = "El teléfono es obligatorio";
  } else if (!/^\d+$/.test(form.phone)) {
    newErrors.phone = "El teléfono solo debe contener números";
  } else if (form.phone.length !== 10) {
    newErrors.phone = "Debe tener exactamente 10 dígitos";
  }

  if (!form.product) {
    newErrors.product = "Selecciona un producto";
  }

  return newErrors;
}

export default function Contact({ selectedProduct = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });
  const [captchaOk, setCaptchaOk] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (selectedProduct) {
      setForm((prev) => ({
        ...prev,
        product: selectedProduct,
      }));
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (!snackbar.open) return;

    const timer = setTimeout(() => {
      setSnackbar((prev) => ({ ...prev, open: false }));
    }, 3000);

    return () => clearTimeout(timer);
  }, [snackbar.open]);

  function handleChange(field) {
    return (e) => {
      let value = e.target.value;

      if (field === "phone") {
        value = value.replace(/\D/g, "");
      }

      setForm({ ...form, [field]: value });
    };
  }

  function handleContinue(e) {
    e.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSnackbar({
        open: true,
        message: "Revisa los campos antes de continuar 😿",
        type: "error",
      });
      return;
    }

    setStep(2);
  }

function handleConfirm(e) {
    e.preventDefault();

    if (code !== "pelos2008") {
      setSnackbar({
        open: true,
        message: "Código incorrecto 😾",
        type: "error",
      });
      return;
    }

    if (!captchaOk) {
      setSnackbar({
        open: true,
        message: "Confirma que no eres un robot 🤖",
        type: "error",
      });
      return;
    }

    console.log("Pedido confirmado:", form);

    setSnackbar({
      open: true,
      message: "Pedido confirmado con éxito 😺🍔",
      type: "success",
    });

    setForm({
      name: "",
      phone: "",
      product: "",
      message: "",
    });
    setErrors({});
    setCode("");
    setCaptchaOk(false);
    setStep(1);
  }


  function handleCaptcha(value) {
    if (value) {
      setCaptchaOk(true);
    } else {
      setCaptchaOk(false);
    }
  }

  return (
    <section className="contact">
      <h2 className="contact__title">Contáctanos</h2>
      <p className="contact__subtitle">
        ¿Se te antojó algo? Déjanos tu pedido 😺
      </p>

      {step === 1 && (
        <form className="contact__form" onSubmit={handleContinue}>
          <FormRow columns={2}>
            <Input
              label="Nombre"
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange("name")}
              error={errors.name}
            />

            <Input
              label="Teléfono"
              type="tel"
              placeholder="Tu número"
              value={form.phone}
              onChange={handleChange("phone")}
              error={errors.phone}
            />
          </FormRow>

          <FormRow>
            <Select
              label="Producto"
              options={productOptions}
              value={form.product}
              onChange={handleChange("product")}
              placeholder="Selecciona un producto"
              error={errors.product}
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

          <Button type="submit">Continuar</Button>
        </form>
      )}

      {step === 2 && (
        <form className="contact__form" onSubmit={handleConfirm}>
          <p className="contact__subtitle">
            Ingresa el código de confirmación 🔐
          </p>
          <FormRow>
            <ReCAPTCHA
              sitekey="6LfsImcsAAAAAN1nsAiAZJ6dYzG0fifxj200_A8X"
              onChange={handleCaptcha}
            />
          </FormRow>

          <FormRow>
            <Input
              label="Código"
              type="password"
              placeholder="Código secreto"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </FormRow>

          <FormRow columns={2}>
            <Button type="button" onClick={() => setStep(1)}>
              Regresar
            </Button>
            <Button type="submit">Confirmar pedido</Button>
          </FormRow>
        </form>
      )}

      {snackbar.open && (
        <div className={`snackbar snackbar--${snackbar.type}`}>
          {snackbar.message}
        </div>
      )}
    </section>
  );
}
