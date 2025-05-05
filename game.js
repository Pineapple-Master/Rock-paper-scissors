

let userChoice;
let compChoice;

function computer_choose() {
    let numChoice = Math.floor(Math.random() * 3);
    if (numChoice == 0) {
        return "Paper";
    } else if(numCHoice == 1) {
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
        if(temp_choice == "Paper", temp_choice == "Scissors", temp_choice == "Rock") {
            valid_choice = true;
            return 
        } else {
            continue;
        }
    }
}



