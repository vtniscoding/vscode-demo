// Swiper
var swiper = new Swiper(".home", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const hearts = document.querySelectorAll('.fa-heart');
hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        if (this.classList.contains('fa-regular')) {
            this.classList.replace('fa-regular', 'fa-solid');
            this.classList.add('active');
        } 
        else {
            this.classList.replace('fa-solid', 'fa-regular');
            this.classList.remove('active');
        }
    });
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {  
  menu.classList.toggle('fa-xmark')
  if (menu.classList.contains('fa-xmark')) {
      menu.classList.remove('fa-bars');
  } else {
      menu.classList.add('fa-bars');
  }
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-xmark');
    menu.classList.add('fa-bars');
    navbar.classList.remove('active');
    let header = document.querySelector('header');
    header.classList.toggle('shadow', window.scrollY > 0);
}