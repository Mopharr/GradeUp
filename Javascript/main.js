const menu = document.querySelector('.navbar-toggle');

const menulink = document.querySelector('.main-nav-btn');

const mobilemenu = () =>{
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active');
};

menu.addEventListener('click', mobilemenu);