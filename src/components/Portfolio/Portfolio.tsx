import React from 'react';
import PortfolioBigCards from '../../bigCards'
import PortfolioSmallCards from '../../smallCards'

const Portfolio: React.FC = () => {
    const renderBigCards = (): JSX.Element[] => {
        return PortfolioBigCards.map((card) => {
            return (
                <div className="card-lg" key={card.id} data-direction={card.animation_direction}>
                    <div className="card-lg__content">
                        <div className="card-lg__logo">
                            <a className="card-lg__overlay" href={card.project_url} target={"_blank"} rel="noreferrer">
                                <span></span>
                            </a>
                            <img src={card.project_img} alt={card.project_img_alt} className="card-lg__logo__image" />
                        </div>

                        <div className="card-lg__content__info">
                            <h1 className="card-lg__content__title">{card.project_name}</h1>
                            <p className="card-lg__content__text">{card.project_desc}</p>
                            <div className="card-lg__content__technologies">
                                <ul className="card-lg__content__technologies__list">
                                    {card.project_tech.map(i => <li>{i}</li>)}
                                </ul>
                            </div>

                            <div className="icons">
                                <a href={card.project_git_url} className="card-lg__github__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M17,7.625C17,7.15,16.968,6.567,16.75,6c0,0-1.426,0.01-2.771,1.284C13.358,7.103,12.694,7,12,7	
                                        c-0.694,0-1.358,0.103-1.979,0.284C8.676,6.01,7.25,6,7.25,6C7.033,6.567,7,7.15,7,7.625c0,0.719,0.128,1.16,0.205,1.378
                                        C6.452,9.839,6,10.874,6,12c0,2.186,1.655,3.531,4,4c-0.527,0.463-0.85,1.11-0.953,1.836C8.824,17.944,8.5,18,8.125,18
                                        c-0.301,0-0.886-0.142-1.431-0.991C6.474,16.665,6,16,5.375,16C5.253,16,4.996,15.992,5,16.181c0.002,0.09,0.14,0.091,0.435,0.354
                                        C5.682,16.756,5.912,17.118,6,17.5c0.145,0.627,0.726,1.875,2.125,1.875C8.625,19.375,9,19.25,9,19.25v2.291
                                        C9.947,21.838,10.955,22,12,22s2.053-0.162,3-0.459V18.25c0-0.899-0.374-1.7-1-2.25c2.345-0.469,4-1.814,4-4
                                        c0-1.106-0.436-2.125-1.166-2.953C16.897,8.852,17,8.4,17,7.625z"></path>
                                    </svg>
                                </a>

                                <a href={card.project_url} className="card-lg__page__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 
                                        2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304
                                        4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67
                                        3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929
                                        2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433
                                        0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812
                                        1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    const renderSmallCards = (): JSX.Element[] => {
        return PortfolioSmallCards.map((cardSm) => {
            return (
                <div className="card-sm" style={cardSm.animation_delay} key={cardSm.id}>
                    <div className="card-sm__content">

                        <div className="card-sm__content__info">
                            <h1 className="card-sm__content__title">{cardSm.project_name}</h1>
                            <p className="card-sm__content__text">{cardSm.project_desc}</p>
                            <div className="card-sm__content__technologies">
                                <ul className="card-sm__content__technologies__list">
                                    {cardSm.project_tech.map(i => <li>{i}</li>)}
                                </ul>
                            </div>

                            <div className="icons">
                                {cardSm.project_url !== "" ?
                                    <a href={cardSm.project_url} className="card-sm__page__link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 
                                        2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304
                                        4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67
                                        3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929
                                        2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433
                                        0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812
                                        1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                                        </svg>
                                    </a>
                                    : ""}
                                <a href={cardSm.project_git_url} className="card-sm__github__link">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M17,7.625C17,7.15,16.968,6.567,16.75,6c0,0-1.426,0.01-2.771,1.284C13.358,7.103,12.694,7,12,7	
                                        c-0.694,0-1.358,0.103-1.979,0.284C8.676,6.01,7.25,6,7.25,6C7.033,6.567,7,7.15,7,7.625c0,0.719,0.128,1.16,0.205,1.378
                                        C6.452,9.839,6,10.874,6,12c0,2.186,1.655,3.531,4,4c-0.527,0.463-0.85,1.11-0.953,1.836C8.824,17.944,8.5,18,8.125,18
                                        c-0.301,0-0.886-0.142-1.431-0.991C6.474,16.665,6,16,5.375,16C5.253,16,4.996,15.992,5,16.181c0.002,0.09,0.14,0.091,0.435,0.354
                                        C5.682,16.756,5.912,17.118,6,17.5c0.145,0.627,0.726,1.875,2.125,1.875C8.625,19.375,9,19.25,9,19.25v2.291
                                        C9.947,21.838,10.955,22,12,22s2.053-0.162,3-0.459V18.25c0-0.899-0.374-1.7-1-2.25c2.345-0.469,4-1.814,4-4
                                        c0-1.106-0.436-2.125-1.166-2.953C16.897,8.852,17,8.4,17,7.625z"></path>
                                    </svg>
                                </a>

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
                    Meu Portfolio
                </h1>
                <p className="portfolio__text">
                    Aqui é uma pequena coleção de projetos que trabalhei recentemente.
                    Sempre que possível eu sinto vontade de retornar a estes projetos e retabalhar
                    algumas partes tanto funcional quanto visual.
                </p>
                <div id="card-container">
                    {renderBigCards()}
                    <div className="smallerProjects">
                        {/* <p></p> */}
                        {renderSmallCards()}
                        {/* {renderSmallCards()} */}
                        {/* <a href="/contact" className="btn-section --fadeinup"><p className="btn-section__text">Entre em contato</p><span></span></a> */}

                    </div>
                </div>

            </article>
        </section>
    );

}

export default Portfolio;