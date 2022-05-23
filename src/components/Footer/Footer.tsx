import React from "react";
import GitHub from '../../assets/GitHub.png';
import LinkedIn from '../../assets/LinkedIn.png';

export default function Footer() {
    return (
        <footer id="footer">
            <ul className="footer__list">
                <li className="footer__item">
                    <span className="footer__brand">
                        @nValdoveste
                    </span>
                </li>
            </ul>

            <ul className="footer__list">
                <li className="footer__list__item">
                    <a href="https://linkedin.com/in/valdoveste" className="footer__link">
                        <img
                            src={LinkedIn}
                            alt="LinkedIn Logo"
                            className="footer__link__image"
                        />
                    </a>
                </li>

                <li className="footer__list__item">
                    <a href="https://github.com/Valdoveste" className="footer__link">
                        <img
                            src={GitHub}
                            alt="GitHub Logo"
                            className="footer__link__image"
                        />
                    </a>
                </li>
            </ul>
        </footer>
    );
} 
