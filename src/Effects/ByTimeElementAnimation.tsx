function ByTimeElementAnimation(Element: string, Animation: string, Direction: string) {
    const Elements = document.querySelectorAll(Element);
    var clock = setInterval(anime, 500);
    var clockState: number = 0;

    if (Direction == "asc")
        clockState = (Elements.length - 1);

        console.log(Elements)
    function anime() {
        if (Direction == "desc") {
            if (clockState === -1) {
                clearInterval(clock)
            } else {
                Elements[clockState].classList.add(Animation)
                clockState--;
            }
        } else if (Direction == "asc") {
            if (clockState < Elements.length) {
                clearInterval(clock)
            } else {
                Elements[clockState].classList.add(Animation)
                clockState++;
            }
        }
    }

}

export default ByTimeElementAnimation;