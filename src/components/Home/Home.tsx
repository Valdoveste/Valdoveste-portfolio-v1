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
            <article className="home__content">
                <h1 className="home__content__title --fadeinup" style={styles.firstTransiton}>
                    Hi,
                </h1>

                <h1 className="home__content__title --fadeinup" style={styles.secondTransiton}>
                    I'm Valdoveste
                </h1>
                <p className="home__content__text --fadeinup" style={styles.thirdTransiton}>
                    FullStack Developer
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
