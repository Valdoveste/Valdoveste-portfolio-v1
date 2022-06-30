import React from "react";
import hideAndShowHeader from "../../Effects/HideShowHeader";
import scrollTo from '../../Effects/ScrollTo'

window.addEventListener("load", hideAndShowHeader);

const Header: React.FC = () => {
    return (
        <header id="header">
            <input type="checkbox" name="menuCheck" id="menuCheck" />
            <nav className="header__navbar">

                <ul className="header__navbar__list">
                    <li className="header__navbar__item">
                        <a href="#section-home"
                            className="header__navbar__brand">
                        </a>
                    </li>
                    <li className="header__navbar__item">
                        <label htmlFor="menuCheck">
                            <svg className="header__navbar__svg header__navbar__svg--front" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                            </svg>
                            <svg className="header__navbar__svg header__navbar__svg--back" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                            </svg>
                        </label>
                    </li>
                </ul>

                <ul className="header__navbar__list">
                    <li className="header__navbar__item">
                        <a href="/about"
                            onClick={scrollTo}
                            className="header__navbar__link">
                            About
                        </a>
                    </li>

                    <li className="header__navbar__item">
                        <a href="/portfolio"
                            onClick={scrollTo}
                            className="header__navbar__link">
                            Portfolio
                        </a>
                    </li>

                    <li className="header__navbar__item">
                        <a href="/contact"
                            onClick={scrollTo}
                            className="header__navbar__link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
