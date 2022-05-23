import React from "react";

export default function Portfolio() {
    return (
        <section id="section-portfolio">
            <div>
                <h1>
                    My Portfolio
                </h1>
                <p>
                    my projects
                </p>

                <div>
                    <article className="card">
                        <span className="card__overlay"></span>
                        <div className="card__content">
                            <img src="" alt="" className="card__content__image" />

                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}