import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <article className="contact__header">
                <h1 className="contact__header__title">
                    Contact
                </h1>
                <p className="contact__header__text">
                    Thanks for making it all the way here.
                    I'm open to job opportunities, so feel free to contact me.
                    Whether you have any questions or just want to say hello, I'll do my best to reach out.
                </p>
            </article>

            <form action="" className="contact__form">
                <div className="contact__inputs">
                    <input
                        type="text"
                        className="form__text"
                        name="Name"
                        placeholder="Name"
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
                    placeholder="Subject"
                    required
                />

                <textarea
                    className="form__message"
                    name="Message"
                    placeholder="Description"
                    required
                />

                <input
                    type="submit"
                    value="Send"
                    id="from__submit"
                    className="form-btn"
                    required
                />
            </form>
        </section>
    );
}

export default Contact;
