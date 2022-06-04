import React from "react";

const About: React.FC = () => {
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

                <div className="section-about__technologies">
                    <ul className="section-about__technologies__list">
                        <li className="technologies__item">JavaScript</li>
                        <li className="technologies__item">HTML</li>
                        <li className="technologies__item">CSS</li>
                        <li className="technologies__item">SASS</li>
                        <li className="technologies__item">React</li>
                        <li className="technologies__item">TypeScript</li>
                    </ul>
                    <ul className="section-about__technologies__list">
                        <li className="technologies__item">NodeJS</li>
                        <li className="technologies__item">PHP</li>
                        <li className="technologies__item">SQL</li>
                        <li className="technologies__item">C</li>
                        <li className="technologies__item">Git</li>
                        <li className="technologies__item">GitFlow</li>
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
