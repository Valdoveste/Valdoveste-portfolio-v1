import React from 'react';
import translator from './translator';
import resetAnimations from './resetAnimations';

export const setLanguage = (event: React.MouseEvent<HTMLLIElement>, value: boolean) => {
    let target = event.currentTarget;
    let btnSetLanguage = document.querySelectorAll(".lang");

    if (target.id === "eng-usa") {
        target.classList.add("active")
        btnSetLanguage[1].classList.remove("active");
    } else if (target.id === "pt-br") {
        target.classList.add("active")
        btnSetLanguage[0].classList.remove("active");
    }

    var i = 0, j = 0, k = 0;
    const textParagraph = document.querySelectorAll("p");
    const textHeadings = document.querySelectorAll("h1");
    const copyrights = document.querySelectorAll(".footer__copyrights")[0];
    const textInputPlaceHolder = document.querySelectorAll("input");
    const textAreaPlaceHolder = document.querySelectorAll("textarea")[0];
    const emailIcon = document.querySelectorAll("a[title=E-mail]")[0];
    const homeContent = document.querySelectorAll(".home__content")[0].children
    const technologiesHeader = document.querySelectorAll(".technologies__item__header");

    let anchorHomeDesc = document.createElement("A")
    anchorHomeDesc.setAttribute("class", "footer__copyrights__link")

    let anchorFooterCopyrights = document.createElement("A")
    anchorFooterCopyrights.setAttribute("href", "https://github.com/Valdoveste/Sistema-Juridico")
    anchorFooterCopyrights.setAttribute("target", "_blank")
    anchorFooterCopyrights.setAttribute("rel", "noreferrer")

    resetAnimations();

    for (let i = 0; i < 5; i++) {
        homeContent[i].classList.remove("--fadeinup")
    }

    if (value) {

        emailIcon.setAttribute("href", "mailto:oi@valdoveste.com")

        let clock = setInterval(() => {
            for (let i = 0; i < 5; i++) {
                homeContent[i].classList.add("--fadeinup")
            }

            textHeadings.forEach(headings => {
                headings.textContent = translator.PortugueseBr.headings[i];
                i++;
            })

            textParagraph.forEach(paragraph => {
                paragraph.textContent = translator.PortugueseBr.paragraph[j];
                j++;
            })

            textParagraph[1].appendChild(anchorFooterCopyrights)
            textParagraph[1].insertAdjacentText('beforeend', '.')

            clearInterval(clock)
        }, 10)


        textInputPlaceHolder.forEach(input => {
            if (input.type === "text") {
                input.placeholder = translator.PortugueseBr.form[k];
                k++;
            }

            if (input.type === "submit")
                input.value = "Enviar";
        })

        technologiesHeader[0].textContent = "Habilidades:"
        technologiesHeader[1].textContent = "Aprendendo:"
        technologiesHeader[2].textContent = "Planejo aprender:"

        textAreaPlaceHolder.placeholder = "Mensagem";

        anchorHomeDesc.textContent = "oi@valdoveste.com"
        anchorHomeDesc.setAttribute("href", "mailto:oi@valdoveste.com")

        copyrights.textContent = ""
        copyrights.appendChild(anchorHomeDesc)
        copyrights.insertAdjacentText('beforeend', ' | © Valdoveste - Todos os direitos reservados.')
    } else {
        emailIcon.setAttribute("href", "mailto:hi@valdoveste.com")

        let clock = setInterval(() => {
            for (let i = 0; i < 5; i++) {
                homeContent[i].classList.add("--fadeinup")
            }

            textHeadings.forEach(headings => {
                headings.textContent = translator.EnglishUs.headings[i];
                i++;
            })

            textParagraph.forEach(paragraph => {
                paragraph.textContent = translator.EnglishUs.paragraph[j];
                j++;
            })

            textParagraph[1].appendChild(anchorFooterCopyrights)
            textParagraph[1].insertAdjacentText('beforeend', '.')

            clearInterval(clock)
        }, 10)


        textInputPlaceHolder.forEach(input => {
            if (input.type === "text") {
                input.placeholder = "";
                input.placeholder = translator.EnglishUs.form[k];
                k++;
            }

            if (input.type === "submit")
                input.value = "Send";
        })

        technologiesHeader[0].textContent = "Skills:"
        technologiesHeader[1].textContent = "Learning:"
        technologiesHeader[2].textContent = "Next to learn:"

        textAreaPlaceHolder.placeholder = "Menssage";

        anchorFooterCopyrights.textContent = "Juridical system"

        anchorHomeDesc.textContent = "hi@valdoveste.com"
        anchorHomeDesc.setAttribute("href", "mailto:hi@valdoveste.com")

        copyrights.textContent = ""
        copyrights.appendChild(anchorHomeDesc)
        copyrights.insertAdjacentText('beforeend', ' | © Valdoveste - All rights reserved.')
    }
}