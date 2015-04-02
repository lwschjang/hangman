var wordArray = [
["T", "R", "E", "E", "H", "O", "U", "S", "E"],
  ["J","A","V","A","S","C","R","I","P","T"],
  ["W","E","B","D","E","S","I","G","N"],
  ["E","D","U","C","A","T","I","O","N"],
  ["C","H","O","C","O","L","A","T","E"],
  ["G","E","R","M","A","N","Y"]
]
var random = Math.floor((Math.random()*(wordArray.length-1))); 

var wordToGuess = wordArray[random]; // the word to guess will be chosen from the array above
var wordLength = new Array(wordToGuess.length);
var error = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < wordLength.length; i++){
	wordLength[i] = "_ ";
}

// prints the guessfield
function printWordLength(){
	for (var i = 0; i < wordLength.length; i++){
	var word = document.getElementById("word");
	var letter = document.createTextNode(wordLength[i]);
	word.appendChild(letter);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var checkLetters = function(){
	var f = document.guessForm; 
	var b = f.elements["input"]; 
	var character = b.value; // the letter provided by the user
	character = character.toUpperCase();
	for (var i = 0; i < wordToGuess.length; i++){
		if(wordToGuess[i] === character){
			wordLength[i] = character + " ";
			var hit = true;
		}
	b.value = "";
	}
	
	//deletes the guessfield and replaces it with the new one
	var word = document.getElementById("word");
	word.innerHTML=""; 
	printWordLength();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!hit){
		var guessedLetters = document.getElementById("guessedLetters");
		var letter = document.createTextNode(" " + character);
		guessedLetters.appendChild(letter); 
		error++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
	}
	
	//checks if all letters have been found
	var win = true;
	for (var i = 0; i < wordLength.length; i++){
		if(wordLength[i] === "_ "){
			win = false;
		}
	}
	if(win){
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(error === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}

function init(){
	printWordLength();
}

window.onload = init;