/* Menu-sidebar */
const menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container');

menu.addEventListener('click', () => {
    container.classList.toggle('change');
})
/* End of Menu-sidebar */

/* Scroll Btn */
const scrollBtn = document.querySelector('.scroll-btn');
const html = document.querySelector('html');

scrollBtn.addEventListener('click', () => {
    html.style.scrollBehavior = 'smooth';

    setTimeout(() => {
        html.style.scrollBehavior = 'unset';
    }, 1000);
})
/* End of Scroll Btn */

/* Spinner effect */
const spinnerContainer = document.querySelector('.spinner-container');

setTimeout(() => {
    spinnerContainer.style.display = 'none';
    container.style.display = 'block';
}, 4000)

/* End of Spinner effect */