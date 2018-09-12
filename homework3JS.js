var wordList = ["arizona cardinals", "atlanta falcons", "baltimore ravens", "buffalo bills", "carolina panthers",
    "chicago bears", "cincinnati bengals", "cleveland browns", "dallas cowboys", "denver broncos",
    "detroit lions", "green bay packers", "houston texans", "indianapolis colts", "jacksonville jaguars", "kansas city chiefs",
    "miami dolphins", "minnesota vikings", "new england patriots", "new orleans saints", "new york giants", "new york jets",
    "oakland raiders", "philadelphia eagles", "pittsburgh steelers", "st. louis rams", "san diego chargers", "san francisco",
    "seattle seahawks", "tampa bay buccaneers", "tennessee titans", "washington redskins"];

var selectedWord = "";
var lettersInWord = [];
var numberOfBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var wordToGuess = '';

var winCount = 0;
var lossCount = 0;
var numberOFGuesses = 9;



function startGame() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInWord = selectedWord.split("");

    //guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numberOfBlanks; i++) {
        blanksAndSuccesses[i].push("");
    }
    // document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
    // document.getElementById("numberOFGuesses").innerHTML = guessesLeft;
    // document.getElementById("winCounter").innerHTML = winCount;
    // document.getElementById("lossCounter").innerHTML = lossCount;


    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numberOfBlanks);
    console.log(blanksAndSuccesses);
};

function checkLetters(letter) {
    var trueOrFalseHolder = false;

    for (var i = 0; i < numberOfBlanks; i++) {
        console.log(selectedWord[i]);
        if (selectedWord[i] == letters) {
            trueOrFalseHolder = true;

            if (lettersInWord) {
                for (var i = 0; i < numberOfBlanks; i++) {
                    if (selectedWord[i] == letter) {
                        blanksAndSuccesses[i] = letter;
                    };
                };
            } else {
                wrongLetters.push(letter)
                numberOFGuesses--;
            };
            console.log(blanksAndSuccesses);
        };
    };
};

function roundComplete() {
    console.log("win count:" + winCount | "loss count:" + lossCount | "Guesses Left:" + numberOFGuesses);

    document.getElementById("numberGuesses").innerHTML = numberOFGuesses;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("");
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++
        alert("You Win Modafuka!");

        document.getElementById(winCounter).innerHTML = winCount;
        startGame();
    } else if (numberOFGuesses = 0) {
        lossCount++
        alert("You lost dumbass!!");

        document.getElementById(lossCounter).innerHTML = lossCount;
        startGame();
    };
};

startGame();


document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keycode).toLowerCase();
    console.log(letterGuessed);
    console.log(event);
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
};