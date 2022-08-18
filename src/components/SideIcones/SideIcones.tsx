import React from "react";
import ByTimeElementAnimation from "../../Effects/ByTimeElementAnimation";

window.addEventListener("load", (e) => {
    ByTimeElementAnimation(".side__link__image", "--fadeinup", "desc", 250);

    // const Elements = document.querySelectorAll(".side__link__image");
    // Elements.forEach(Element => {
    //     Element.addEventListener("transitionend", (e) => {
    //         ByTimeElementAnimation(".side__link__image", "--delayreset", "asc", 700);
    //     })
    // })
})

const Social: React.FC = () => {
    return (
        <div id="side__icones">
            <div className="left__side__icones">
                <ul className="side__icone__list">

                    <li className="side__icone__item">
                        <a href="mailto:oi@valdoveste.com>" title="E-mail">
                            <svg className="side__link__image" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" /></svg>

                        </a>
                    </li>

                    <li className="side__icone__item">
                        <a href="https://github.com/Valdoveste" className="side__link" title="Github">
                            <svg className="side__link__image" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M17,7.625C17,7.15,16.968,6.567,16.75,6c0,0-1.426,0.01-2.771,1.284C13.358,7.103,12.694,7,12,7	
                                c-0.694,0-1.358,0.103-1.979,0.284C8.676,6.01,7.25,6,7.25,6C7.033,6.567,7,7.15,7,7.625c0,0.719,0.128,1.16,0.205,1.378
                                C6.452,9.839,6,10.874,6,12c0,2.186,1.655,3.531,4,4c-0.527,0.463-0.85,1.11-0.953,1.836C8.824,17.944,8.5,18,8.125,18
                                c-0.301,0-0.886-0.142-1.431-0.991C6.474,16.665,6,16,5.375,16C5.253,16,4.996,15.992,5,16.181c0.002,0.09,0.14,0.091,0.435,0.354
                                C5.682,16.756,5.912,17.118,6,17.5c0.145,0.627,0.726,1.875,2.125,1.875C8.625,19.375,9,19.25,9,19.25v2.291
                                C9.947,21.838,10.955,22,12,22s2.053-0.162,3-0.459V18.25c0-0.899-0.374-1.7-1-2.25c2.345-0.469,4-1.814,4-4
                                c0-1.106-0.436-2.125-1.166-2.953C16.897,8.852,17,8.4,17,7.625z"></path>
                            </svg>
                        </a>
                    </li>

                    <li className="side__icone__item">
                        <a href="https://linkedin.com/in/valdoveste" className="side__link" title="LinkedIn">
                            <svg className="side__link__image" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48
                                 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 
                                 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="right__side__icones">
                <ul className="side__icone__list">

                    <li className="side__icone__item">
                        <a href="mailto:caio.valdoveste@outlook.com.br">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="side__link__image">
                                <path d="M24 24h-24v-24h24v24zm-5.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63
0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215
4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z"/>
                            </svg>
                        </a>
                    </li>

                    <li className="side__icone__item">
                        <a href="https://github.com/Valdoveste" className="side__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="side__link__image">
                                <path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481
1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 
0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 
1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 
1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 
1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 
8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Social;
