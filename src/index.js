//http://localhost:8080/

import "./styles.css";
import IMG1 from "./IMG1.jpeg";
import IMG2 from "./IMG2.jpeg";
import IMG3 from "./IMG3.jpeg";
import IMG4 from "./IMG4.jpeg";
import IMG5 from "./IMG5.jpeg";

const slides = document.getElementById("slides");
const dots = document.getElementById("dots");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");


//drop-down menu
const dropButton = document.getElementById("drop-down");
const dropMenu = document.getElementById("drop-down-content");
dropButton.addEventListener("click", () => {
    dropMenu.style.display = dropMenu.style.display === "flex" ? "none" : "flex";
}
);
//drop-down menu

const images = [IMG1, IMG2, IMG3, IMG4, IMG5];
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (index >= slides.length) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    }
    );

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    }
    );
    slideIndex = index;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function previousSlide() {
    showSlide(slideIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}


images.forEach((image, index) => {
    const slide = document.createElement("img");
    slide.src = image;
    slide.classList.add("slide");
    slides.appendChild(slide);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        currentSlide(index);
    });
    dots.appendChild(dot);
}
);

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);



showSlide(slideIndex);