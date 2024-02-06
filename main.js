const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
prevEl.addEventListener("click", ()=>{
    x = x + 45;
    updateGallery()
});
nextEl.addEventListener("click", ()=>{
    x = x - 45;
    updateGallery()
});

function updateGallery(){
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    setTimeout(()=>{
        x = x -45
        updateGallery()
    }, 3000)
}

updateGallery()


const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goPrev = () => {
    counter--
    slideImage()
}
const goNext = () => {
    counter++
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box = document.querySelector('.box');
let degree = 0;

prev.addEventListener('click', function(){
    degree += 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg)`;
})
next.addEventListener('click', function(){
    degree -= 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg)`;
})