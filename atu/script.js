const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-navigation');

menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navigation.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

document.querySelectorAll('.faq-list details').forEach((item) => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            document.querySelectorAll('.faq-list details[open]').forEach((otherItem) => {
                if (otherItem !== item) otherItem.removeAttribute('open');
            });
        }
    });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
