import React from "react";
import PortfolioCards from '../../cards'

window.addEventListener("load", (e) => {
    const cards = document.querySelectorAll('.card')!;
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            let target = entry.target;
            if (entry.intersectionRatio > 0) {
                if (parseInt(target.id) % 2 === 0) {
                    target.classList.add("--fadetoright");
                } else {
                    target.classList.add("--fadetoleft");
                }
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card)
        card.addEventListener("animationend", (e) => {
            card.classList.add("--opacity")
        })
    })
})

const Portfolio: React.FC = () => {

    const renderCardsLogo = (): JSX.Element[] => {
        return PortfolioCards.map((card) => {
            return (
                <div className="card" id={card.id.toString()} key={card.id}>
                    <div className="card__content">
                        <div className="card__logo">
                            <a className="card__overlay" href={card.project_url} target={"_blank"} rel="noreferrer">
                                <span></span>
                            </a>
                            <img src={card.project_img} alt={card.project_img_alt} className="card__logo__image" />
                        </div>

                        <a href="https://github.com/Valdoveste" className="card__github__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="social-midias__link__image">
                                <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481
                                 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 
                                 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 
                                 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 
                                 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 
                                 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 
                                 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
                            </svg>
                        </a>

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
                    {renderCardsLogo()}
                </div>

            </article>
        </section>
    );

}

export default Portfolio;