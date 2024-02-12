// Array of names to use as the chosen name for the game
let names = ["lucas", "alice", "jordan", "logan", "ariel"];
let chosenName;
// Variable to hold the number of letters in the chosen name
let numOfLetters;
// Counter for how many correct letters the user has entered
let counter = 0;
// This function runs when the begin game button is pressed
function beginGame(){
    // Chose a random name
    chosenName = names[(Math.floor(Math.random() * names.length))];
    // Set the start screen lines display to none
    // To get rid of it and set up the game screen
    document.getElementById("clickTheButtonText").style.display = "none";
    document.getElementById("generateButton").style.display = "none";
    document.getElementById("name").style.visibility = "visible";
    // Set the visiiblity of the game screen lines to visible
    document.getElementById("letterInput").style.visibility = "visible";
    document.getElementById("instructions").style.visibility = "visible";
    document.getElementById("checkButton").style.visibility = "visible";
    document.getElementById("lives").style.visibility = "visible";
    document.getElementById("incorrectLetters").style.visibility = "visible";
    console.log("Chosen name = " + chosenName);
    // Set numOfLetters variable to the length of the chosen name
    numOfLetters = chosenName.length;
    console.log(numOfLetters);
}
// Function to check if the user's input is correnct or incorrect
function checkLetter(){
    // Grab the user input from the screen and make it lower case
    let userGuess = document.getElementById("letterInput").value.toLowerCase();
    console.log(userGuess);
    // If the user's input is a letter in the chosen name
    if (chosenName.search(userGuess) != -1){
        console.log("letter was found");
        // Get the position of the letter in the chosen name
        let position = chosenName.search(userGuess);
        console.log("position is " + position)
        // Print the correct letter in the correct letters table
        let correctChar = document.getElementById("nameChar" + position);
        console.log(correctChar.innerHTML);
        correctChar.innerHTML = " " + userGuess + " ";
        // Increment the counter variable
        counter++;
        // If the user has gotten all of the correct letters and guessed the name
        if (counter == numOfLetters){
            // Alert them that they won and when they hit ok, reload the screen to reset the game
            alert("WOW!! You guessed the name!" + "\n" + "Their name was '" + chosenName + "'!" + "\n" + "\n" + "Try Again?");
            window.location.reload();
        }
    } 
    // If the user's input is not a letter in the chosen name
    else{
        // Alert them that they are incorrect
        alert("Incorrect  :(");
        // Subtract 1 from their amount of tries or 'Lives'
        document.getElementById("lifeLeft").innerHTML = document.getElementById("lifeLeft").innerHTML - 1;
        console.log("lives left: " + document.getElementById("lifeLeft").innerHTML);
        // If they are all out of lives
        if (document.getElementById("lifeLeft").innerHTML < 0){
            // Alert them that they have ran out of lives and when they hit ok, reload the screen to restart the game
            alert("Oops you're out of lives.." + "\n" + "\n" + "Try Again?"); 
            window.location.reload();
        }
        // Print the user's incorrect guess in the incorrect letters table
        let incorrectChar = document.getElementById(userGuess);
        console.log(incorrectChar.innerHTML);
        incorrectChar.innerHTML = " " + userGuess + " ";
    }

}