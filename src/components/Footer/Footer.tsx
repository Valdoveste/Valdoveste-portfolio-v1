import React from "react";
import SideIcones from "../SideIcones/SideIcones";

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <SideIcones></SideIcones>
            <ul className="footer__list">
                <li className="footer__item">
                    <span className="footer__copyrights">
                        <a href="mailto:hi@valdoveste.com" className="footer__copyrights__link">hi@valdoveste.com&nbsp;|&nbsp;</a>© Valdoveste. All Rights Reserved.
                    </span>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;