let names = ["lucas", "alice", "jordan", "norman", "horton"];
let chosenName;
let counter = 0;

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
    let userGuess = document.getElementById("letterInput").value.toLowerCase;
    let test1 = document.getElementById("letterInput").value;
    console.log(test1);
    console.log(document.getElementById("letterInput").value.toLowerCase);
    console.log(document.getElementById("letterInput").ariaValueText);
    console.log(userGuess);
    console.log(userGuess.toLowerCase);
    if (chosenName.search(test1) == true){
        console.log("letter was found");
    } 
    else{
        console.log("letter was not found :(");
    }

    "alert('try again?');" 
    "window.location.reload();"
}