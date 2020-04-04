const topBar = document.querySelector('.top-bar');
const desk = document.querySelector('.deskNav');
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

$(document).ready(function () {
    $('.smooth-goto').on('click', function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 150}, 0);
        return false;
    });

    $(".hamburger-btn .fa-times").hide();

    $(".hamburger-btn .fa-bars").click(function () {
        $(this).hide();
        $(".hamburger-btn .fa-times").show();
        $(".mobileNav ul").addClass("active");
    });

    $(".hamburger-btn .fa-times").click(function () {
        $(this).hide();
        $(".hamburger-btn .fa-bars").show();
        $(".mobileNav ul").removeClass("active");
    });

    $(".mobileNav_link").click(function () {
        $(".hamburger-btn .fa-times").hide();
        $(".hamburger-btn .fa-bars").show();
        $(".mobileNav ul").removeClass("active");
    });
});