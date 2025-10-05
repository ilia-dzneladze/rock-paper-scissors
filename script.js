const choices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    // get random number between 0-2
    let rand = Math.floor((Math.random() * 3))
    // position 0, 1, 2 represent all three choices
    return choices[Math.floor(rand)]
}

function getHumanChoice(){
    // prompt the user for their choice
    const input = prompt("Your Choice: ")
    // put to lower case to standardize and match
    // existing array
    input = input.toLowerCase
    return input
}