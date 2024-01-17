function toggleMenu(id) {
    const menu = document.getElementById(id);
    menu.classList.toggle('active');
}
function toggleNav() {
    const nav = document.getElementById('nav-menu');
    const morebtn = document.getElementById('more-btn');
    nav.classList.toggle('active');
    morebtn.classList.toggle('active');
}

function openMenu(index, el) {
    const all_li = document.querySelectorAll('#nav-menu');
    const liArray = Array.from(all_li);
    liArray.forEach((elem) => {
        if (elem.classList.contains('active')) {
            elem.classList.remove("active")
        }
    });

    const li = el;
    li.classList.add('active');
    activeMenu(index);
}

function activeMenu(index){
    const target = document.querySelectorAll('#menu-content');
    const targetArray = Array.from(target);
    targetArray.forEach((elem, i) => {
        if (!elem.classList.contains('d-none')) {
            elem.classList.add("d-none")
        }
        if (index === i) {
            elem.classList.remove('d-none')
        }
    });

    const nav = document.getElementById('nav-menu');
    if (!nav.classList.contains('active')) {
        nav.classList.add('active');
    }
    const morebtn = document.getElementById('more-btn');
    if(!morebtn.classList.contains('active')){
        morebtn.classList.add('active');
    }
}