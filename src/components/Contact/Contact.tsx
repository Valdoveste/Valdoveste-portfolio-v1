import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <article className="contact__header">
                <h1 className="contact__header__title">
                    Contato
                </h1>
                <p className="contact__header__text">
                    Obrigado por chegar até aqui. Estou aberto para oportunidades, 
                    então caso tenha alguma dúvida ou queria mandar um "Oi", sinta-se livre para me contatar.
                </p>
            </article>

            <form action="" className="contact__form">
                <div className="contact__inputs">
                    <input
                        type="text"
                        className="form__text"
                        name="Name"
                        placeholder="Nome"
                        required
                    />

                    <input
                        type="text"
                        className="form__text"
                        name="Email"
                        placeholder="Email"
                        required
                    />
                </div>
                <input
                    type="text"
                    className="form__text"
                    name="Subject"
                    placeholder="Assunto"
                    required
                />

                <textarea
                    className="form__message"
                    name="Message"
                    placeholder="Descrição"
                    required
                />

                <input
                    type="submit"
                    value="Enviar"
                    id="from__submit"
                    className="form-btn"
                    required
                />
            </form>
        </section>
    );
}

export default Contact;
