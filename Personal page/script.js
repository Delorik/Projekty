const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.nav_links_container');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


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