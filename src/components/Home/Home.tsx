import React from "react";
import Cube from "../Cube/Cubes";
import scrollTo from "../../Effects/ScrollTo";
import { setLanguage } from "../../language/setLanguage";

const Home: React.FC = () => {

    const styles = {
        firstTransiton: {
            animationDelay: "50ms",
        },
        secondTransiton: {
            animationDelay: "100ms",
        },
        thirdTransiton: {
            animationDelay: "150ms",
        },
        fourthTransiton: {
            animationDelay: "200ms",
        },
        fifthTransiton: {
            animationDelay: "250ms",
        },
    };

    return (
        <section id="home">
            <input type="checkbox" id="homeCheckbox" />
            <div id="side__icones">
                <div className="right__side__icones">
                    <ul className="side__icone__list">
                        <li className="side__icone__item">
                            <label htmlFor="homeCheckbox">
                                <span className="side__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="side__link__image">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z" />
                                    </svg>
                                </span>
                            </label>
                        </li>
                        <li id="eng-usa" title="eng-usa" className="lang" onClick={(e) => setLanguage(e, false)}>
                            EN
                        </li>
                        <li id="pt-br" title="pt-br" className="lang active" onClick={(e) => setLanguage(e, true)}>
                            BR
                        </li>
                    </ul>
                </div>
            </div>

            <article className="home__content">
                <h1 className="home__content__title --fadeinup" style={styles.firstTransiton}>
                    Olá,
                </h1>

                <h1 className="home__content__title --fadeinup" style={styles.secondTransiton}>
                    Sou Valdoveste
                </h1>
                <p className="home__content__text --fadeinup" style={styles.thirdTransiton}>
                    Desenvolvedor FrontEND
                </p>
                <p className="home__content__text --fadeinup" style={styles.fourthTransiton}>
                    Constantemente desenvolvendo minhas habilidades na construção de aplicações WEB.
                </p>

                <a href="/contact" onClick={scrollTo} className="btn-section --fadeinup" style={styles.fifthTransiton}>
                    <p className="btn-section__text">
                        Entre em contato
                    </p>
                    <span>
                    </span>
                </a>
            </article>

            <article className="technologies__cubes">
                <Cube></Cube>
            </article>
        </section>
    );
}

export default Home;