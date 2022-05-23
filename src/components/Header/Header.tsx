import React from "react";

export default function Header() {
    return (
        <header id="header">
            <nav className="header__navbar">

                <ul className="header__navbar__list">
                    <li className="header__navbar__item">
                        <a href="#section-home"
                            className="header__navbar__brand">
                            nValdoveste
                        </a>
                    </li>
                </ul>

                <ul className="header__navbar__list">
                    <li className="header__navbar__item">
                        <a href="#section-about"
                            className="header__navbar__link">
                            About
                        </a>
                    </li>

                    <li className="header__navbar__item">
                        <a href="#section-portfolio"
                            className="header__navbar__link">
                            Portfolio
                        </a>
                    </li>

                    <li className="header__navbar__item">
                        <a href="#section-contact"
                            className="header__navbar__link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
