const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    // get random number between 0-2
    let rand = Math.floor((Math.random() * 3))
    // position 0, 1, 2 represent all three choices
    return choices[Math.floor(rand)]
}

function getHumanChoice(){
    // prompt the user for their choice
    let input = prompt("Your Choice: ")
    // put to lower case to standardize and match
    // existing array
    input = input.toLowerCase()
    return input
}

let humanScore = 0, computerScore = 0

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("Tie!");
    } else if (
        (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    } else {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore++
    }
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice())
    }
}

playGame()

console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
if(humanScore > computerScore){
    console.log("Human Wins!!!")
} else if (humanScore = computerScore){
    console.log("Tie!")
} else{
    console.log("Computer Wins!")
}