function switchFilter(){
    const list = document.getElementById('list');
    const map = document.getElementById('map');

    list.classList.toggle('text-white');
    map.classList.toggle('text-white');
}

function onSaleClick(id){
    const sale_1 = document.getElementById('sale_1');
    const sale_2 = document.getElementById('sale_2');
    const sale_3 = document.getElementById('sale_3');

    sale_1.classList.remove('active');
    sale_2.classList.remove('active');
    sale_3.classList.remove('active');
    
    const elem = document.getElementById(id);
    if(!elem) return;
    elem.classList.toggle('active')
}

function onRentClick(id){
    const rent_1 = document.getElementById('rent_1');
    const rent_2 = document.getElementById('rent_2');
    const rent_3 = document.getElementById('rent_3');

    rent_1.classList.remove('active');
    rent_2.classList.remove('active');
    rent_3.classList.remove('active');
    
    const elem = document.getElementById(id);
    const form = document.getElementById('rent_form');
    if(!elem) return;
    if(id === 'rent_2'){
        form.classList.remove('d-none')
    }else{
        form.classList.add('d-none')
    }
    elem.classList.toggle('active')
}