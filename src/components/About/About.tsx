import React from "react";
import { AboutCards } from "../../cards";

const About: React.FC = () => {
    const renderCards = (): JSX.Element[] => {
        return AboutCards.map((card) => {
            return (
                <article className="card" key={card.id}>
                    <span className="card__overlay">
                        <a href={card.url} target={"_blank"}></a>
                    </span>
                    <div className="card__content">
                        <img src={card.logo} alt={card.logo_alt} className="card__content__image" />
                    </div>
                </article>
            );
        });
    }

    return (
        <section id="section-about">
            <article>
                <h1 className="section-about__title">
                    My About
                </h1>
                <p className="section-about__text">
                    A small collection of my recent projects there were all selected by me.
                    Most of them I've done with the help of incredible people.
                </p>

            </article>
                <div id="card-container">
                    {renderCards()}
                </div>
        </section>
    );
}

export default About;
