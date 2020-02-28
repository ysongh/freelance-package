const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', function (e) {
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        topBar.classList.add('u-hide');
    }
    else {
        topBar.classList.remove('u-hide');
    }
});