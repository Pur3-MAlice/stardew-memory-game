
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

    levelPick();
}

/** 
 * Function to select the level diffiulty 
 */
function levelPick() {
    // When user clicks on sliver/gold/iridium level and THEN clicks on the play then they go to that level of difficulty

    //could use event listener for click that then populates the innerHtml of play and puts in the <a href>
}