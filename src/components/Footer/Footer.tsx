import React from "react";

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <ul className="footer__list">
                <li className="footer__item">
                    <span className="footer__copyrights">
                        <a href="mailto:caio.valdoveste@outlook.com.br" className="footer__copyrights__link">hi@valdoveste.com&nbsp;</a>© Valdoveste. All Rights Reserved.
                    </span>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;