function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, playerMove;


highlightBlock('Mhaz}dPies%2|2Jz#XEO');
computerMove = 'kamień';
highlightBlock('rw}O3R,Wh])%.ZZBm=28');
printMessage(('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'));
highlightBlock('~XV*B)zQ{o{gY[AsMJuJ');
playerMove = 'papier';
highlightBlock('9,Le;%IaD;QSCuF^`QWn');
printMessage(('Zagrałem ' + playerMove + '! Wygrałam'));
