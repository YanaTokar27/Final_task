const btn = document.querySelector('.js-menu-btn');
const menu = document.querySelector('.js-menu-list');

btn.addEventListener('click', function () {
    if (btn.classList.contains('menu__btn_home')) {
        btn.classList.toggle('menu__btn_close_home');
    } else {
        btn.classList.toggle('menu__btn_close_about');
    }

    menu.classList.toggle('menu__list_close');
});
