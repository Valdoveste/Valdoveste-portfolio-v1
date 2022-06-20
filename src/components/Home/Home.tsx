import React from "react";
import IntroG from "../../assets/IntroG.gif";
// import Intro from "../../assets/IntroV.mp4";

const Home: React.FC = () => {


    return (
        <section id="home" style={{ backgroundImage: `url(${IntroG})` }}>
            {/* <img src={IntroG} loading="lazy" alt="a" className="home__image"/> */}
            {/* <video key={1} className="home__image" controls>
                <source src={Intro} type="video/mp4"></source>
                Your browser does not support this video, video source below.
                https://pt.videezy.com/fundos/5054-fluxo-de-fundo-de-movimento-4k-das-chamas
            </video> */}
            <article className="home__content">
                <h1 className="home__content__title">
                    Hi,
                </h1>

                <h1 className="home__content__title">
                    I'm
                    &nbsp;
                    <span>
                        Valdoveste
                    </span>
                </h1>
                <p className="home__content__text">
                    FullStack Developer
                </p>
            </article>
        </section>
    );
}


export default Home;
