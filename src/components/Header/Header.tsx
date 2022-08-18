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
                        <a href="/home"
                            onClick={scrollTo}
                            className="header__navbar__brand">
                            <svg className="header__navbar__brand__image" width="100%" viewBox="0 0 200 200">
                                <path d="M133.24288,115.6038c-2.7137,0 -4.88467,2.17096 -4.88467,4.88467c0,1.08548 0.54274,1.89959 1.08548,2.7137l-29.57938,64.58616l-51.01764,-111.53324h-5.42741l56.44505,123.74491l34.19267,-74.89824c2.17096,-0.27137 4.07056,-2.17096 4.07056,-4.6133c0,-2.7137 -2.17096,-4.88467 -4.88467,-4.88467zM175.57666,10.04071h-31.2076l-44.50475,106.3772l-43.96201,-106.3772h-31.47897l75.44098,165.53596zM137.5848,0l-37.44912,90.36635l-37.72049,-90.36635h-53.73134l24.15197,52.91723c-0.54274,0.81411 -1.08548,1.62822 -1.08548,2.7137c0,2.7137 2.17096,4.88467 4.88467,4.88467c2.7137,0 4.88467,-2.17096 4.88467,-4.88467c0,-2.17096 -1.89959,-4.34193 -4.07056,-4.6133l-20.89552,-45.8616h42.60516l40.97693,98.23609l40.97693,-98.23609h42.33379l-44.77612,97.96472h5.42741l47.21845,-103.12076z" fill="nonzero"></path>
                            </svg>
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
                            Sobre
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
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
