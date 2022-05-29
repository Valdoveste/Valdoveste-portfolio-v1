import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="section-contact">
            <article className="section-contact__header">
                <h1 className="section-contact__header__title">
                    Contact
                </h1>
                <p className="section-contact__header__text">
                    contact me
                </p>
            </article>

            <form action="" className="section-contact__form">
                <div className="section-contact__inputs">
                    <input
                        type="text"
                        className="section-form__text"
                        name="Name"
                        placeholder="Name"
                        required
                    />

                    <input
                        type="text"
                        className="section-form__text"
                        name="Email"
                        placeholder="Email"
                        required
                    />
                </div>
                <input
                    type="text"
                    className="section-form__text"
                    name="Subject"
                    placeholder="Subject"
                    required
                />

                <textarea
                    className="section-form__message"
                    name="Message"
                    placeholder="Description"
                    required
                />

                <input
                    type="submit"
                    value="Send"
                    id="section-from__submit"
                    className="section-form-btn"
                    required
                />
            </form>
        </section>
    );
}

export default Contact;
