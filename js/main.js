'use strict';

//Variables globales

const playButton = document.querySelector('.js_button');
const selectPlay = document.querySelector('.js_select_play');

const infoUser = document.querySelector('.js_infouser');
const player = document.querySelector('.js_player');
const computer = document.querySelector('.js_computer');
const randomNumber = getRandom(10);
console.log(randomNumber);

//Funciones

function getRandom(max) {
    return Math.ceil(Math.random() * max);
}







//Listeners

//playButton.addEventListener('click',handleClikPlay);