import React from "react";
import Intro from "../../assets/Intro.mp4";

const Home: React.FC = () => {
    return (
        <section id="section-home">
            <video key={1} className="section-home__image" autoPlay loop>
                <source src={Intro} type="video/mp4"></source>
                Your browser does not support this video, video source below.
                https://pt.videezy.com/fundos/5054-fluxo-de-fundo-de-movimento-4k-das-chamas
            </video>
            <article className="section-home__content">
                <h1 className="section-home__content__title">
                    Hi,
                </h1>
                
                <h1 className="section-home__content__title">
                    I'm Valdoveste
                </h1>
                <p className="section-home__content__text">
                    FullStack Developer
                </p>
            </article>
        </section>
    );
}

export default Home;
