const getComputerChoice = () => {

  switch (Math.ceil(Math.random() * 3)) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';

  }
}

// console.log(computerChoice());

const play = (playerChoice) => {
  let computerChoice = getComputerChoice();
  console.log(playerChoice, computerChoice)
  if (playerChoice === computerChoice) {
    alert('The game is a tie!')
  } else if (playerChoice === 'rock' && computerChoice === 'paper') {
    alert('The computer wins!')
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    alert('You win!')
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    alert('The computer wins!')
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    alert('You win!')
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    alert('The computer wins!')
  } else {
    alert('You win!')
  }
}