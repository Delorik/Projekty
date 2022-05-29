const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.nav_links_container');
const navLogo = document.querySelector('.nav_logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 1100 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);









//Phone and mail

var i = 0;
var txt = 'grubnerp@email.cz';
var speed = 50;

function typeWriterMail() {
    if (i < txt.length) {
        document.getElementById("email").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterMail, speed);
    }
}

var o = 0;
var text = '+420 776 306 212';

function typeWriterPhone() {
    if (o < text.length) {
        document.getElementById("phone").innerHTML += text.charAt(o);
        o++;
        setTimeout(typeWriterPhone, speed);
    }
}
