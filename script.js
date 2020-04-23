const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");
const endScreen = document.getElementById("end-screen");
const header = document.getElementById("header");

startButton.addEventListener("click", startQ); //adds event listener that calls startQ and setInterval when clicked.


function startQ(){ //starts the quiz by revealing the quiz-box
    startScreen.classList.add("hide");
    endScreen.classList.remove("hide");

}

restartButton.addEventListener("click", endQ);

function endQ(){
    startScreen.classList.remove("hide")
    endScreen.classList.add("hide");
}
