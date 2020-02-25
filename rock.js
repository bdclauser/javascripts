function computerPlay() {
  let selection = ["rock", "paper", "scissors"];
  let randomSelection = selection[Math.floor(Math.random() * selection.length)];
  return selection;
}

let playerSelection;
var numberOfGames;

playerSelection = prompt(
  "Make your choice, type in 'ROCK', 'PAPER', or 'SCISSORS'."
).toUpperCase;

if (playerSelection != null && playerSelection != "")
  alert("You have entered : " + playerSelection);
else alert("You must type rock, paper, or scissors...!");

function playround(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tied";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "Computer Wins";
    } else return "Player Wins";
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "Computer Wins";
    } else return "Player Wins";
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "Computer Wins";
    } else return "Player Wins";
  }
}

//const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(playround(playerSelection, computerSelection));
