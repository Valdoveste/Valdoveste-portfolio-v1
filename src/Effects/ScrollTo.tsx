const scrollTo = (event : React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    let target = event.currentTarget.pathname.split("/")[1];

    let dest = document.getElementById(target)!;
    window.scrollTo(dest.offsetLeft, dest.offsetTop);
}

export default scrollTo;