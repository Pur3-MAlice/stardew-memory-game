
/** 
 * Function to call the local.storage from the browser (if game already played in browser).
 * Then populate appropriate field with highest score.
 */
window.onload = function() {
    silverScore = localStorage.getItem('silverScore')
    localStorage.getItem('silverScore');
    document.getElementById("silvercount").innerText = silverScore;

    goldScore = localStorage.getItem('goldScore')
    localStorage.getItem('goldScore');
    document.getElementById("goldcount").innerText = goldScore;

    iridiumScore = localStorage.getItem('iridiumScore')
    localStorage.getItem('iridiumScore');
    document.getElementById("iridiumcount").innerText = iridiumScore;

    const silverLevel = document.getElementById('silverLevel');
    const goldLevel = document.getElementById('goldLevel');
    const iridiumLevel = document.getElementById('iridiumLevel');
  
    silverLevel.onclick = pickSilverLevel;
    goldLevel.onclick = pickGoldLevel(goldLevel);
    iridiumLevel.onclick = pickIridiumLevel(iridiumLevel);

}

/**
 * Function to chose the level diffiulty
 */

function pickSilverLevel() {
    document.getElementById('play').innerHTML = `<div><a href="silver.html" id="play">PLAY</a></div>`;
}

function pickGoldLevel() {
    document.getElementById('play').innerHTML = `<div><a href="silver.html" id="play">PLAY</a></div>`;
}

function pickIridiumLevel() {
    document.getElementById('play').innerHTML = `<div><a href="silver.html" id="play">PLAY</a></div>`;
}

