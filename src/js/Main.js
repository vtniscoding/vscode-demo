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
  heart.addEventListener('click', function () {
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

// PC Navigation
const navLinks = document.querySelectorAll('.nav__pc a, .nav__mobile-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // 1. Xóa class 'active' khỏi tất cả các link khác
        navLinks.forEach(l => l.classList.remove('active'));
        
        // 2. Thêm class 'active' vào link vừa click
        this.classList.add('active');
    });
});

// Mobile Navigation
const mobileLinks = document.querySelectorAll('.nav__mobile-link');
const checkbox = document.querySelector('.nav-btn-input__check');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    checkbox.checked = false; // Tắt checkbox -> CSS tự thu menu lại
  });
});

// Auto Scroll 
window.onscroll = () => {
  navbar.classList.remove('active');
  let header = document.querySelector('header');
  header.classList.toggle('shadow', window.scrollY > 0);
}

// Footer Accordion
document.addEventListener('DOMContentLoaded', () => {
  const headings = document.querySelectorAll('.footer-heading');

  headings.forEach(heading => {
    heading.addEventListener('click', () => {
      // Check if we are on mobile
      if (window.innerWidth < 768) {
        const parentCol = heading.parentElement;
        const currentIcon = heading.querySelector('.icon');

        // 1. Reset all other sections and their icons
        document.querySelectorAll('.footer-col').forEach(col => {
          if (col !== parentCol) {
            col.classList.remove('active');
            const otherIcon = col.querySelector('.icon');
            if (otherIcon) {
              otherIcon.classList.remove('fa-angle-up');
              otherIcon.classList.add('fa-angle-down');
            }
          }
        });

        // 2. Toggle current section
        parentCol.classList.toggle('active');

        // 3. Swap icon class based on active state
        if (parentCol.classList.contains('active')) {
          currentIcon.classList.remove('fa-angle-down');
          currentIcon.classList.add('fa-angle-up');
        } else {
          currentIcon.classList.remove('fa-angle-up');
          currentIcon.classList.add('fa-angle-down');
        }
      }
    });
  });
});
