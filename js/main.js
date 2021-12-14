"use strict";

//Variables globales
let counter = 1;
let playerValue = "";

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

function getOptionComputer(randomNumber) {
  let optionPc = "";

  if (randomNumber < 3) {
    optionPc = "rock";
  } else if (randomNumber >= 3) {
    optionPc = "paper";
  } else if (randomNumber > 6) {
    optionPc = "scissors";
  }

  return optionPc;
}

function compareOptionPlayer(optionPc) {
  playerValue = selectPlay.value;

  console.log(optionPc, playerValue);
  if (optionPc === "rock" && playerValue === "rock") {
    infoUser.innerHTML = "Empate";
  } else if (optionPc === "rock" && playerValue === "scissors") {
    infoUser.innerHTML = "¡Has perdido!";
  } else if (optionPc === "rock" && playerValue === "paper") {
    infoUser.innerHTML = "¡Has ganado!";
  } else if (optionPc === "paper" && playerValue === "rock") {
    infoUser.innerHTML = "¡Has perdido";
  } else if (optionPc === "paper" && playerValue === "scissors") {
    infoUser.innerHTML === "¡Has ganado!";
  } else if (optionPc === "paper" && playerValue === "paper") {
    infoUser.innerHTML = "Empate";
  } else if (optionPc === "scissors" && playerValue === "rock") {
    infoUser.innerHTML = "¡Has ganado";
  } else if (optionPc === "scissors" && playerValue === "scissors") {
    infoUser.innerHTML = "Empate";
  } else if (optionPc === "scissors" && playerValue === "paper") {
    infoUser.innerHTML = "Has perdido";
  }

  counter++;
}
//Falta Funcion para contador

function handleClickPlay(event) {
  event.preventDefault();
  let optionPc = getOptionComputer(randomNumber);

 player.textContent = selectPlay.value;
 computer.textContent = optionPc;
 compareOptionPlayer(optionPc);
}

//Listeners

playButton.addEventListener("click", handleClickPlay);
