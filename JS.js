document.querySelectorAll(".carousel").forEach(carousel => {
const items = carousel.querySelectorAll (".carousel-item");
const buttonHtml = Array.from(items, () => {
    return `<span class="carousel-button"></span>`;
});

carousel.insertAdjacentHTML ("beforeend", `
<div class="carousel-nav">
${ buttonHtml.join("") }
</div>
`);

console.log(buttonHtml);

const buttons = carousel.querySelectorAll(".carousel-button"); 

buttons.forEach((button, i) => {
    button.addEventListener ("click", () => {
        //un-select all items.
        items.forEach(items => items.classList.remove("carousel-item--selected")); 
        buttons.forEach(button => button.classList.remove("carousel-button--selected")); 

        items[i].classList.add("carousel-item--selected");
        button.classList.add("carousel-button--selected");
    });
});

// selecteert de eerste pagina van de carousel
items[1].classList.add("carousel-item--selected");
buttons[1].classList.add("carousel-button--selected");
});
