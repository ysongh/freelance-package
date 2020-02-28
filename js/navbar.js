const topBar = document.querySelector('.top-bar');
const desk = document.querySelector('.desk');
const mobileNav = document.querySelector('.mobileNav');

window.addEventListener('scroll', function (e) {
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        topBar.classList.add('u-hide');
        desk.classList.add('u-top-0');
        mobileNav.classList.add('u-top-0');
    }
    else {
        topBar.classList.remove('u-hide');
        desk.classList.remove('u-top-0');
        mobileNav.classList.remove('u-top-0');
    }
});