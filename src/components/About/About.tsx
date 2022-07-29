import React from "react";
import Cube from '../Cube/Cubes'

const About: React.FC = () => {
    return (
        <section id="about">
            <article className="about__content">
                <h1 className="about__title">
                    Sobre Mim
                </h1>
                <p className="about__text">
                    Olá, me chamo Caio Valdoveste e eu gosto de desafios, desde que
                    tive meu primeiro contato com programação em 2019 fiquei fascinado
                    com o quanto essa área é váriada, então após algum tempo realizando pequenos
                    projetos em várias linguagens. Tive meu primeiro contato com o desenvolvimento WEB onde percebi que
                    tinha um apreço não apenas pelo funcionamento das páginas, mas também na construção da apresentação do conteúdo para os usuários.
                </p>

                <p className="about__text">
                    Atraído por construção e participação em projetos de longa duração, pois o processo de desenvolvimento me mantem motivado.
                    Possuindo um comunicação mais reservador no ambiente de trabalho, tendo à procurar por equipes mais dinâmicas. Tenho como objetivo 
                    inicial de carreira o foco como desenvolvedor FrontEND, e posteriormente com o ganho de mais experiências estarei buscando atuar como desenvolvedor FullStack. 
                </p>

                <p className="about__text">
                    Fique por dentro das tecnologias que estou utilizando recentemente,
                    além de algumas outras que estou aprendendo.
                </p>

                <div className="about__technologies">
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Habilidades:</li>
                        <li className="technologies__item">JavaScript</li>
                        <li className="technologies__item">HTML5</li>
                        <li className="technologies__item">CSS3</li>
                        <li className="technologies__item">SASS</li>
                        <li className="technologies__item">Git & GitHub</li>
                        <li className="technologies__item">GitFlow</li>
                        <li className="technologies__item">MySQL(CRUD)</li>
                    </ul>
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Aprendendo:</li>
                        <li className="technologies__item">ReactTS(TypeScript)</li>
                        <li className="technologies__item">NodeJS</li>
                    </ul>
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Pretendo aprender:</li>
                        <li className="technologies__item">Python</li>
                    </ul>
                </div>

            </article>
            <article className="technologies__cubes">
                <Cube></Cube>
            </article>
        </section>
    );
}

export default About;
