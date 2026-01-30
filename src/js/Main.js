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



// 1. Chọn tất cả các link có class 'nav-link'
const navLinks = document.querySelectorAll('.nav-link');
const navInput = document.getElementById('nav-btn-input');

// 2. Lắng nghe sự kiện click trên từng link
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // Tự động đóng menu bằng cách bỏ check input
    if (navInput.checked) {
      navInput.checked = false;
    }

    // Trình duyệt sẽ tự động cuộn đến phần ID nhờ vào href="#id" 
    // và thuộc tính scroll-behavior: smooth trong CSS.
  });
});

// 3. (Tùy chọn) Xử lý cuộn bù trừ cho chiều cao của Header
// Nếu Header là sticky, nó có thể che mất tiêu đề của Section
window.addEventListener('hashchange', () => {
  const offset = 80; // Chiều cao của header
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      const elementPosition = target.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }
});



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
