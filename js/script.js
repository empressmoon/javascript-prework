function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var userScore= 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var userScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");

var buttonName;

var buttonRock = document.getElementById('button-rock');
var buttonPaper = document.getElementById('button-paper');
var buttonScissors = document.getElementById('button-scissors');


buttonRock.addEventListener('click', function(){
	buttonClicked('kamień')
});
buttonPaper.addEventListener('click', function(){
 buttonClicked('papier')
});
buttonScissors.addEventListener('click', function(){
	buttonClicked('nożyce')
});


function buttonClicked(buttonName) {
  clearMessages();
  console.log((buttonName + ' został kliknięty'));

	var moveId, computerMove, playerMove, randomNumber;

	function getMoveName(moveId) {
	  console.log(('wywołano funkcję getMoveName z argumentem: ' + moveId));
	  if (moveId == 1) {
	    return 'kamień';
	  } else if (moveId == 2) {
	    return 'papier';
	  } else if (moveId == 3) {
	    return 'nożyce';
	  } else {
	    printMessage(('Nie znam ruchu o id ' + moveId + '. Zakładam, że chodziło o "kamień".'));
	    return 'kamień';
	  }
	}

	function displayResult(playerMove, computerMove) {
	  console.log(('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove));
	  if (playerMove == 'papier' && computerMove == 'kamień') {
	    printMessage('Wygrywasz!');
	  } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
	    printMessage('Wygrywasz!');
	  } else if (playerMove == 'nożyce' && computerMove == 'papier') {
	    printMessage('Wygrywasz!');
	  } else if (playerMove == computerMove) {
	    printMessage('Remis!');
	  } else {
	    printMessage('Przegrywasz :(');
	  }
	  printMessage(('Zagrałem ' + computerMove + ', a Ty ' + playerMove));
	}

	playerMove = buttonName;
	console.log(('ruch gracza to: ' + playerMove));
	randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log(('wylosowana liczba to: ' + randomNumber));
	computerMove = getMoveName(randomNumber);
	console.log(('ruch komputera to: ' + computerMove));
	displayResult(playerMove, computerMove);
}
