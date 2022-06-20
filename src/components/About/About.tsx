import React from "react";

const About: React.FC = () => {
    return (
        <section id="about">
            <article className="about__content">
                <h1 className="about__title">
                    My About
                </h1>
                <p className="about__text">
                    Olá, me chamo Caio Valdoveste e eu gosto de desafios desde que
                    tive meu primeiro contato com programação em 2019 fiquei fascinado
                    com o quanto essa área é váriada, então após algum tempo realizando pequenos
                    projetos em outras linguagens. Tive meu primeiro contato com WEB onde percebi que 
                    tinha um apreço pela construção não apenas das funcionalidade mas também pelo como 
                    o conteudo era apresentado para o usuário.
                </p>
                
                <p className="about__text">

                </p>

                <div className="about__technologies">
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Familiar</li>
                        <li className="technologies__item">JavaScript</li>
                        <li className="technologies__item">HTML</li>
                        <li className="technologies__item">CSS</li>
                        <li className="technologies__item">SASS</li>
                        <li className="technologies__item">React</li>
                    </ul>
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Não tão familiar</li>
                        <li className="technologies__item">TypeScript</li>
                        <li className="technologies__item">NodeJS</li>
                    </ul>
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Pretendo aprender</li>
                    </ul>
                </div>

            </article>
            <article className="technologies__cubes">
                <div className="scene2">
                    <div className="cube__outter">
                        <div className="cube__face cube__face--front">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__A"></div>
                        <div className="cube__face corner__B"></div>
                        <div className="cube__face cube__face--back">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__C"></div>
                        <div className="cube__face corner__D"></div>
                        <div className="cube__face cube__face--right">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face cube__face--left">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__E"></div>
                        <div className="cube__face corner__F"></div>
                        <div className="cube__face cube__face--top">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face cube__face--bottom">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__G"></div>
                        <div className="cube__face corner__H"></div>
                    </div>
                </div>

                <div className="scene1">
                    <div className="cube__inner">
                        <div className="cube__face cube__face--front">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__A"></div>
                        <div className="cube__face corner__A"></div>
                        <div className="cube__face corner__B"></div>
                        <div className="cube__face cube__face--back">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__C"></div>
                        <div className="cube__face corner__D"></div>
                        <div className="cube__face cube__face--right">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face cube__face--left">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__E"></div>
                        <div className="cube__face corner__F"></div>
                        <div className="cube__face cube__face--top">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face cube__face--bottom">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__G"></div>
                        <div className="cube__face corner__H"></div>
                    </div>
                </div>

                <div className="scene3">
                    <div className="cube__inner__inner">
                        <div className="cube__face cube__face--front">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__A"></div>
                        <div className="cube__face corner__B"></div>
                        <div className="cube__face cube__face--back">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__C"></div>
                        <div className="cube__face corner__D"></div>
                        <div className="cube__face cube__face--right">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face cube__face--left">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__E"></div>
                        <div className="cube__face corner__F"></div>
                        <div className="cube__face cube__face--top">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face cube__face--bottom">
                            <div className="cube__face"></div>

                        </div>
                        <div className="cube__face corner__G"></div>
                        <div className="cube__face corner__H"></div>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default About;
