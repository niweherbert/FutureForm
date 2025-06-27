const masthead = document.querySelector(".masthead");
const btn = document.querySelector(".btn--menu");
const btnIcon = document.querySelector(".mobile-menu-icon");
const nav = document.querySelector(".nav__list");
const navItems = document.querySelectorAll(".nav__list-item");

function toggleMenu() {
  // Mobile navigation toggle
  nav.classList.toggle("nav__list--hidden");
  document.body.classList.toggle("disable-scroll");

  // Add nav item staggered, fadein animation
  navItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `fadeInTop .7s backwards ${index / 8 + 0.3}s`;
    }
  });

  // Switch menu button icon and aria-expanded on toggle
  if (nav.classList.contains("nav__list--hidden")) {
    btnIcon.src = "./images/icon-hamburger.svg";
    btn.setAttribute("aria-expanded", "false");
  } else {
    btnIcon.src = "./images/icon-close.svg";
    btn.setAttribute("aria-expanded", "true");
  }
}

function mobileScrollBG() {
  // Check for mobile layout screen size
  if (window.innerWidth < 750) {
    // Add black background to fixed masthead on scroll
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      masthead.classList.add("masthead--scroll");
    } else {
      masthead.classList.remove("masthead--scroll");
    }
  } else {
    // Remove black background on larger screens
    masthead.classList.remove("masthead--scroll");
  }
}

window.onscroll = function () {
  mobileScrollBG();
};
btn.addEventListener("click", toggleMenu);

document.addEventListener('DOMContentLoaded', function () {
  const creations = [
    {
      title: 'Deep earth',
      img: './images/desktop/image-deep-earth.jpg'
    },
    {
      title: 'Night arcade',
      img: './images/desktop/image-night-arcade.jpg'
    },
    {
      title: 'Soccer team VR',
      img: './images/desktop/image-soccer-team.jpg'
    },
    {
      title: 'The grid',
      img: './images/desktop/image-grid.jpg'
    },
    {
      title: 'From up above VR',
      img: './images/desktop/image-from-above.jpg'
    },
    {
      title: 'Pocket borealis',
      img: './images/desktop/image-pocket-borealis.jpg'
    },
    {
      title: 'The Curiosity',
      img: './images/desktop/image-curiosity.jpg'
    },
    {
      title: 'Make it fisheye',
      img: './images/desktop/image-fisheye.jpg'
    }
  ];

  const cards = document.querySelectorAll('.card-container .card');
  const modal = document.getElementById('creation-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalClose = document.querySelector('.modal__close');

  cards.forEach((card, idx) => {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      modalImg.src = creations[idx].img;
      modalTitle.textContent = creations[idx].title;
      modal.style.display = 'flex';
    });
  });

  modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
    modalImg.src = '';
    modalTitle.textContent = '';
  });

  // Optional: close modal when clicking outside content
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
      modalTitle.textContent = '';
    }
  });
});
