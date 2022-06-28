// Credits: Gary Simon - DesignCourse
export default function hideAndShowHeader() {
    const header = document.querySelector('.header__navbar')!;
    const checkbox = document.getElementById('menuCheck') as HTMLInputElement | null;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            if (checkbox != null)
                checkbox.checked = false;
            header.classList.remove("scroll-up");
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
            header.classList.remove("scroll-up");
            header.classList.add("scroll-down");
        } else if (
            currentScroll < lastScroll &&
            header.classList.contains("scroll-down")
        ) {
            if (checkbox != null)
                checkbox.checked = false;
            header.classList.remove("scroll-down");
            header.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    });

}
