export default function fadeBidirectional() {
    const cards = document.querySelectorAll('.card')!;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.intersectionRatio > 0 && (entry.target.id === "0" || entry.target.id === "2")) {
                entry.target.classList.add("--fadetoleft")
            } else if (entry.intersectionRatio > 0 && (entry.target.id === "1")) {
                entry.target.classList.add("--fadetoright")
            }

            window.addEventListener("scroll", (e) => {
                if (window.scrollY === 0) {
                    entry.target.classList.remove("--fadetoleft");
                    entry.target.classList.remove("--fadetoright");
                }
            });

        });
    });

    cards.forEach(card => {
        observer.observe(card)
    })
}