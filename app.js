const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rounds = document.querySelector(".rounds");
const res = document.querySelector(".res");
const userScoreElem = document.querySelector(".userScore");
const computerScoreElem = document.querySelector(".computerScore");

let userScore = 0;
let computerScore = 0;

rock.addEventListener("click", rockSelected);
paper.addEventListener("click", paperSelected);
scissors.addEventListener("click", scissorsSelected);

function rockSelected() {
  user = 0;
  console.log("rs");
  playRPS();
}

function paperSelected() {
  user = 1;
  console.log("ps");
  playRPS();
}

function scissorsSelected() {
  user = 2;
  console.log("ss");
  playRPS();
}

let roundsPlayed = 0;
function playRPS() {
  if (roundsPlayed < 5) {
    roundsPlayed++;
    rounds.textContent = roundsPlayed;
    const comp = getComputerChoice();

    if (user === 0 && comp === "rock") {
      res.textContent = "Draw - Rock on Rock";
    } else if (user === 1 && comp === "paper") {
      res.textContent = "Draw - Paper on Paper";
    } else if (user === 2 && comp === "scissors") {
      res.textContent = "Draw - Scissors on Scissors";
    } else if (user === 0 && comp === "paper") {
      res.textContent = "You Lose - Paper Defeats Rock";
      computerScore++;
      computerScoreElem.textContent = computerScore;
    } else if (user === 0 && comp === "scissors") {
      res.textContent = "You Win - Rock Smashes Scissors";
      userScore++;
      userScoreElem.textContent = userScore;
    } else if (user === 1 && comp === "rock") {
      res.textContent = "You Win - Paper Defeats Rock";
      userScore++;
      userScoreElem.textContent = userScore;
    } else if (user === 1 && comp === "scissors") {
      res.textContent = "You Lose - Scissors Defeats Paper";
      computerScore++;
      computerScoreElem.textContent = computerScore;
    } else if (user === 2 && comp === "rock") {
      res.textContent = "You Lose - Rock Smashes Scissors";
      computerScore++;
      computerScoreElem.textContent = computerScore;
    } else if (user === 2 && comp === "paper") {
      res.textContent = "You Win - Scissors Defeats Paper";
      userScore++;
      userScoreElem.textContent = userScore;
    } else {
      res.textContent = "Not a valid input. Please Choose Your Fate.";
    }
  }
  if (roundsPlayed === 5) {
    declareWinner();
  }
}

function declareWinner() {
  if (userScore > computerScore) {
    res.textContent = "You are the winner!";
  } else if (userScore < computerScore) {
    res.textContent = "Computer wins!";
  } else {
    res.textContent = "It's a tie!";
  }

  refreshButton.style.display = "block"; // Show the restart button
}

const getComputerChoice = () => {
  const randomInteger = Math.floor(Math.random() * 3);
  if (randomInteger === 0) {
    return "rock";
  } else if (randomInteger === 1) {
    return "paper";
  } else {
    return "scissors";
  }
  console.log(randomInteger);
};

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", () => {
  if (confirm("Do you want to play again?")) {
    resetGame();
  }
});

function resetGame() {
  userScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  userScoreElem.textContent = userScore;
  computerScoreElem.textContent = computerScore;
  rounds.textContent = "0";
  res.textContent = "";
  refreshButton.style.display = "none"; // Hide the restart button
}
