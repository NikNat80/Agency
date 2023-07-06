
const footerYearElement = document.querySelector('.footer__year');
let today = new Date();
let year = today.getFullYear();
footerYearElement.textContent = year;

const faElement = document.querySelector('.fa-bars');
const navElement = document.querySelector('.nav');
const closeElement = document.querySelector('.fa-xmark');

const button = document.querySelector('.button');
const contactSection = document.querySelector('.get__content');
const buttonService = document.querySelector('.button__service');
const subscribeSection = document.querySelector('.subscribe');
const menuNav = document.querySelector('.menu__link-portfolio');
const teamSection = document.querySelector('.team__content');
const menuHeader = document.querySelector('.menu__link-service');
const serviceSection = document.querySelector('.service__content');
const navSection = document.querySelector('.menu__contact');
const contactsSection = document.querySelector('.get__contacts');


          
    faElement.addEventListener('click', function (e) {
    navElement.style.left = 0;
})

    closeElement.addEventListener('click', function (e) {
    navElement.style.left = '-100%';
})

    button.addEventListener('click', () => {
    contactSection.scrollIntoView( {
        behavior:"smooth"
    });
})

    buttonService.addEventListener('click', () => {
    subscribeSection.scrollIntoView( {
        behavior:"smooth"
    });
})

    menuNav.addEventListener('click', () => {
    teamSection.scrollIntoView( {
        behavior:"smooth"
    });
})

menuHeader.addEventListener('click', () => {
   serviceSection.scrollIntoView( {
        behavior:"smooth"
    });
})

navSection.addEventListener('click', () => {
    contactsSection.scrollIntoView( {
        behavior:"smooth"
    });
})

    
