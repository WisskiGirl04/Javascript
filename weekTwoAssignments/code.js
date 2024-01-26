let names = ["lucas", "alice", "jordan", "norman", "horton"];
let chosenName;
let counter = 0;
let livesLeft = 3;
function beginGame(){
    chosenName = names[(Math.floor(Math.random() * names.length))];
    document.getElementById("clickTheButtonText").style.display = "none";
    document.getElementById("generateButton").style.display = "none";
    document.getElementById("name").style.visibility = "visible";

    document.getElementById("letterInput").style.visibility = "visible";
    document.getElementById("instructions").style.visibility = "visible";
    document.getElementById("checkButton").style.visibility = "visible";
    document.getElementById("incorrectLetters").style.visibility = "visible";
    console.log("Chosen name = " + chosenName);
}
function checkLetter(){
    let userGuess = document.getElementById("letterInput").value.toLowerCase();
    console.log(userGuess);
    if (chosenName.search(userGuess) != -1){
        console.log("letter was found");
        let position = chosenName.search(userGuess);
        console.log("position is " + position)
        let correctChar = document.getElementById("nameChar" + position);
        console.log(document.getElementById("nameChar" + position));
        correctChar.TEXT_NODE.value = " " + userGuess + " ";
    } 
    else{
        console.log(livesLeft);
        livesLeft = livesLeft - 1;
        console.log(livesLeft);
        alert("letter was not found :(" + "\n" + "Trys left: " + livesLeft);
        console.log("lives left: " + livesLeft);
    }

    "alert('try again?');" 
    "window.location.reload();"
}