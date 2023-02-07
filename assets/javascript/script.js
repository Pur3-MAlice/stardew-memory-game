let errors = 0;
let matches = 0;
let points = 0;

/*List of Expert cards*/
let cardList = [
    "/assets/images/dustsprite",
    "/assets/images/frostslime",
    "/assets/images/ghost",
    "/assets/images/greenslime",
    "/assets/images/metalhead",
    "/assets/images/purpleslime",
    "/assets/images/redslime",
    "/assets/images/skeleton",
    "/assets/images/squidkid",
    "/assets/images/tigerslime"
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
 * Function to shuffle the cardList and create pairs by duplicating the array
 */ 
function shuffleCards() { 
    pairSet = cardList.concat(cardList); //get two of each of the cards (create pairs)
    console.log(pairSet);

    //shuffle the cards
    for(let i = 0; i < pairSet.length; i++) {
        let j = Math.floor(Math.random() * pairSet.length); //randomise 
        let temp = pairSet[i];
        pairSet[i] = pairSet[j];
        pairSet[j] = temp;
    }
    console.log(pairSet);
}   


/**
 * Function to start game play
 */
function startGame() {
    //arrange the board in 4 x5 for the iridium expert level
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c= 0; c < columns; c++) {
            let cardImg = pairSet.pop();
            row.push(cardImg); 
            let card = document.createElement("img");
            card.id =r.toString() + "-" + c.toString();
            card.src = cardImg + ".jpg"
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);
        }
    }

}    

/**
 * Function to hide the cards with an image
 */
function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString()+ "-" + c.toString());
            card.src = "/assets/images/back.jpg"
        }
    }
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