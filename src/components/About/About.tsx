import React from "react";
// import { AboutCards } from "../../cards";

const About: React.FC = () => {
    // const renderCards = (): JSX.Element[] => {
    //     return AboutCards.map((card) => {
    //         return (
    //             <article className="card" key={card.id}>
    //                 <span className="card__overlay"></span>
    //                 <div className="card__content">
    //                     <p className="card__content__text">{card.text}</p>
    //                 </div>
    //             </article>
    //         );
    //     });
    // }

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

            <div id="panda">
                <div className="scene2">
                    <div className="box show-bottom">
                        <div className="box__face box__face--front"></div>
                        <div className="box__face box__face--back"></div>
                        <div className="box__face box__face--right">right</div>
                        <div className="box__face box__face--left"></div>
                        <div className="box__face box__face--top">top</div>
                        <div className="box__face box__face--bottom"></div>
                    </div>
                </div>
                <div className="scene">
                    <div className="box show-bottom">
                        <div className="box__face box__face--front"></div>
                        <div className="box__face box__face--back">
                        </div>
                        <div className="box__face box__face--right">right</div>
                        <div className="box__face box__face--left"></div>
                        <div className="box__face box__face--top">top</div>
                        <div className="box__face box__face--bottom"></div>
                    </div>
                </div>
            </div>

            {/* <div id="card-container">
                    {renderCards()}
                </div> */}
        </section>
    );
}

export default About;
