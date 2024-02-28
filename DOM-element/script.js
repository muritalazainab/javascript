const tagEl = document.getElementsByTagName('h1');
console.log(tagEl);

const textEl = document.getElementsByClassName('testing');
console.log(textEl)

const checkId = document.getElementById('jiji');
console.log(checkId)

const allEL = document.querySelectorAll('.selectEL');
console.log(checkId)

const oneEL = document.querySelector('.selectELone');
console.log(checkId)

const ell = document.querySelector('#pelezainabu');
console.log(checkId)

const button = document.querySelector('button');
console.log(button)

button.addEventListener('mouseover', ()=> {
    alert("it is  a close time baby")
})