"use strict";

//Variables globales
let counter = 1;
let computerSelection = "";
const playButton = document.querySelector(".js_button");
const selectPlay = document.querySelector(".js_select_play");

const infoUser = document.querySelector(".js_infouser");
const player = document.querySelector(".js_player");
const computer = document.querySelector(".js_computer");
const randomNumber = getRandom(10);

//Funciones

function getRandom(max) {
  return Math.ceil(Math.random() * max);
}

function getOptionComputer() {
  const optionPc = randomNumber;

  if (optionPc < 3) {
    computerSelection = "piedra";
  } else if (optionPc >= 3) {
    computerSelection = "papel";
  } else if (optionPc > 6) {
    computerSelection = "tijeras";
  }
}

function compareOptionPlayer() {
  const optionPlay = Number(selectPlay.value);

  if (optionPlay === randomNumber) {
    infoUser.textContent = "Empate";
  } else if (optionPlay < randomNumber) {
    infoUser.textContent = "¡Has perdido!";
  } else if (optionPlay > randomNumber) {
    infoUser.textContent = "¡Has ganado!";
  }
  console.log(infoUser);
  counter++;
}
//Falta Funcion para contador

function handleClickPlay(event) {
  event.preventDefault();
  getOptionComputer();
  compareOptionPlayer();
}

//Listeners

playButton.addEventListener("click", handleClickPlay);
