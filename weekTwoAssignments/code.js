let names = ["Lucas", "Alice", "Jordan", "Norman", "Horton"];
let chosenName;
let counter = 0;
function generateName(){
    chosenName = names[(Math.floor(Math.random() * names.length))];
    document.getElementById("clickTheButtonText").style.display = "none";
    document.getElementById("generateButton").style.display = "none";
    console.log("Chosen name = " + chosenName);
    console.log(names[(Math.floor(Math.random() * names.length))]);
    <!--"document.getElementById('numberSlot').innerHTML = chosenName;">
    
}
function checkLetter(){
    
}