import React from "react";

const Contact: React.FC = () => {
    return (
        <section id="section-contact">
            <div className="section-contact__header">
                <h1 className="section-contact__header__title">
                    Contact
                </h1>
                <p className="section-contact__header__text">
                    contact me
                </p>
            </div>

            <form action="" className="section-contact__form">
                <div className="section-contact__inputs">
                    <input
                        type="text"
                        name="Name"
                        id="" />

                    <input
                        type="text"
                        name="Email"
                        id="" />
                </div>
                    <input
                        type="text"
                        name="Subject"
                        id="" />

                <textarea
                    name="Message"
                    id=""

                />

                <input type="button" value="Send" />
            </form>
        </section>
    );
}

export default Contact;
