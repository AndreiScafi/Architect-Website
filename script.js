/* Spinner effect */

/* My Attempt */
/* const spinnerContainer = document.querySelector('.spinner-container');

setTimeout(() => {
    spinnerContainer.style.display = 'none';
    container.style.display = 'block';
}, 4000) */
/* End of My Attempt */

/* Professor's code */

window.onload = () => {
    setTimeout(() => {
        document.querySelector('body').classList.add('display')
    }, 4000)
};

/* End of Professor's code */

/* End of Spinner effect */

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

