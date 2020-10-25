const showIcon = document.querySelector('.show');
const closeIcon = document.querySelector('.close');
const mobileMenu = document.querySelector('#mobile-view');

mobileMenu.style.display = "none";

showIcon.addEventListener('click', (e) => {
    e.preventDefault();

    mobileMenu.style.display = "block";
    showIcon.style.display = "none";
    closeIcon.style.display = "block";

});

closeIcon.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.style.display = "none";
    closeIcon.style.display = "none";
    showIcon.style.display = "block";

});
