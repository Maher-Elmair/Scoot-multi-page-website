/*==================the loader page ================*/
let loader = document.querySelector("section.loader");
// console.log(loader);

loader.addEventListener("animationstart", function () {
    if (loader.display = "block") {
        body.style.overflowY = "hidden";
    }
});

loader.addEventListener("animationend", function () {
    if (loader.display = "none") {
        body.style.overflowY = "auto";
        // loader.remove();
    }
});

// loader.onanimationend = () => {
//   console.log("Animation ended");
// };
/*==================the home page ================*/
let body = document.querySelector("body");

let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let bNav = document.querySelector(".btn-nav");

let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");

const bgCard = document.createElement("div");
const card = document.createElement("div");
bgCard.classList.add("bg-card")
card.classList.add("card")

hamburger.addEventListener("click", function () {
    body.style.overflowY = "hidden";
    hamburger.style.display = "none";
    close.style.display = "block";

    nav.appendChild(bgCard);
    bgCard.appendChild(card)
    card.appendChild(ul);
    card.appendChild(bNav);
})

close.addEventListener("click", function () {
    body.style.overflowY = "auto";
    hamburger.style.display = "block";
    close.style.display = "none";

    document.querySelector(".cont-left").appendChild(ul);
    nav.appendChild(bNav);
    bgCard.remove();
})
/*==================the home about ================*/
let rect = document.querySelectorAll(".rectangular");
let showAll = document.querySelectorAll(".show-all");
let chevron = document.querySelectorAll(".chevron");

for (let i = 0; i < rect.length; i++) {
    rect[i].addEventListener("click", () => {
        chevron[i].classList.toggle("round");

        console.log(showAll[i]);

        if (showAll[i].classList.contains("show")) {
            showAll[i].classList.add("hide");
            showAll[i].classList.remove("show");
        } else {
            showAll[i].classList.add("show");
            showAll[i].classList.remove("hide");
        }
    })
}
