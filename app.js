let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
        displayResults("Tie game!");
    }   else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) {
        computerScore = ++computerScore;
        keepCPUscore();
        if (computerScore === 1) {
            displayResults(
                `Oh no! You lost.
                ${capitalize(computerSelecton)} beats ${playerSelection}.`
            );
        }
} else if (computerScore === 2) {
    displayResults(
      `Arghh. ${capitalize(
        computerSelection
      )} beats ${playerSelection}. Give it another shot!`
    );
  } else if (computerScore === 3) {
    displayResults(
      `${capitalize(
        computerSelection
      )} beats ${playerSelection}. It's ok. You got this!!`
    );
  } else if (computerScore === 4) {
    displayResults(
      `Oh no. It's match point!! ${capitalize(
        computerSelection
      )} beats ${playerSelection}. Don't let us down!`
    );
  } else {
    displayResults(`${computerSelection} beats ${playerSelection}`);
  }
} else {
  playerScore = ++playerScore;
  keepPlayerScore();
  if (playerScore === 1) {
    displayResults(
      `Lets go!!! You won.
      ${capitalize(playerSelection)} beats ${computerSelection}.`
    );
  } else if (playerScore === 2) {
    displayResults(
      `You're pretty good at this. ${capitalize(
        playerSelection
      )} beats ${computerSelection}.`
    );
  } else if (playerScore === 3) {
    displayResults(
      `${capitalize(
        playerSelection
      )} beats ${computerSelection}! Has mankind found its savior??`
    );
  } else if (playerScore === 4) {
    displayResults(
      `${capitalize(
        playerSelection
      )} beats ${computerSelection}. One more and you're a hero!`
    );
  } else {
    displayResults(`${playerSelection} beats ${computerSelection}`);
        } 
    }
}

function capitalize(str) {
return str.charAt(0).toUpperCase() + str.slice(1);
}