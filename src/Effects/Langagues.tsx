// export const setLanguage = (value: boolean) => {
export const setLanguage = (event: React.MouseEvent<HTMLLIElement>, value: boolean) => {
    var btnSetLanguage = document.querySelectorAll(".lang");

    let target = event.currentTarget;
    if (target.id === "eng-usa") {
        target.classList.add("active")
        btnSetLanguage[1].classList.remove("active");
    } else if (target.id === "pt-br") {
        target.classList.add("active")
        btnSetLanguage[0].classList.remove("active");
    }
    var i = 0, j = 0, k = 0;
    let textParagraph = document.querySelectorAll("p");
    let textHeadings = document.querySelectorAll("h1");
    let copyrights = document.querySelectorAll(".footer__copyrights")[0];
    let textInputPlaceHolder = document.querySelectorAll("input");
    let textAreaPlaceHolder = document.querySelectorAll("textarea")[0];

    let anchorHomeDesc = document.createElement("A")
    anchorHomeDesc.textContent = "hi@valdoveste.com"
    anchorHomeDesc.setAttribute("href", "mailto:hi@valdoveste.com")
    anchorHomeDesc.setAttribute("class", "footer__copyrights__link")

    let anchorFooterCopyrights = document.createElement("A")
    anchorFooterCopyrights.textContent = "LinggoAPP - Task Manager"
    anchorFooterCopyrights.setAttribute("href", "https://github.com/Linggo-App/linggo")
    anchorFooterCopyrights.setAttribute("target", "_blank")
    anchorFooterCopyrights.setAttribute("rel", "noreferrer")

    if (value) {
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

        textInputPlaceHolder.forEach(input => {
            if (input.type === "text") {
                input.placeholder = translator.PortugueseBr.form[k];
                k++;
            }

            if (input.type === "submit")
                input.value = "Enviar";
        })

        textAreaPlaceHolder.placeholder = "Mensagem";

        copyrights.textContent = ""
        copyrights.appendChild(anchorHomeDesc)
        copyrights.insertAdjacentText('beforeend', ' | © Valdoveste - Todos os direitos reservados.')
    } else {

        textHeadings.forEach(headings => {
            headings.textContent = translator.EnglishUs.headings[i];
            i++;
        })

        textParagraph.forEach(paragraph => {
            paragraph.textContent = translator.EnglishUs.paragraph[j];
            j++;
        })

        textParagraph[1].appendChild(anchorFooterCopyrights)
        textParagraph[1].insertAdjacentText('beforeend', '')

        textInputPlaceHolder.forEach(input => {
            if (input.type === "text") {
                input.placeholder = "";
                input.placeholder = translator.EnglishUs.form[k];
                k++;
            }

            if (input.type === "submit")
                input.value = "";
        })

        textAreaPlaceHolder.placeholder = "";

        copyrights.textContent = ""
        copyrights.appendChild(anchorHomeDesc)
        copyrights.insertAdjacentText('beforeend', ' | © Valdoveste - .')
    }
}

const translator = ({
    PortugueseBr: {
        id: 0,

        headings: [
            'Olá,',
            'Sou Valdoveste',
            'Meu Portfolio',
            'Nebulum',
            'Nebulum',
            'Nebulum',
            'Sobre Mim',
            'Contato'
        ],

        paragraph: [
            'Desenvolvedor FrontEND Jr',
            'Sempre buscando desenvolver minhas habilidades na construção de projetos para a web. Atualmente, focado na reconstrução do ',
            'Entre em contato',
            'Aqui é uma pequena coleção de projetos que trabalhei recentemente. Sempre que possível eu sinto vontade de retornar a estes projetos e retabalhar algumas partes tanto funcional quanto visual.',
            'Um álbum de fotos online, desenvolvimento deste projeto teve como objetivo minhas habilidades com clean design, javascript e cosumo de API. Um dos grande desafios durante o desenvolvimento foi tratar a imagens e dar uma preocupação extra para usuário mobile. Durante o tratamento das imagens foi utilizado loading lazy, placeholder baseado em sua cor média, e uma das funcionalidades para mobile é sua paginação que funciona com infinityScroll.',
            'Um álbum de fotos online, desenvolvimento deste projeto teve como objetivo minhas habilidades com clean design, javascript e cosumo de API. Um dos grande desafios durante o desenvolvimento foi tratar a imagens e dar uma preocupação extra para usuário mobile. Durante o tratamento das imagens foi utilizado loading lazy, placeholder baseado em sua cor média, e uma das funcionalidades para mobile é sua paginação que funciona com infinityScroll.',
            'Um álbum de fotos online, desenvolvimento deste projeto teve como objetivo minhas habilidades com clean design, javascript e cosumo de API. Um dos grande desafios durante o desenvolvimento foi tratar a imagens e dar uma preocupação extra para usuário mobile. Durante o tratamento das imagens foi utilizado loading lazy, placeholder baseado em sua cor média, e uma das funcionalidades para mobile é sua paginação que funciona com infinityScroll.',
            'Olá, me chamo Caio Valdoveste e eu gosto de desafios, desde que tive meu primeiro contato com programação em 2019 fiquei fascinado com o quanto essa área é váriada, então após algum tempo realizando pequenos projetos em várias linguagens. Tive meu primeiro contato com o desenvolvimento WEB onde percebi que tinha um apreço não apenas pelo funcionamento das páginas, mas também na construção da apresentação do conteúdo para os usuários.',
            'Atraído por construção e participação em projetos de longa duração, pois o processo de desenvolvimento me mantem motivado. Possuindo um comunicação mais reservador no ambiente de trabalho, tendo à procurar por equipes mais dinâmicas. Tenho como objetivo inicial de carreira o foco como desenvolvedor FrontEND, e posteriormente com o ganho de mais experiências estarei buscando atuar como desenvolvedor FullStack.',
            'Fique por dentro das tecnologias que estou utilizando recentemente, além de algumas outras que estou aprendendo.',
            'Obrigado por chegar até aqui. Estou aberto para oportunidades, então caso tenha alguma dúvida ou queria mandar um "Oi", sinta-se livre para me contatar.'
        ],

        form: [
            'Nome',
            'Email',
            'Assunto',
        ]
    },

    EnglishUs: {
        id: 1,

        headings: [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ],

        paragraph: [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ],

        form: [
            '',
            '',
            ''
        ]
    }
});

export default translator;