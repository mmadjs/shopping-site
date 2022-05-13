const slides = document.querySelector(".slider-items").children;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const totalSlide = slides.length;
console.log(slides);
let index = 0;
let duration = 6000;

next.onclick = () => {
  slide("next");
};

prev.onclick = () => {
  slide("prev");
};

function slide(direction) {
  if (direction == "next") {
    if (index == totalSlide - 1) {
      index = 0;
    } else {
      index++;
    }
  }

  if (direction == "prev") {
    if (index == 0) {
      index = totalSlide - 1;
    } else {
      index--;
    }
  }

  clearInterval(timer);
  timer = setInterval(autoSlide, duration);

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[index].classList.add("active");
}

function autoSlide() {
  slide("next");
}

let timer = setInterval(autoSlide, duration);

let thumbnail = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let leftButton = document.getElementById("left-slide");
let rightButton = document.getElementById("right-slide");
leftButton.addEventListener("click", function () {
  slider.scrollLeft -= 125;
});

rightButton.addEventListener("click", function () {
  slider.scrollLeft += 125;
});

const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
  if (slider.scrollLeft > maxScrollLeft - 1) {
    slider.scrollLeft -= maxScrollLeft;
  } else {
    slider.scrollLeft += 1;
  }
}
let play = setInterval(autoPlay, 50);
for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener("mouseover", () => {
    clearInterval(play);
  });
  thumbnail[i].addEventListener("mouseout", () => {
    return (play = setInterval(autoPlay, 50));
  });
}

const btn_shop= document.querySelector('.btn-basket')
const header_notifiction = document.querySelector('.header-notifiction')

function movemouse() {
// header_notifiction.classList.toggle('act')  
header_notifiction.style.display="flex"
}
function outmouse() {
header_notifiction.style.display="none"
    
}
btn_shop.addEventListener('mouseover',movemouse)
btn_shop.addEventListener('mouseout',outmouse)



const input = document.querySelector('.input-search')
const btn_search = document.querySelector('.btn-search')

btn_search.addEventListener('click',()=>{
  input.classList.toggle('show')
  btn_close.style.opacity=1

})

const menu_icon_close= document.querySelector('.menu-icon-close')
const menu_hidden = document.querySelector('.menu-hidden')
const menu_icon_open=document.querySelector('.menu-icon-open')


// menu_icon_close.addEventListener('click',()=>{
  
//   menu_hidden.style.transform="translateX(120%)"
// })
// menu_icon_open.addEventListener('click',()=>{
//   menu_hidden.style.transform="translateX(0%)"
// })

function open_menu() {
  menu_hidden.style.transform="translateX(0%)"
}
function close_menu() {
  menu_hidden.style.transform="translateX(100%)"
}