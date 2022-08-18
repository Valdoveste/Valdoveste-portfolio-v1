import React from "react";

const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    let target = event.currentTarget.pathname.split("/")[1];
    let dest = document.getElementById(target)!;

    if (target === "home")
        window.scrollTo(0, 0);
    else
        window.scrollTo(dest.offsetLeft, dest.offsetTop);

}

export default scrollTo;