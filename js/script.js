function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var buttonRound = document.getElementById('button-round');

function printResult(result) {
	var roundResult = document.getElementById('round');
	roundResult.style.display = 'block';
	roundResult.innerHTML += result;
}

function hideRoundResult() {
	document.getElementById('round').style.visibility = 'hidden';
	userScore = 0;
	userScore_span.innerHTML = userScore;
	computerScore = 0;
	computerScore_span.innerHTML = computerScore;
}

function clearScore(userScore, computerScore) {
	document.getElementById("user-score") = '0';
	document.getElementById("computer-score") = '0';
}

// Get user userName

var userName = prompt('hi! what\'s your name?', 'user');
var userName_span = document.getElementById('user-name');
console.log(userName);
userName_span.innerHTML = userName;

// Scores

var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");

// Buttons

var buttonRock = document.getElementById('button-rock');
var buttonPaper = document.getElementById('button-paper');
var buttonScissors = document.getElementById('button-scissors');
var buttonName;

// Main function

function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' was clicked');

	var moveId, computerMove, playerMove, randomNumber;

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

// Compare choices + result

	function displayResult(playerMove, computerMove) {
	  console.log('call the function with arguments: ' + playerMove + ', ' + computerMove);
	  if (playerMove == 'paper' && computerMove == 'rock') {
	    printMessage('You win!!');
			userScore++;
			userScore_span.innerHTML = userScore;
	  } else if (playerMove == 'rock' && computerMove == 'scissors') {
	    printMessage('You win!!');
			userScore++;
			userScore_span.innerHTML = userScore;
	  } else if (playerMove == 'scissors' && computerMove == 'paper') {
	    printMessage('You win ;)!');
			userScore++;
			userScore_span.innerHTML = userScore;
	  } else if (playerMove == computerMove) {
	    printMessage('It\'s a draw!');
	  } else {
	    printMessage('You lose :(');
			computerScore++;
			computerScore_span.innerHTML = computerScore;
	  }
	  printMessage('I throw ' + computerMove + ', you throw ' + playerMove + '.');
	}

	function roundEndAlert(userScore, computerScore) {
		console.log('call the function with arguments: ' + userScore + ',' + computerScore);
		if (userScore == '3') {
			printResult('You WON this round!');
		} else if (computerScore == '3') {
			printResult('You LOST this round :(');
		}
	}

// Computer's choices

	playerMove = buttonName;
	console.log('players move is : ' + playerMove);
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('randomly drawn number is: ' + randomNumber);
	computerMove = getMoveName(randomNumber);
	console.log('computers move is: ' + computerMove);
	displayResult(playerMove, computerMove);
	roundEndAlert(userScore, computerScore);
}

// Player's choice

buttonRock.addEventListener('click', function(){
	buttonClicked('rock')
});
buttonPaper.addEventListener('click', function(){
 buttonClicked('paper')
});
buttonScissors.addEventListener('click', function(){
	buttonClicked('scissors')
});
