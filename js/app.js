
// Load Particle JS

particlesJS.load('particles-js', 'js/particle.json', function () {
  console.log('callback - particles.js config loaded');
});




// --------- HEADER ----------

// On hover button, arrow rotate downwards

let font_awesome = document.querySelector('.fa-arrow-right');


function mouseEnter() {
  // console.log('in');
  font_awesome.classList.add('fa-rotate-90');
}

function mouseLeave() {
  //   console.log('out');
  font_awesome.classList.remove('fa-rotate-90');
}

// Navigation menu

const navSlide = function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('nav .menu');

  console.log(menu);

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log(menu);
  });
}
//   
//   const navLink = document.querySelector('.navLink');
//   const navLinksAll = document.querySelectorAll('.navLink li');

//   burger.addEventListener('click', () => {
//     navLink.classList.toggle('nav-active');

//     // onclick animation on burger menu
//     navLinksAll.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = '';
//       } else {
//         link.style.animation = `navLinkFade 1s ease forwards ${index / 7 +
//           0.5}`;
//       }
//     });
//   });
// };

navSlide();



// For skills section

const moreInfoElement = document.querySelectorAll('.moreinfo');
const overlay = document.querySelectorAll('.overlay');
const close = document.querySelectorAll('.fa-times');
const projectHeading = document.querySelectorAll('.words h2');

projectHeading.forEach(heading => {
  heading.addEventListener('click', projectInfo);
})

moreInfoElement.forEach(moreInfo => {
  moreInfo.addEventListener('click', projectInfo);
})

close.forEach(indiClose => {
  indiClose.addEventListener('click', closeOverlay);
})

// moreInfoElement.addEventListener('click', projectInfo);
// close.addEventListener('click', closeOverlay);


function projectInfo(event) {
  let singleOverlay = event.target.parentElement.parentElement.querySelectorAll('.overlay')[0];
  console.log(singleOverlay);
  singleOverlay.classList.add('active-overlay');
}

function closeOverlay() {
  overlay.forEach(singOverlay => {
    singOverlay.classList.remove('active-overlay');
  })
}







// checking for input data in contact form, if yes.... remove the label or else stay fit


const input_field = document.querySelectorAll('.input-text');
input_field.forEach(input => {
  input.addEventListener('keyup', function () {
    // console.log(input);
    if (input.value == '') {
      input.classList.remove('not-empty');
    } else {
      input.classList.add('not-empty');
    }
  })
});


// download resume

const fileDownload = document.querySelector('.resume').addEventListener('click', function () {
  window.location = './resume/Resume.docx';
});