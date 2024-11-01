let sliderIndex = 0;
let dots = document.querySelectorAll('.header__slider_dots .dot');
let slider = document.querySelectorAll('.header__slider_path');

for (let i = 0; i < slider.length; i++) {
    slider[i].classList.remove('active');
}
for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
}

dots[sliderIndex].classList.add('active');
slider[sliderIndex].classList.add('active');

function sliderChange() {
    if (sliderIndex < slider.length - 1) {
        sliderIndex++;
    } else {
        sliderIndex = 0;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active');
    }
    slider[sliderIndex].classList.add('active');
    dots[sliderIndex].classList.add('active');
}
setInterval(() => {
    sliderChange();
}, 3000);

function dotsChange(this__value) {
    let slider__val = this__value.value;

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    for (let i = 0; i < slider.length; i++) {
        slider[i].classList.remove('active');
    }

    slider[slider__val].classList.add('active');
    dots[slider__val].classList.add('active');
}

let tab = document.querySelectorAll('.pocket__tabs_tab');
let xz = document.querySelectorAll('.pocket__path');
let btns = document.querySelectorAll('.pocket__content .more');
function tabs(this__btn, tab__content) {
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('active');
    }
    for (let i = 0; i < xz.length; i++) {
        xz[i].classList.remove('active');
    }
    let this__path = this__btn.closest('.pocket__path');
    this__path.classList.add('active');
    this__btn.classList.add('active');
    document.querySelector(`#${tab__content}`).classList.add('active');
}


let tab2 = document.querySelectorAll('.questions__tabs_path');
let btns2 = document.querySelectorAll('.questions__btns button');
function tables(this__btns, tab__content2) {
    for (let i = 0; i < btns2.length; i++) {
        btns2[i].classList.remove('active');
    }
    for (let i = 0; i < tab2.length; i++) {
        tab2[i].classList.remove('active');
    }
    this__btns.classList.add('active');
    document.querySelector(`#${tab__content2}`).classList.add('active');
}
document.getElementById("defaultOpen").click();
