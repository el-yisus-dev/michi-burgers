import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../layout/NotFound.css";

export default function NotFound () {
    return (
        <div id="box">
            <section>
                <h1>404</h1>
                <h2>Lo sentimos, no encontramos lo que buscas</h2>
                <Link to="/">
                    <Button size="lg">Home</Button>
                </Link>
            </section>
            
            <div class="cat">
                <div class="head">
                <div class="ears">
                    <div class="ear left"></div>
                    <div class="ear right"></div>
                </div>
                <div class="eyes">
                    <div class="eye left"></div>
                    <div class="eye right"></div>
                </div>
                <div class="muzzle">
                    <div class="nose"></div>
                </div>
                </div>
                <div class="body">
                <div class="paw"></div>
                </div>
                <div class="tail">
                <div class="tail-segment">
                    <div class="tail-segment">
                    <div class="tail-segment">
                        <div class="tail-segment">
                        <div class="tail-segment">
                            <div class="tail-segment">
                            <div class="tail-segment">
                                <div class="tail-segment">
                                <div class="tail-segment">
                                    <div class="tail-segment">
                                    <div class="tail-segment">
                                        <div class="tail-segment">
                                        <div class="tail-segment">
                                            <div class="tail-segment">
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
} 