import React from "react";
import PortfolioCards from '../../cards'
import fadeBidirectional from "../../Effects/FadeBirectional";


const Portfolio: React.FC = () => {
    window.addEventListener("load", fadeBidirectional);

    const renderCards = (): JSX.Element[] => {
        return PortfolioCards.map((card) => {
            return (
                <div className="card" id={card.id.toString()} key={card.id}>
                    <span className="card__overlay">
                        <a href={card.url} target={"_blank"} rel="noreferrer">
                            <span></span>
                        </a>
                    </span>
                    <div className="card__content">
                        <img src={card.logo} alt={card.logo_alt} className="card__content__image" />
                        <div className="card__content__info">
                            <h1 className="card__content__title">Nebulum</h1>
                            <p className="card__content__text">{card.projec_desc}</p>
                            <div className="card__content__technologies">
                                <ul className="card__content__technologies__list">
                                    <li>JavaScript</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>SASS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return (
        <section id="portfolio">
            <article>
                <h1 className="portfolio__title">
                    My Portfolio
                </h1>
                <p className="portfolio__text">
                    Here is a small collection of projects that I've worked on recently.
                    Always that's possible I like to come back and rework some of the
                    aspects of these projects refactoring codes, making better layouts,
                    and improving the design.
                </p>

                <div id="card-container">
                    {renderCards()}
                </div>
            </article>
        </section>
    );

}

export default Portfolio;
