import React from "react";
import scrollTo from "../../Effects/ScrollTo"

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
                                <a className="side__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="side__link__image">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10 12c0 .685-.07 1.354-.202 2h-3.853c.121-1.283.129-2.621 0-4h3.853c.132.646.202 1.315.202 2zm-.841-4h-3.5c-.383-1.96-1.052-3.751-1.948-5.278 2.435.977 4.397 2.882 5.448 5.278zm-5.554 0h-2.605v-5.658c1.215 1.46 2.117 3.41 2.605 5.658zm-4.605-5.658v5.658h-2.605c.488-2.248 1.39-4.198 2.605-5.658zm0 7.658v4h-2.93c-.146-1.421-.146-2.577 0-4h2.93zm0 6v5.658c-1.215-1.46-2.117-3.41-2.605-5.658h2.605zm2 5.658v-5.658h2.605c-.488 2.248-1.39 4.198-2.605 5.658zm0-7.658v-4h2.93c.146 1.421.146 2.577 0 4h-2.93zm-4.711-11.278c-.896 1.527-1.565 3.318-1.948 5.278h-3.5c1.051-2.396 3.013-4.301 5.448-5.278zm-6.087 7.278h3.853c-.121 1.283-.129 2.621 0 4h-3.853c-.132-.646-.202-1.315-.202-2s.07-1.354.202-2zm.639 6h3.5c.383 1.96 1.052 3.751 1.948 5.278-2.435-.977-4.397-2.882-5.448-5.278zm12.87 5.278c.896-1.527 1.565-3.318 1.948-5.278h3.5c-1.051 2.396-3.013 4.301-5.448 5.278z" />
                                    </svg>
                                    {/* <svg className="side__link__image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.016 11c-.048-1.03-.168-2.035-.356-3h3.5c.41.935.685 1.942.79 3h-3.934zm3.933 2c-.105 1.058-.38 2.065-.79 3h-3.5c.188-.965.309-1.97.356-3h3.934zm-1.968-7h-2.83c-.375-1.197-.875-2.292-1.461-3.286 1.716.684 3.195 1.831 4.291 3.286zm-4.948 0h-2.033v-3.674c.841 1.01 1.526 2.256 2.033 3.674zm-2.033 12h2.033c-.507 1.418-1.192 2.664-2.033 3.674v-3.674zm-2-15.674v3.674h-2.033c.507-1.418 1.192-2.664 2.033-3.674zm0 5.674v3h-2.994c.052-1.04.181-2.044.389-3h2.605zm0 5v3h-2.605c-.208-.956-.336-1.96-.389-3h2.994zm0 5v3.674c-.841-1.01-1.526-2.256-2.033-3.674h2.033zm2-2v-3h2.994c-.052 1.04-.181 2.044-.389 3h-2.605zm0-5v-3h2.605c.208.956.336 1.96.389 3h-2.994zm-4.69-8.286c-.586.994-1.086 2.089-1.461 3.286h-2.83c1.096-1.455 2.575-2.602 4.291-3.286zm-2.326 8.286h-3.933c.105-1.058.38-2.065.79-3h3.5c-.189.965-.309 1.97-.357 3zm.357 5h-3.5c-.41-.935-.685-1.942-.79-3h3.934c.047 1.03.167 2.035.356 3zm-2.322 2h2.83c.375 1.197.875 2.292 1.461 3.286-1.716-.684-3.195-1.831-4.291-3.286zm11.671 3.286c.586-.994 1.086-2.089 1.461-3.286h2.83c-1.096 1.455-2.575 2.602-4.291 3.286z" />
                                </svg> */}
                                </a>
                            </label>
                        </li>
                        <li className="lang">
                            EN
                        </li>
                        <li className="lang">
                            BR
                        </li>
                    </ul>
                </div>
            </div>

            <article className="home__content">
                <h1 className="home__content__title --fadeinup" style={styles.firstTransiton}>
                    Hi,
                </h1>

                <h1 className="home__content__title --fadeinup" style={styles.secondTransiton}>
                    I'm Valdoveste
                </h1>
                <p className="home__content__text --fadeinup" style={styles.thirdTransiton}>
                    FrontEND Developer
                </p>
                <p className="home__content__text --fadeinup" style={styles.fourthTransiton}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque lobortis eleifend tellus, ut fermentum mauris luctus ac.
                    Cras finibus quis ante id interdum. Nam eget leo metus. Donec tincidunt magnaneque, vitae accumsan augue consequat eget.
                </p>

                <a href="/contact" onClick={scrollTo} className="btn-section --fadeinup" style={styles.fifthTransiton}>
                    Get In Touch
                    <span>
                    </span>
                </a>

            </article>
        </section>
    );
}

export default Home;
