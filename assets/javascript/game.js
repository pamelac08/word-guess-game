




// computer's random choice of word
var computerChoices = [
    "thruster",
    "clean",
    "squat",
    "barbell",
    "amrap",
    "emom",
    "burpee",
    "chipper",
    "kipping",
    "pistol",
    "tabata",
    "wallball",
    "pullup",
    "pushup",
    "mattfrasier",
    "tiaclairtoomey",
    "doubleunder",
    "murphey",
    "snatch",
    "deadlift",
    "fightgonebad",
    "kettlebell",

];

var wins=0;
var losses=0;
var guesses=12;

// Creating an empty array for guessed letters
var computerPickArray = [];
var userGuessArray = [];

// Create variables that hold references to the places in the HTML where we want to display things.
//edit for this file    
    var introDirectionsText = document.getElementById("introDirections-text");
    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var displayText = document.getElementById("display-text");
    var guessesleftText = document.getElementById("guessesleft-text");
    var guessedlettersText = document.getElementById("guessedletters-text");


    introDirectionsText.textContent = "Press any key to get started!";
    directionsText.textContent = "Guess the word!";
    winsText.textContent = "wins: " + wins;
    guessesleftText.textContent = "guesses left: " + guesses;
    guessedlettersText.textContent = "Your guesses so far:" + userGuessArray;


function reset () {
    guesses=12;
    userGuessArray = [];
    computerPickArray = [];
    computerSubArray = [];
    wordGuess();
}


//"type any key to start", when a key is pressed, runs wordGuess to pick a word
document.addEventListener("keyup", wordGuess()); 


function wordGuess() {
// Randomly chooses a choice from the options array. This is the Computer's guess.
computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerPick);

 

        // turn each letter of the word into separate variables of the array
        var computerPickArray = [...computerPick];
            console.log(computerPickArray);

            // an array for adding underscores for each letter of computerPickArray
            var computerSubArray = [];

            // to add enough variables to SubArray to match the length of computerpickarray
            for (i=0; i<computerPickArray.length; i++) {
                j = "_ "
                computerSubArray.push(j); 
            }
            console.log(computerSubArray);
            displayText.textContent = "Current Word: " + computerSubArray.join("");




// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // var viableChoice = /[a-z]/gi;
    // if (!viableChoice.test(userGuess)) {
    // alert("please enter a letter");
    // }
    // else {
    console.log(userGuess);
    // }

compareGuesstoWord(userGuess);

function compareGuesstoWord(x) {
    var checkLetter = false;
    //if the generated computerpick is equal to the letter entered... then variable is true
    for (var i = 0; i < computerPickArray.length; i++) {
        if (computerPickArray[i] == x) {
            checkLetter = true;
        }
    }
    //if (false)
    if (checkLetter) {
        //check each letter to see if it matches word
        for (var i = 0; i < computerPickArray.length; i++) {

            if (computerPick[i] == x || userGuessArray == x) {
                computerSubArray[i] = x;
                displayText.textContent = "Current Word: " + computerSubArray.join("");
            }
            // //if an input has already been guessed and is not correct - do nothing
            // if (computerSubArray.includes(x) === true) {
                
            // }



        }
    }
    

    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
 
    else {
        userGuessArray.push(userGuess);
        guesses--;
        
    }
    console.log(computerSubArray);

    


    if  (guesses==0) {
            losses++;
            reset();
            alert("Click ok to restart!");
        }  

if (computerPickArray.toString() == computerSubArray.toString()) {
        wins++;
        reset()

}
}



 

// Hide the directions
introDirectionsText.textContent = " ";

   


// Display the user wins/losses/guesses.
directionsText.textContent = "Guess the word!";
winsText.textContent = "wins: " + wins;
guessesleftText.textContent = "guesses left: " + guesses;
guessedlettersText.textContent = "Your guesses so far:" + userGuessArray;

}
}
