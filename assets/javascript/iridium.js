//All code references in comments have their links in the README.md
//Inital score set
let errors = 0;
let matches = 0;
let points = 0;

//List of iridium Level cards cardlist inspired by Kenny Yip Coding and Code with Ania Kubów
let cardList = [
    "assets/images/dustsprite",
    "assets/images/frostslime",
    "assets/images/ghost",
    "assets/images/greenslime",
    "assets/images/metalhead",
    "assets/images/purpleslime",
    "assets/images/redslime",
    "assets/images/skeleton",
    "assets/images/squidkid",
    "assets/images/tigerslime"
];

//Variables for the Pairs, cards, rows & coloumns and board. The build of the game
let pairSet;
const board = [];
const rows = 4;
const columns = 5;
let firstCard;
let secondCard;
let iridiumScore;

/** 
 * Function to shuffle cards and start the game as soon as window is loaded
 */
window.onload = function() {
    shuffleCards();
    startGame();
    iridiumScore = localStorage.getItem('iridiumScore');
    localStorage.getItem('iridiumScore');
    document.getElementById("iridiumcount").innerText = iridiumScore;
};

/**
 * Function to shuffle the cardList and create pairs by duplicating the array
 */ 
function shuffleCards() { 
    pairSet = cardList.concat(cardList); //get two of each of the cards (create pairs)
    console.log(pairSet);

    //shuffle the cards
    for(let i = 0; i < pairSet.length; i++) {
        const j = Math.floor(Math.random() * pairSet.length); //randomise 
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
    //arrange the board in 4x5 for the iridium expert level
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c= 0; c < columns; c++) {
            const cardImg = pairSet.pop();
            row.push(cardImg); 
            //create the cards images and add them to the board when the window is loaded
            const card = document.createElement("img");
            card.id =r.toString() + "-" + c.toString(); // inspired by coding from Kenny Yip Coding the toString stuff esp
            card.src = cardImg + ".jpg";
            card.classList.add("iridiumcard");
            card.addEventListener("click", selectCard);
            document.getElementById("iridiumboard").append(card);
        }
        board.push(row);
    }
    console.log(board);
    setTimeout(hideCards, 500); //Player can see the cards for 500 milliseconds before the hideCards function is called and replaces the images with the back.jpg. Time out inspired by Code with Ania Kubów
}

/**
 * Function to hide the cards with an image that will be removed once clicked
 */
function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            const card = document.getElementById(r.toString()+ "-" + c.toString());
            card.src = "/assets/images/back.jpg";
        }
    }
}    

/**
 * Function to select two cards if the card value includes "back" (card values need resetting after this is called)
 */
function selectCard() {
    if (this.src.includes("back")) {// function here inspired by coding from Kenny Yip Coding and Code with Ania Kubów the parseInt stuff esp
        if (!firstCard) {
            firstCard = this;
            const coords = firstCard.id.split("-");
            const r = parseInt(coords[0]);
            const c = parseInt(coords[1]);
            firstCard.src = board[r][c] + ".jpg";
        } else if (!secondCard && this != firstCard) { //Make sure the first card clicked and second card clicked aren't the same card
            secondCard = this;
            const coords = secondCard.id.split("-");
            const r = parseInt(coords[0]);
            const c = parseInt(coords[1]);
            secondCard.src = board[r][c] + ".jpg";
            setTimeout(update, 1000); //if cards aren't a match then wait one second and call the update function
        }
    }
}

/**
 * Function to update the point areas and check card matches
 */
function update() {
    // if the cards aren't a match then flip and restart selectCards and adjust scores
    if (firstCard.src != secondCard.src) {
        firstCard.src ="/assets/images/back.jpg";
        secondCard.src ="/assets/images/back.jpg";
        errors += 1;
        points -= 1;
        document.getElementById("errorcount").innerText = errors;
        document.getElementById("pointcount").innerText = points;
    } else if (firstCard.src == secondCard.src) {
        matches += 1;
        points += 2;
        document.getElementById("matchcount").innerText = matches;
        document.getElementById("pointcount").innerText = points;
    }
    //reset the card values to null to get the next pair
    firstCard = null;
    secondCard = null;
    setTimeout(endGame, 500);
}

/**
 * Function to alert the user at the end of the game, set highscore in local storage.
 */
function endGame() {
    if (matches === cardList.length) {
        alert (`You've found all the Cards! Your Score is ${points}. Refresh to play this level again`);
     //Add score to local.storage and replace value if new score is > than old score.
        if (points > iridiumScore) {
            localStorage.setItem('iridiumScore', points);
            iridiumScore = localStorage.getItem('iridiumScore');
            document.getElementById("iridiumcount").innerText = iridiumScore;
        }
    }
}