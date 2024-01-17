function furnitureClick() {
    var container = document.getElementById('furniture');
    var item = container.querySelectorAll('.item');

    item.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
        })
    });
}

function applianceClick() {
    var container = document.getElementById('appliance');
    var item = container.querySelectorAll('.item');

    item.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
        })
    });
}

function otherClick() {
    var container = document.getElementById('other');
    var item = container.querySelectorAll('.item');

    item.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
        })
    });
}

function petClick() {
    var container = document.getElementById('pet');
    var item = container.querySelectorAll('.item');

    item.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
        })
    });
}

function exteriorClick() {
    var container = document.getElementById('exterior');
    var item = container.querySelectorAll('.item');

    item.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
        })
    });
}

function unitLocationClick() {
    var container = document.getElementById('unitLocation');
    var item = container.querySelectorAll('.item');

    item.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
        })
    });
}

function unit_characterClick() {
    var container = document.getElementById('unit_character');
    var item = container.querySelectorAll('.item');

    item.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
        })
    });
}

function furnishedClick() {
    var container = document.getElementById('furnished');
    var item = container.querySelectorAll('.item');

    item.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.target.classList.toggle("active");
        })
    });
}


furnitureClick();
applianceClick();
otherClick();

petClick();
exteriorClick();
unitLocationClick();
unit_characterClick();
furnishedClick();