import React from "react";

const Portfolio: React.FC = () => {
    return (
        <section id="section-portfolio">
            <div>
                <h1 className="section-portfolio__title">
                    My Portfolio
                </h1>
                <p className="section-portfolio__text">
                    A small collection of my recent projects there were all selected by me.
                    Most of them I've done with the help of incredible people.
                </p>

                <div id="card-container">
                    <article className="card">
                        <span className="card__overlay">
                            <a href="https://github.com/Valdoveste/nebulum" target={"_blank"}></a>
                        </span>
                        <div className="card__content">
                            <img src="https://user-images.githubusercontent.com/62577482/145720044-3426d797-c4fd-4f23-84ce-1627ce668420.png" alt="" className="card__content__image" />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
