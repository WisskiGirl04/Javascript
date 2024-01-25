let names = ["Lucas", "Alice", "Jordan", "Norman", "Horton"];
let chosenName;
let counter = 0;

function beginGame(){
    chosenName = names[(Math.floor(Math.random() * names.length))];
    document.getElementById("clickTheButtonText").style.display = "none";
    document.getElementById("generateButton").style.display = "none";
    document.getElementById("name").style.visibility = "visible";
    document.getElementById("letterInput").style.visibility = "visible";
    document.getElementById("checkButton").style.visibility = "visible";
    document.getElementById("instructions").style.visibility = "visible";
    document.getElementById("incorrectLetters").style.visibility = "visible";
    console.log("Chosen name = " + chosenName);
    console.log(names[(Math.floor(Math.random() * names.length))]);
    <!--"document.getElementById('numberSlot').innerHTML = chosenName;">
    
}
function checkLetter(){
    
}