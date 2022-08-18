import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_h70y0wr', 'template_m1q1fdc', form.current, '0piez3rPuwFh_BSfk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

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

            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__inputs">
                    <input
                        type="text"
                        className="form__text"
                        name="from_name"
                        placeholder="Nome"
                        required
                    />

                    <input
                        type="text"
                        className="form__text"
                        name="user_email"
                        placeholder="E-mail"
                        required
                    />
                </div>
                <input
                    type="text"
                    className="form__text"
                    name="subject"
                    placeholder="Assunto"
                    required
                />

                <textarea
                    className="form__message"
                    name="message"
                    placeholder="Mensagem"
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
