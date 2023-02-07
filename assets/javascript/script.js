let errors = 0;
let matches = 0;
let points = 0;

/*List of Expert cards*/
let cardList = [
    "dustsprite",
    "frostslime",
    "ghost",
    "greenslime",
    "metalhead",
    "purpleslime",
    "redslime",
    "skeleton",
    "squidkid",
    "tigerslime"
];

let pairSet;
let board = [];
let rows = 4;
let columns = 5;

/** 
 * Function to shuffle cards and start the game as soon as window is loaded
 */
window.onload = function() {
    shuffleCards();
    startGame();
  }

/**
 * Function to shuffle the cardList
 */ 
function shuffleCards() { 
    pairSet = cardList.concat(cardList); //get two of each of the cards (create pairs)
    console.log(pairSet);
}   //shuffle the cards


/**
 * Function to start game play
 */
function startGame() {
    //arrange the board in 4 x5 for the iridium expert level
    for (let r =0; r < rows; r++)

}    

/**
 * Function to hide the cards with an image
 */
function hideCards() {

}    

/**
 * Function to select the cards
 */
function selectCard() {

}

/**
 * Function to update the point areas
 */
function update() {

}