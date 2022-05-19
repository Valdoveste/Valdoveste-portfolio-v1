import React from "react";
import GitHub from '../../assets/GitHub.png';
import LinkedIn from '../../assets/LinkedIn.png';

export default function Footer() {
    return(
        <>
            <footer id="footer">
                <ul>
                    <li>@nValdoveste</li>
                </ul>

                <ul>
                    <li><a href="https://linkedin.com/in/valdoveste"><img src={LinkedIn} alt="LinkedIn Logo"/></a></li>
                    <li><a href="https://github.com/Valdoveste"><img src={GitHub} alt="GitHub Logo" /> a </a></li>
                    {/* <li><a href="mailto:caio.valdoveste@outlook.com.br"><img src="" alt="Microsoft Mail Logo"/></a></li> */}
                </ul>
            </footer>
        </> 
    );
} 
