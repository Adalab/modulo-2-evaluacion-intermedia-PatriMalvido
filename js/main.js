"use strict";

const playButton = document.querySelector(".js_button");
const selectPlay = document.querySelector(".js_select_play");
const resetButton = document.querySelector(".js_reset_button");
const result = document.querySelector('.js_result');
const player = document.querySelector(".js_player_score");
const computer = document.querySelector(".js_computer_score");

let playerScore = 0;
let computerScore = 0;
let moves = 0;

//Funcion para generar numero aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Funcion aleatoria de la jugada del ordenador
function getOptionComputer() {
  let optionPc = "";
  let number = getRandomNumber(9);
  if (number <= 3) {
    optionPc = "rock";
  } else if (number <= 6) {
    optionPc = "paper";
  } else if (number > 6) {
    optionPc = "scissors";
  }
  return optionPc;
}

//Funcion para obtener la jugada del usuario
function getSelectedPlay (){
  return selectPlay.value;
}

//Funcion para comparar las jugadas del usuario y del ordenador
function playGame(){
  let moveComputer = getOptionComputer();
  let movePlayer = getSelectedPlay();
  moves ++;
  
  if (moveComputer === movePlayer){
    result.innerHTML = 'Empate!'
  } else if (movePlayer === "rock") {
    if (moveComputer === "paper") {
        result.innerHTML = "Has perdido!"
        computerScore++;
    } else if (moveComputer === "scissors") {
        result.innerHTML = "Has ganado!"
        playerScore++;
    }

} else if (movePlayer === "scissors") {
    if (moveComputer === "rock") {
        result.innerHTML = "Has perdido!"
        computerScore++;
    } else if (moveComputer === "paper") {
        result.innerHTML = "Has ganado!"
        playerScore++;
    }

} else if (movePlayer === "paper") {
    if (moveComputer === "scissors") {
        result.innerHTML = "Has perdido!"
        computerScore++;
    } else if (moveComputer === "rock") {
        result.innerHTML = "Has ganado!"
        playerScore++;
    }
}
computer.innerHTML = "Ordenador: " + computerScore;
player.innerHTML = "Jugador: "+playerScore;
}

//Funcion de finalizar juego
function gameOver() {
  if (moves === 10) {
      if (playerScore > computerScore) {
          result.innerHTML = "Has ganado el juego"
      } else if (playerScore < computerScore) {
          result.innerHTML = "Has perdido el juego"
      } else {
          result.innerHTML = "Empate"
      }
      playButton.classList.add("hidden");
      resetButton.classList.remove("hidden");
  }
}
//Funcion para mostrar los resultados
function hadleClickPlayGame(ev) {
  ev.preventDefault();
  playGame();
  gameOver();
}

//Funcion para empezar otra vez el juego
function handleClickReload(ev) {
  ev.preventDefault();
  playButton.classList.remove("hidden");
  resetButton.classList.add("hidden");
  playerScore = 0;
  computerScore = 0;
  moves = 0;
  result.innerHTML = "Vamos a jugar"
  computer.innerHTML = "Ordenador: " + computerScore;
  player.innerHTML = "Jugador:  " + playerScore;
}

//Eventos 
playButton.addEventListener('click', hadleClickPlayGame);
resetButton.addEventListener('click', handleClickReload)