

let userChoice;
let compChoice;




function computer_choose() {
    let numChoice = Math.floor(Math.random() * 3);
    console.log(numChoice);
    if (numChoice == 0) {
        return "Paper";
    } else if(numChoice == 1) {
        return "Scissors";
    } else {
        return "Rock"
    }
}


function user_choose(){
    let valid_choice = false;
    let temp_choice;
    while(!valid_choice){
        temp_choice = prompt("Please enter: Rock, Paper, or Scissors");
        if(temp_choice == "Paper" || temp_choice == "Scissors" || temp_choice == "Rock") {
            valid_choice = true;
            return 
        } else {
            continue;
        }
    }
}


const start_btn = document.querySelector("#start-btn");
if (start_btn) {
    start_btn.addEventListener("click", () => {
        window.location.href = "game.html";
    });
}

const rock_choice = document.querySelector("#rock");
if(rock_choice){
    rock_choice.addEventListener("click", () => {
        alert("rock");
    });
}
const paper_choice = document.querySelector("#paper");
if(paper_choice){
    paper_choice.addEventListener("click", () => {
        alert("paper");
    });
}
const scissors_choice = document.querySelector("#scissors");
if(scissors_choice){
    scissors_choice.addEventListener("click", () => {
        alert("scissors");
    });
}



