function ByTimeElementAnimation(Element: string, Animation: string, Order: string, Time: number) {
    const Elements = document.querySelectorAll(Element);
    var clock = setInterval(anime, Time);
    var clockState = (Elements.length - 1);

    if (Order === "asc")
        clockState = 0;

    function anime() {
        if (Order === "desc") {
            if (clockState === -1) {
                clearInterval(clock)
            } else {
                Elements[clockState].classList.add(Animation)
                clockState--;
            }
        } else if (Order === "asc") {
            if (clockState > (Elements.length - 1)) {
                clearInterval(clock)
            } else {
                Elements[clockState].classList.add(Animation)
                clockState++;
            }
        }
    }

}

export default ByTimeElementAnimation;