import React from "react";
import Cube from '../Cube/Cubes'

window.addEventListener("load", (e) => {
    let flag = true;
    const about = document.getElementById('about')!;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.intersectionRatio > 0 && flag) {
                const txt = document.querySelectorAll('.scene1')[0];
                const txt1 = document.querySelectorAll('.scene2')[0];
                const txt2 = document.querySelectorAll('.scene3')[0];
                txt.classList.add("--txt");
                txt1.classList.add("--txt");
                txt2.classList.add("--txt");
            }
        });
    });

    observer.observe(about)
})

const About: React.FC = () => {
    return (
        <section id="about">
            <article className="about__content">
                <h1 className="about__title">
                    About Me
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque lobortis eleifend tellus, ut fermentum mauris luctus ac.
                    Pellentesque lobortis eleifend tellus, ut fermentum mauris luctus ac.
                    Cras finibus quis ante id interdum.
                </p>

                <p className="about__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="about__technologies">
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Familiar:</li>
                        <li className="technologies__item">JavaScript</li>
                        <li className="technologies__item">HTML</li>
                        <li className="technologies__item">CSS</li>
                        <li className="technologies__item">SASS</li>
                        <li className="technologies__item">React</li>
                        <li className="technologies__item">Git</li>
                        <li className="technologies__item">GitFlow</li>
                        <li className="technologies__item">MySQL</li>
                    </ul>
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Aprendendo:</li>
                        <li className="technologies__item">TypeScript</li>
                        <li className="technologies__item">NodeJS</li>
                    </ul>
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Pretendo aprender:</li>
                        <li className="technologies__item">Python</li>
                        <li className="technologies__item">NextJS</li>
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
