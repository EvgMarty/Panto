// find button
const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

//catch click
infoBtns.forEach((btn) => {
  btn.addEventListener('click', showHint);
});

document.addEventListener('click', closeHint);

// finde parent following children and  change class hidden
function showHint(e) {
  e.stopPropagation();
  this.parentNode.querySelector('.info-hint').classList.toggle('hidden');
}

function closeHint() {
  infoHints.forEach((item) => {
    item.classList.add('hidden');
    item.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}

// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 42,
  loop: true,
  freeMode: true,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '#slider-next',
    prevEl: '#slider-prev',
  },
});

//Tabs
const tabsBtn = document.querySelectorAll('[data-tab]');
const sliderProduct = document.querySelectorAll('[data-tab_content]');

tabsBtn.forEach((item) => {
  item.addEventListener('click', () => {
    //remove active class all the tabs
    tabsBtn.forEach((item) => {
      item.classList.remove('tab-controls__btn--active');
    });

    //add active class
    item.classList.add('tab-controls__btn--active');

    // recieve data atribut
    let dataSet = item.dataset.tab;

    let showProduct = document.querySelectorAll(
      `[data-tab_content="${dataSet}"]`
    );

    // hidden all the goods and show other
    sliderProduct.forEach((product) => {
      if (dataSet == 'all') {
        product.classList.remove('hidden');
      } else {
        product.classList.add('hidden');

        showProduct.forEach((item) => {
          item.classList.remove('hidden');
        });
      }

      swiper.update();
    });
  });
});

//Mobile nav

const mobNavOpenBtn = document.querySelector('#mobile-nav-open-btn');
const mobNavCloseBtn = document.querySelector('#mobile-nav-close-btn');
const mobNav = document.querySelector('#mobile-nav');

mobNavOpenBtn.addEventListener('click', () => {
  mobNav.classList.add('mobile-nav__wrapper--open');
});

mobNavCloseBtn.addEventListener('click', () => {
  mobNav.classList.remove('mobile-nav__wrapper--open');
});
