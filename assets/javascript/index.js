/** 
 * Function to call the local.storage from the browser (if game already played in browser).
 * Then populate appropriate field with highest score.
 */
window.onload = function() {
    silverScore = localStorage.getItem('silverScore');
    localStorage.getItem('silverScore');
    document.getElementById("silvercount").innerText = silverScore;

    goldScore = localStorage.getItem('goldScore');
    localStorage.getItem('goldScore');
    document.getElementById("goldcount").innerText = goldScore;

    iridiumScore = localStorage.getItem('iridiumScore');
    localStorage.getItem('iridiumScore');
    document.getElementById("iridiumcount").innerText = iridiumScore;

    const silverLevel = document.getElementById('silverLevel');
    const goldLevel = document.getElementById('goldLevel');
    const iridiumLevel = document.getElementById('iridiumLevel');
  
    silverLevel.onclick = pickSilverLevel;
    goldLevel.onclick = pickGoldLevel;
    iridiumLevel.onclick = pickIridiumLevel;
};

/**
 * Functions to chose the level diffiulty
 */
function pickSilverLevel() {
    console.log("Silver Level Picked");
    document.getElementById('play').innerHTML = `<a href="silver.html" id="play">PLAY</a>`;
}

function pickGoldLevel() {
    console.log("Gold Level Picked");
    document.getElementById('play').innerHTML = `<a href="gold.html" id="play">PLAY</a>`;
}

function pickIridiumLevel() {
    console.log("Iridium Level Picked");
    document.getElementById('play').innerHTML = `<a href="iridium.html" id="play">PLAY</a>`;
}

