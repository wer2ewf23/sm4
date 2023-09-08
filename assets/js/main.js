


let a = Number(prompt('Введите стоимость'));
let b = Number(prompt('Введите вашу сумму'));

if(a==b){
    alert('Успешная покупка');
}else{
    if(a>b){
        x = a - b;
        alert('Недостаточно средств:' + x + 'p');
    }else{
        y = b - a;
        alert('Успешная покупка. Ваша сдача' + y + 'p');
    }
}

let container = document.querySelector('.header_container');
let logo = document.querySelectorAll('.header_logo');
let nav = document.getElementById('.header_nav');


container.style.background = 'blue';
container.style.height = '100px';
container.borderRadius = '15px';
logo.style.color = 'blue';

let box = '<div class="box"></div>';
let for_box = document.querySelector('.for_box');
for_box.innerHTML = box;
