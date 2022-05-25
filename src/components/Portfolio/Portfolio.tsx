import React from "react";
import PortfolioCards from '../../cards'

const Portfolio: React.FC = () => {
    const renderCards = (): JSX.Element[] => {
        return PortfolioCards.map((card) => {
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
        <section id="section-portfolio">
            <article>
                <h1 className="section-portfolio__title">
                    My Portfolio
                </h1>
                <p className="section-portfolio__text">
                    A small collection of my recent projects there were all selected by me.
                    Most of them I've done with the help of incredible people.
                </p>

                <div id="card-container">
                    {renderCards()}
                </div>
            </article>
        </section>
    );
}

export default Portfolio;
