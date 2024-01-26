let names = ["lucas", "alice", "jordan", "norman", "horton"];
let chosenName;
let counter = 0;
let livesLeft = 2;
"let lifeLeft = document.getElementById('lifeLeft').value;"
function beginGame(){
    chosenName = names[(Math.floor(Math.random() * names.length))];
    document.getElementById("clickTheButtonText").style.display = "none";
    document.getElementById("generateButton").style.display = "none";
    document.getElementById("name").style.visibility = "visible";
    let lifeLeft = document.getElementById("lifeLeft").value;
    console.log(lifeLeft);
    lifeLeft = livesLeft;
    console.log(lifeLeft);

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
        alert("Incorrect  :(");
        document.getElementById("lifeLeft").textContent = document.getElementById("lifeLeft").textContent - 1;
        console.log("lives left: " + document.getElementById("lifeLeft").textContent);
        if (document.getElementById("lifeLeft").textContent < 0){
            alert("Oops you're out of lives," + "\n" + "\n" + "Try Again?"); 
            window.location.reload();
        }
    }

}