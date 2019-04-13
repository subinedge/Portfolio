// Load Particle JS

particlesJS.load('particles-js', 'js/particle.json', function () {
  console.log('callback - particles.js config loaded');
});

// --------- HEADER ----------

// On hover button, arrow rotate downwards

let font_awesome = document.querySelector('.fa-arrow-right');

function mouseEnter() {
  //   console.log('in');
  font_awesome.classList.add('fa-rotate-90');
}

function mouseLeave() {
  //   console.log('out');
  font_awesome.classList.remove('fa-rotate-90');
}

// Navigation menu

const navSlide = function () {
  const burger = document.querySelector('.burger');
  const navLink = document.querySelector('.navLink');
  const navLinksAll = document.querySelectorAll('.navLink li');

  burger.addEventListener('click', () => {
    navLink.classList.toggle('nav-active');
    // console.log('clicked');

    // onclick animation on burger menu
    navLinksAll.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 1.5s ease forwards ${index / 7 +
          0.5}`;
      }
    });
  });
};

navSlide();


// projects section
function addBackground() {
  console.log('che che');
}