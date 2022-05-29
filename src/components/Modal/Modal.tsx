import React from "react";

const Modal: React.FC = () => {
    return (
        <>
            <div className="modal-overlay"></div>
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__content__showcase">
                        <img alt="" className="modal__content__showcase__image" />
                    </div>
                    <div className="modal__content__info">
                        <p className="modal__content__text">
                            An online album with the objective to be simple, clean,
                            and straight to the point. Consuming the Pexels API to load
                            a massive amount of different photos. One of the main objectives
                            of this application was to learn more about clean & simple design
                            also have extra care for the mobile users, applying concepts as infinityScroll
                            and FAB(Floating Action Button) and modal that works for portrait and landscape
                            screen orientations.
                        </p>
                        <div className="modal__content__technologies">
                            <ul className="modal__content__technologies__list">
                                <li className="modal__content__list__item">JavaScript</li>
                                <li className="modal__content__list__item">HTML5</li>
                                <li className="modal__content__list__item">CSS3</li>
                                <li className="modal__content__list__item">SASS</li>
                            </ul>
                        </div>
                    </div>
                    {/* <a href="" className="modal__content__page__link">Nebulum.com</a> */}
                </div>
            </div>
        </>
    );
}

export default Modal;
