import { NavLink } from "react-router-dom";
import Button from "../Button";
import "./style.css";

export default function Hero () {
    return (
        <section className="hero">
            <div className="hero__section_right">
                <h1>Las Mejores</h1>
                <h1>Hamburguesas</h1>
                <h1>De Necaxa</h1>
                <p>Ingredientes frescos, sabor irresistible y un toque de <br /> amor gatuno en cada bocado</p>

                <div>
                    <NavLink to="/pedidos">
                        <Button size="lg" >Ordenar Ahora</Button>
                    </NavLink>
                    <NavLink to="/menu">
                        <Button variant="secondary" size="lg">Menu</Button>
                    </NavLink>
                </div>
            </div>
            
            <div className="hero__section_left">
                <img src="./michi-burgers-fit.png" alt="michi-burguers-icons"/>
            </div>

        </section>
    )
}