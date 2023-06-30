let scoreboard = document.getElementById("scoreboard");
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = getResult(playerChoice, computerChoice);

  updateScoreboard(playerChoice, computerChoice, result);
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Quel dommage c'est une égalité !";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "Vous avez gagné !";
  } else {
    computerScore++;
    return "L'ordi vous a battu !";
  }
}

function updateScoreboard(playerChoice, computerChoice, result) {
  let row = scoreboard.insertRow(1);
  let playerCell = row.insertCell(0);
  let computerCell = row.insertCell(1);
  let resultCell = row.insertCell(2);

  playerCell.innerHTML = playerChoice;
  computerCell.innerHTML = computerChoice;
  resultCell.innerHTML = result;

  updateScores();
}

function updateScores() {
  let scoreRow = scoreboard.insertRow(1);
  let playerScoreCell = scoreRow.insertCell(0);
  let computerScoreCell = scoreRow.insertCell(1);

  playerScoreCell.innerHTML = "Score Joueur: " + playerScore;
  computerScoreCell.innerHTML = "Score Ordinateur: " + computerScore;
}
