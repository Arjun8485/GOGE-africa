function applyPStyling() {
    const p = document.getElementsByTagName("p");
    for (let index = 0; index < p.length; index++) {
        p[index].classList += " font-light"
    }
}
applyPStyling();

function applyH3Styling() {
    const h3 = document.getElementsByTagName("h3");
    for (let index = 0; index < h3.length; index++) {
        h3[index].classList += " lg:text-4xl text-3xl text-yellow-500";
    }
}
applyH3Styling()