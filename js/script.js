function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
//User name
const userName_span = document.getElementById('user-name');

// Scores
let userScore = 0,
 		computerScore = 0;
const userScore_span = document.getElementById("user-score"),
 			computerScore_span = document.getElementById("computer-score");

// Buttons
const buttonRock = document.getElementById('button-rock'),
			buttonPaper = document.getElementById('button-paper'),
			buttonScissors = document.getElementById('button-scissors');
let buttonName;

// Choices
let moveId,
		computerMove,
		playerMove,
		randomNumber;

// Round end
const round = document.getElementById('round'),
			buttonRound = document.getElementById('button-round');
let roundResult = document.getElementById('round-result');

// Get user name
let userName = prompt('hi! what\'s your name?', 'user');
console.log(userName);
userName_span.innerHTML = userName;

// Add round result message on a pop-up div
function printResult(result) {
	round.style.display = 'block';
	roundResult.innerHTML = result;
}

// Hide pop-up div with round result and clear score
function hideRoundResult() {
	round.style.display = 'none';
	userScore = 0;
	userScore_span.innerHTML = userScore;
	computerScore = 0;
	computerScore_span.innerHTML = computerScore;
}

// Players choice, computers choice
function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' was clicked');
	playerMove = buttonName;
	console.log('players move is : ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('randomly drawn number is: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('computers move is: ' + computerMove);
	displayResult(playerMove, computerMove);
	roundEndAlert(userScore, computerScore);
}

function getMoveName(moveId) {
  console.log('call the function with an argument: ' + moveId);
  if (moveId == 1) {
    return 'rock';
  } else if (moveId == 2) {
    return 'paper';
  } else if (moveId == 3) {
    return 'scissors';
  }
}

// Compare choices
function userWin(){
	printMessage('You win!!');
	userScore++;
	userScore_span.innerHTML = userScore;
}

function displayResult(playerMove, computerMove) {
  console.log('call the function with arguments: ' + playerMove + ', ' + computerMove);
  if (playerMove == 'paper' && computerMove == 'rock') {
    userWin(userScore);
  } else if (playerMove == 'rock' && computerMove == 'scissors') {
    userWin(userScore);
  } else if (playerMove == 'scissors' && computerMove == 'paper') {
    userWin(userScore);
  } else if (playerMove == computerMove) {
    printMessage('It\'s a draw!');
  } else {
    printMessage('You lose :(');
		computerScore++;
		computerScore_span.innerHTML = computerScore;
  }
  printMessage('I throw ' + computerMove + ', you throw ' + playerMove + '.');
}

// Round result
function roundEndAlert(userScore, computerScore) {
	console.log('call the function with arguments: ' + userScore + ',' + computerScore);
	if (userScore == 3) {
		console.log(userName + ' won this round');
		printResult('You WON this round!');
	} else if (computerScore == 3) {
		console.log('Computer won this round');
		printResult('You LOST this round :(');
	}
}

buttonRock.addEventListener('click', function(){
	buttonClicked('rock')
});
buttonPaper.addEventListener('click', function(){
 buttonClicked('paper')
});
buttonScissors.addEventListener('click', function(){
	buttonClicked('scissors')
});
buttonRound.addEventListener('click', hideRoundResult);
