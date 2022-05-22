const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

let urls = [
    "https://pngimg.com/uploads/cat/cat_PNG50550.png",
    "https://pngimg.com/uploads/cat/cat_PNG50547.png",
    "https://pngimg.com/uploads/cat/cat_PNG50549.png",
    "https://pngimg.com/uploads/cat/cat_PNG50537.png",
    "https://pngimg.com/uploads/cat/cat_PNG50542.png",
    "https://pngimg.com/uploads/cat/cat_PNG50527.png",
    "https://pngimg.com/uploads/cat/cat_PNG50520.png",
    "https://pngimg.com/uploads/cat/cat_PNG50511.png",
];
document.getElementById("random-link").addEventListener("click", function(){
    let url = urls[Math.floor(Math.random()*urls.length)]
  this.href = url;
});


const pricesContent = document.getElementsByClassName('prices__content'),
      pricesHeader = document.querySelectorAll('.prices__header');

function togglePrices(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < pricesContent.length; i++){
        pricesContent[i].className = 'prices__content prices__close';
    }

    if(itemClass === 'prices__content prices__close'){
        this.parentNode.className = 'prices__content prices__open';
    }
}

pricesHeader.forEach((el) => {
    el.addEventListener('click', togglePrices);
});

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtn = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
};

modalBtn.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i);
    });
});

modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        });
    });
});

function Random (){ 
    const max = 3;
    return Math.round(Math.random(1) * max );
   }
   
   const btn = document.getElementById('project-button');
   const span = document.getElementById('win');
   
   btn.onclick = function() {
     div.innerHTML = Random();
   }


/*==================== PORTFOLIO SWIPER  ====================*/

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

const icon = document.getElementById('theme-button');
icon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.classList.remove('uil-moon');
        icon.classList.add('uil-sun');
    }else{
        icon.classList.remove('uil-sun');
        icon.classList.add('uil-moon');
    }
}