import "../layout/About.css";

export default function About() {
   return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">Sobre Nosotros</h2>

        <p className="about__text">
          En <strong>Michi Burgers</strong> creemos que una hamburguesa no es solo
          comida, es una experiencia.
        </p>

        <p className="about__text">
          Cocinamos con ingredientes de calidad, recetas originales y mucho
          cariño gatuno 😼. Cada burger está pensada para que la primera mordida
          te haga volver por más.
        </p>

        <p className="about__text">
          Sin prisas, sin atajos y sin hamburguesas aburridas.
        </p>
      </div>
    </section>
  );
}
