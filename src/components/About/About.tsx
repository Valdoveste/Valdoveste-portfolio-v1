import React from "react";
import { AboutCards } from "../../cards";

const About: React.FC = () => {
    const renderCards = (): JSX.Element[] => {
        return AboutCards.map((card) => {
            return (
                <article className="card" key={card.id}>
                    <span className="card__overlay"></span>
                    <div className="card__content">
                        <p className="card__content__text">{card.text}</p>
                    </div>
                </article>
            );
        });
    }

    return (
        <section id="section-about">
            <article className="section-about__content">
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
