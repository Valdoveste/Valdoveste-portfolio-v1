const resetAnimations = () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (parseInt(card.id) % 2 === 0)
            card.classList.remove("--fadetoleft");
        else
            card.classList.remove("--fadetoright");

        card.classList.remove("--opacity");
    });

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (section.id !== "#home")
            section.classList.remove("--fadeinup");
    });

    const sceneCube = document.querySelectorAll(".scene") as NodeListOf<HTMLElement>;
    sceneCube.forEach(scene => {
        scene.style.transitionDuration = "1.7s"
        scene.classList.remove("--fadeincube");
    })

    let clockVar = setTimeout(() => {
        sceneCube[0].style.transitionDuration = "1.7s"
        sceneCube[1].style.transitionDuration = "2.1s"
        sceneCube[2].style.transitionDuration = "2.3s"
        sceneCube.forEach(scene => {
            scene.classList.add("--fadeincube");
        })
        clearTimeout(clockVar)
    }, 1500);

}

export default resetAnimations;