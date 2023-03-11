export default function fadeBidirectional() {
    const cards = document.querySelectorAll('.card-lg')!;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("--fadetoleft");
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
        observer.observe(card);
    })

}