# **Stardew Valley Memory Game**
## **Site Overview**
Stardew Valley Memory Game is a nostalgic card flipping/matching game based on the images and source material of the cult game Stardew Valley. The main aim of the website is to provide a relaxing and entertaining game that users can go up or down in difficulty - the games shouldn't be so difficult that the experience is stressful. The experience of this site should be happy calm and relaxed whilst player are able to keep track of their highest scores. (*Some of the images used in this README.md are slightly out of date and the areas have been since modified - however these changes are minor enough not to warrant new screenshots)
![Responsive Screenshot](/docs/screenshots/responsive-image.jpg)
## Table of Contents:
1. [**Site Overview**](#site-overview)
1. [**Planning**](#planning)
    * [***Audiences***](#audiences)
    * [***Users***](#users)
    * [***Aims***](#aims)
    * [***How To Achieve***](#how-to-achieve)
    * [***Wireframes***](#wireframes)
        * [*Desktop*](#Desktop)
        * [*Mobile*](#Moblile)
    * [***Design***](#design)
        * [*Color Scheme*](#color-scheme)
        * [*Typography*](#typography)
1. [**Universal Features**](#universal-features)
    * [***Header Element***](#header-element)
        * [*Nav Button*](#nav-button)
    * [***Hero Image***](#hero-image)
    * [***Footer***](#footer)
1. [**Page Content Features**](#page-content-features)
    * [***About Content***](#about-page-content)
    * [***Blog Page Content***](#blog-page-content)
    * [***Sign up Page Content***](#fsign-up-page-content)
1. [**Future Improvements**](#future-improvements)
1. [**Credits**](#credits)
    * [***References***](#references)
    * [***Content and Media***](#content-and-media)
## Testing:
1. [***During Development Testing***](#during-development-testing)
    * [**Manual Testing**](#manual-testing)
    * [**Bugs and Fixes**](#bugs-and-fixes)
1. [**Post Development Testing**](#post-development-testing)
    * [**Validators**](#validators)
      * [*HTML*](#html---httpsvalidatorw3orgnu)
      * [*CSS*](#css---httpsjigsaww3orgcss-validator)
    * [**Lighthouse Scores**](#lighthouse-scores)
      * [*Desktop Version:*](#desktop-version)
      * [*Mobile Version*](#mobile-version)
      * [*Lighthouse Score*](#lighthouse-score)
    * [**Accessability**](#accessability)
1. [**Deployment**](#deployment)

## **Planning**
### **Target Audiences:**
* Adults who enjoy playing the sub-genre of video games called “cosy games” but don’t want anything too mentally taxing.
* Fans of the Stardew Valley. Which is a cult cosy game with a large player base.
* Casual Gamers who would like to spend time away from their main game and spend some time on a semi-concentrated task.
* Fans of nostalgic kids cards games like Snap or Uno. 
### **User Stories:**
* I as a user, want to be able to play a cute/nostalgic game with the ability to go to harder levels.
* I as a user, want to be able to track the progress of each round in some way.
* I as a user, want to be able to find explanation of the game rules and how to play.
* As a user, I want to be able to navigate the site.
* As a user, I want to learn more about the inspiration game (Stardew Valley) and find links to more information.
### **Aims:**
* To provide a cute and nostalgic memory game.
* Be accessible to the visually impaired with good contrasts. 
* Provide a “how-to-play” section.
* Link to inspiration source.
* To be an enjoyable distraction to fill the user's time.
### **How to Achieve:**
* The game will be free to use, and no sign up required.
* Site will use imagery from the theme source.
* Ensuring the use of semantic elements, alternate text, and aria labels where appropriate.
* The landing page will be the main menu. Access to the main menu can also be done throughout the game with the Nav button. This menu will contain links back to:
   1. How to Play
   2. About the source Material (Stardew Valley)
   3. Home 
* After each move, the relevant tally will be modified. Overall game play will be scored.
### **Wireframes**
* Below are some screengrabs of the desktop and mobile wireframes made for this project.
* Some notable changes and differences is the addition of a "table" behind the cards, home page and about sections. I did this first of all for better accessibility and contrast, secondly because it highlights the game play area easily and looks cleaner, and last of all because it emulates a classic game table.
* Another change is that I have added a disclaimer at the bottom of each page to ensure that people are aware that all imagery is taken from Stardew Valley, and was not a creation of mine. 

#### *Desktop*
![desktop home page](/docs/wireframes/wireframes-homepage-desktop.jpg)

![desktop about us & how to page](/docs/wireframes/wireframes-about-howto-desktop.jpg)

![desktop gameplay page](/docs/wireframes/wireframes-gameplay-desktop.jpg)

#### *Mobile*
![mobile home page](/docs/wireframes/wireframes-homepage-mobile.jpg)

![mobile about us & how to page](/docs/wireframes/wireframes-about-howto-mobile.jpg)

![mobile gameplay page](/docs/wireframes/wireframes-gameplay-mobile.jpg)

#### *Tablet*
![tablet home page](/docs/wireframes/wireframes-homepage-tablet.jpg)

![tablet about us & how to page](/docs/wireframes/wireframes-about-howto-tablet.jpg)

![tablet gameplay page](/docs/wireframes/wireframes-gameplay-tablet.jpg)

### **Design**
* The basis of the design theme for this game came from the cult classic game of "Stardew Valley" a farming sim that was released in 2014. This game has a huge following and has sold over 10 million copies. The bright and nostalgic pixel art is pleasing to look at and the icons in the game lend themselves to this type of spin-off game. also has lots of groupable icons that can be used as card faces. Plus the bright colours made to create an interesting colour palette with high contrast.
* The pixelated art style lends itself to this type of game as when scaling up or down they do not lose as much definition as regular image.

#### *Color Scheme*
* I used the background image (see below) and added in other complementary colours to create a colour palette and then used . I am planning to only use #fff and #000 for writing to increase accessibility.
* By using the background image to build the colour palette I set up the ability to create a cohesive aesthetic, which is part of a good UX.
* The Visual Identity of this website should be bright, exciting but not stressful. The background colours should only highlight this and the actual cards should be the centre of attention. Hence the colourful but muted tones.

![Contrast](/docs/screenshots/contrast-grid.png)

#### *Typography*
* Whilst doing research into what best fonts to use - I was struck by the idea to use pixelated fonts for the main title. However this would not look as good in smaller fonts and wouldn't be as accessible due to blur. So I used 'DotGothic16', 'Noto Sans Syloti Nagri', and 'VT323'. Two pixelated fonts and one regular clean lined font - all three were taken from Google Fonts and were imported into the style.css file. However the pixel fonts were best suited to the aesthetic of the page, so they were used when larger fonts were appropriate so as to not affect readability.

## **Universal Features**
### **Header Element**
#### *Nav Button*
* I wanted to add a Navigation button at the top-right of my website so the user could easily get from one page to another. This nav button used the traditional three stacked lines which is a colloquial "menu" icon in websites. The icon was taken from fontawesome. 
* The hover feature was employed to do the drop down function and highlight the links the user would be going to once the hover over on the button had been activated.

    ![Nav Button](/docs/screenshots/navbutton.jpg)

    ![Nav Button Hover](/docs/screenshots/navbutton-hover.jpg)

### **Background Image**
* The Background Image for this website is the loading screen of the actual game itself. Screenshot below. All images were taken from the Games Wiki "Stardew Valley Wiki", which states that the content is available under Creative Commons Attribution-NonCommercial-ShareAlike unless otherwise noted. [Creative Commons Link](https://creativecommons.org/licenses/by-nc-sa/3.0/). Due to the fact this will be a none profitable game and is free to use, all images can be freely copied, redistributed, modified and used. 

    ![Background Image](/assets/images/stardew-bg.jpg)

### **Footer**
* For good UX I kept with a traditional website footer of social media links. However to break from the footer "bar" I decided to just use the footer to hold the social media links and imply that the footer was see-through. This clean look show the background image behind and implies that the game board is the interactive part of the site. Having the footer be more subtle lends to an elegant look. This is done throughout the website and a key part of the continuity of the website.
* There is also a copyright - because I liked the addition and because the images were taken from the Stardew Valley game which was created by Concerned Ape themselves, so I felt this needed to be made clear that the images are not my own. 

    ![Footer image](/docs/screenshots/footer.jpg)

    ![Copyright/Disclaimer](/docs/screenshots/disclaimer.jpg)

## **Page Content Features**
### **Home Page content**
* The main home page features that are not universal are the home board and the score board.
* The Home Board is mean to simulate a classic game opening page of "chose your difficulty" and to ensure that you ant start playing without choosing a difficulty setting. It was styled to emulate a classic game playing table with the green velvet, and also to highlight the colourful themes of the inspiration game. The board was also created to ensure that the features of this page were not distracted by the background which I think has been achieved especially with the centring. The colours of the board also tie in nicely with the background colours which was done for pure aesthetic reasons.

    ![Home Board Without Level Chosen](/docs/screenshots/homeboard.jpg)

    ![Home Board With Level Chosen](/docs/screenshots/level-chosen.jpg)

* The Score board is meant to be highlighting the high scores logged by the browser. And place them somewhere obvious. It seemed natural to have them at the top left, which is usually where high score boards tend to be on classic 8-bit games. 

    ![Home Page Score Board](/docs/screenshots/scoreboard.jpg)

### **Game Play Page Content**
* The game play content of the Silver, Gold and Iridium pages is the same. With minor deviations which are detailed below. However due to their similarities I will go over the main shared features here:
    * The Counters. There are three counting boxes on each of the game play pages - Matches, Points and Errors. These boxes are not interactive, however they will change their count/ number value depending on your game play. So far, each matched pair the Matches box goes up by 1, and the Points box goes up by 2. But for each incorrect pair the Errors box will then go up by one and the points will go down by 1. So by the end of your match your Matches should be equal to half of the cards on the board. And your points should be (Matches x 2) - Errors. 

         ![The Counters](/docs/screenshots/counters.jpg)
    * The Highscore Bar. This overall score from above should then appear in the "Highscore Bar". This is another Feature that each of the game play pages have. This will map the highest score you have reached on that level so far (This also then feeds the score back to the Home Page's Score Board). And the number will only change if you then beat that initial score. This is browser dependant as it uses local.storage.

        ![The Highscore Bar](/docs/screenshots/highscore-bar.jpg)
    * The Play Board. Another feature of all the game play pages is the game board itself. The same colour scheme and similar width x heights maintains site consistency and UX. Below is what the Silver Page game board looks like (the others are documented below whilst showing other features.)

        ![The Play Board](/docs/screenshots/highscore-silver.jpg)
    * The Non-Match Flip. The nature of a matching card game is memory. So, if you do get a match wrong then you will only get a small chance to see both cards before they revert back to their original state (the purple stars as shown above). The feature here is that for each incorrect pair on all game play pages the player will get 1000 milliseconds to look and memorise card positions. Then this will also effect the errors and points count as explained above.

        ![The Non-Match Flip](/docs/screenshots/unmatched-pair.jpg)
    * The Match. When the players get a match, we want the cards to stay 'turned' as it were. Below you can see three pairs from the Iridium Level matched and staying turned over. This is the same for all game play pages - and this will change The Counters as explained above. 

        ![The Match Pair](/docs/screenshots/matched-pairs.jpg)
    * The Card Glimpse. As pointed out when discussing the Non-Matches, this is a memory game first and foremost. So, we do need to give a bit of a hit where to start when the page loads. Therefore I have implemented a feature which allows the user to see all off the cards for 500 milliseconds before the hideCards function is called and turns the img into the back img. Fun Fact! The below screenshot was actually taken during this 500 milliseconds and not once I had completed the board, which would have been a better idea, but I did get the picture.

        ![The Card Glimpse](/docs/screenshots/card-glimpse.jpg)
    * The Score Alert. Once you have finished the level you will get an alert with your score as shown below. This happens with all game play page.

        ![The Score Alert](/docs/screenshots/score-alert.jpg)

    * The Shake. Cards not matched to a little animation of a shake.   

### **Gold Page Content**
* The one feature that differs on the Gold Page is that the universal features (on all pages bar the home page) of the Left Button and Right Button go to the game play levels "above" and "below" it in difficulty respectively. So Next Level (Right Button) goes to Iridium and Previous Level (Left Button) goes to Silver.

    ![The Prev Button](/docs/screenshots/prev-level.jpg) ![The Next Button](/docs/screenshots/next-level.jpg)

### **Iridium Page Content**
* The Left and Right button are as such on the Iridium Page and each goes to the respective page .

    ![The Prev Button](/docs/screenshots/prev-level.jpg) ![The Play Again Button](/docs/screenshots/playagain-button.jpg) 

### **Silver Page Content**
* The Left and Right button are as such on the Silver Page and each goes to the respective page.

    ![The Home Button](/docs/screenshots/home-button.jpg) ![The Next Button](/docs/screenshots/next-level.jpg)

### **How To Play Content**
* The Left and Right button are as such on the How To Play Page and each goes to the respective page.

    ![The Home Button](/docs/screenshots/home-button.jpg) ![The Stardew Button](/docs/screenshots/stardew-button.jpg)

### **About Stardew Valley Content**    
* The Left and Right button are as such on the About Stardew Page and each goes to the respective page.

    ![The Home Button](/docs/screenshots/home-button.jpg) ![The How To Button](/docs/screenshots/how-to-button.jpg)

## **Future Improvements**
* Add images to the level choice buttons for a bit of flair.
* Add sounds effects for when you chose card, get a match, new high score, get a non-match, finish round, start game.
* Update the Nav Bar to include a tab at the button of the list to take you back to the page you came from.
* Add a timer.
* Add how to play button to the home screen below the play button so this is easily accessible to the user and they don't have to actively look for it.
* Make repetitive code such as the "document.getElementById("pointcount").innerText = points;" into a function for future proofing and cleaner better coding practices. 
* Add another level: Bronze Level
* Make the Iridium Level harder after each attempt by decreasing the glimpse feature (hideCards) to 300 milliseconds from 500 milliseconds after first round. This could also be applied to the other levels.
* Add in Keyboard functions to make the game playable with the Arrow keys/WASD keys and the Enter key.
## **Credits**
### **References**
* Whilst I did try to deviate as much as possible, this project was influenced by the research I did before starting this project.
* Before starting this project, I did research JavaScript build of memory card games, for both code inspiration and direction. I can say that my research did influence how I built the project initially - however strong deviations were taken after my research and the initial build, and some code was taken and modified for my project especially when it came to parseInt function and toString. This code was taken from and mashed with/amalgamated to fit my purpose from Kenny Yip Coding and Code with Ania Kubow. These are from their YouTube follow through tutorials where they actively encourage people to follow along. (Notable mentions: [Code with Ania Kubów](https://www.youtube.com/@AniaKuboww), [Kenny Yip Coding](https://www.youtube.com/@KennyYipCoding), [CodingNepal](https://www.youtube.com/@CodingNepal), [Coding Artist](https://www.youtube.com/@CodingArtist) these were the most helpful and influential, but not the only, videos I watched during my research phase.). Also took some cool inspo from this Codepen for my button shadows https://codepen.io/seme332/pen/reJOwo?editors=1100.
* I did rely on Stack Overflow, W3schools, CSS-TRICKS and MDN web docs for general references and problem solving throughout the project.

### **Content and Media**
* All images were taken from [Stardew Valley Wiki](https://stardewvalleywiki.com/Stardew_Valley_Wiki) and are used under the Creative Commons Attribution. This means that this website cannot use any of this imagery for profit and therefore this site and the game are completely free. All art and credit belongs to ConcernedApe (Eric Barone). However I modify the images for fit into card like shapes. 
* The favicon image is the same as the card.back as was turned into a favicon by this website: [Favicon Generator](https://favicon.io/favicon-converter/0).
* Google fonts was used for all the font for this project. DotGothic16, Noto Sans Syloti Nagri and VT323. [Google Fonts](https://fonts.google.com/)
* Font Awesome was used for the GitHub, Codepen and the Nav Bar (stacked lines icon). [Font Awesome](https://fontawesome.com/)

## **Deployment**
* I deployed the page on GitHub pages via the following procedure: -
* From the project's repository, go to the Settings tab.
* From the left-hand menu, select the Pages tab.
* Under the Source section, select the Main branch from the drop-down menu and click Save.
* [JAVASCRIPT GAME]()

## **During Development Testing**
### ***Manual Testing:***
During the development process, I was manually testing in the following ways:-
* Manually testing each element for appearance and responsiveness via a simulated live server using an extension in VSCode.
    * Detailed below is the method in which I test the site for responsiveness and to make sure that it did what was intended. This test was focused on console.log errors and external links going into a new tab.
        1. Starting on the home page and opening the dev tools to get to the console.log. I ensured that this was a fresh simulated live server. So, to ensure that past testing and local.storage would not interfere with this round of manual testing. 
        1. Home Page External Links: To make sure all external links on this page were working I hovered over and clicked the "GitHub" "Codepen" & the Disclaimer Icon fixed to the bottom of the screen. The "GitHub" & "Codepen" were to turn black once hovered over - and they both did. the cursor also turned into a pointer for all three links as intended. Also, all three external links opened out into a new tab as intended.
        1. Home Page Internal Links: On all pages there is a Nav button. When hovered over it should change to a lighter shade of green and three dropdown tabs should pop up underneath. The hover function once deployed on the tabs beneath should then change colour to match the interacted with Nav button. Clicking on the tabs should take you to the "Home", "What is Stardew Valley?" & "How to Play" respectively. These should not go into new tabs, and they do not.
        1. Home Page Initial Console.log: Without interacting with anything the console appears blank. 
        1. Home Page Score Board: The score board will be blank if using a fresh browser or a new live extension. 
        1. Home Page Level Picking: To choose the level the user is visually guided by both the green playing board and the black bar above the green board saying, "Chose Your Level:". On the green board there are three red buttons and one blue (what is a button but cannot yet be clicked). To choose the level the users selects either the "Silver", "Gold" or "Iridium" button. Once a level difficulty has been chose then the blue button can be clicked. The user can tell this because once a level has been chosen, "PLAY" appears in white lettering. The JavaScript meanwhile will console log "(Silver/Gold/Iridium) Level Picked" based on the level chosen to show that the code links up correctly. This also then changes the inner.HTML of the play button from blank to the appropriate link to the game play page. One small error/bug with this is that you can log multiple clicks of each level before you settle on which level to pick. However, this did not affect the site's function, the game play nor did it bring up any console errors. However, fixing this could be a future improvement.
        1. Silver Page: To get to the silver level we initially click on the silver red button on the home page, which then turns a darker shade of red to imply that it has been chosen, and then once the white "play" text in the blue button appears we can play this level. Doing this works as expected and takes us to the Silver page with no console errors at the initialisation. 
        1. Silver Page External Links: Like for the Home Page link testing to make sure all external links on this page were working I hovered over and clicked the "GitHub" "Codepen" & the Disclaimer Icon fixed to the bottom of the screen. The "GitHub" & "Codepen" were to turn black once hovered over - and they both did. The cursor also turned into a pointer for all three links as intended. Also, all three external links opened out into a new tab as intended.
        1. Silver Page Internal Links: Like for the Home Page link testing on the all pages there is a Nav button. When hovered over it should change to a lighter shade of green and three dropdown tabs should pop up underneath. The hover function once deployed on the tabs beneath should then change colour to match the interacted with Nav button. Clicking on the tabs should take you to the "Home", "What is Stardew Valley?" & "How to Play" respectively. These should not go into new tabs, and they do not. Also for all none Home Pages, there are two other buttons, the left and right buttons. On the Silver page the left button takes you back to the Home page and the right button takes you to the next level, in this case "gold.html". Bother of them act as expected. Take you to the page once clicked, the hover over function ensures that the shadow under the button has more colour to it and looks brighter as if the button has been lit up the colour of the button also gets bright, again implying it has been lit up. At this point there have been no console errors.
        1. Silver Page Game Play Expectations: The game play for silver has a few expectations. One the loading of the screen we are to get 500 milliseconds of seeing where the cards are before they are hidden, that when we click a card the back is replaced by the image, that when we try to match the first card with another we either get a match or we don’t. If we don't get a match the expectation is that the cards will then turn back over and we will have an error calculated and this will impact our points. However if we do get a match we want those cards to stay flipped over and we want our matches to be calculated and our points score to reflect this match. Also once the game is finished we want to be notified in some way of the game finishing and if our score is higher than our last (which it should be at this point as the score bar at the top shouldn't have a number) then this will be reflected in the "Highest Score Silver: X" bar. After game play we can try again and all the above still applies, but if our end score is lower than our last then the "Highest Score Silver: X" bar. shouldn't change to the new score number, and if our new end score is higher we DO want this reflected in the "Highest Score Silver: X" bar and the local.storage. Also after each game play we want to be able to see our high score in that level reflected on the score board on the home page. These are the Game play expectations of the Silver Page
        1. Silver Page Test: Refreshed page, got 500 millisecond of cards then the backs replaced the images. Clicked first card and it showed the image. Clicked second and not a match. Cards turned over after a short time. Errors count went up by one and Points count -1. clicked new card and the second card. Match, cards stayed on screen turned over, matches went up by 1 and points +2. Finished level with Matches:4, Points: 5 and Errors: 3. highest score now shows "5". No console errors throughout. Went to Home page silver score reflected in the score board. Re-did level to get worse score, all the same tactics as above. Matches: 4 Points: 2 and Errors: 6. Highest score bar not changed, no console errors. Homepage score also unchanged. New round to improve on score Matches: 4 Points: 7 and Errors: 1. Highest score bar changed to 7 as did home page score board. No console errors.
        11. Gold and Iridium Pages:
            1. I did all testing from the Silver Pages on the Gold and Iridium in the same way. All results the same (bar the actual scores, but the outcomes of the testing remained unchanged). 
            1. All external links in new tabs, all internal links work. All hover functions work as expected like above.
            1. Left button link on Gold & Iridium Page is "Previous Level" and takes you to the easier level. Right button on Iridium Page is "Play Again" and refreshes the page.
            1. There were no console errors throughout this testing.
* Asked a Data Scientist friend to review the pages and the games responsiveness by following the above procedure often throughout the development of the game. They did not offer any help on the coding nor did they provide feedback other than "this link/button/card" is broken. They did however make a good soundboard for me to talk at while talking through difficult code issues. Below is the spreadsheet I used for user testing.
* (new message: one "uncaught TypeError Cannot read properties of undefined (reading 'classList')". This does not affect the way the Javascript is working and it isn't a console error so to speak. But i did try to fix this, but nothing seemed to work. Very odd as the issue is classList - but this is a JavaScript function/word and not a variable.)
![Home Testing](/docs/screenshots/home-testing.jpg)
![Gameplay Testing](/docs/screenshots/gameplay-testing.jpg)
![About Stardew Testing](/docs/screenshots/aboutstardew-testing.jpg)
![How To Play Testing](/docs/screenshots/howto-testing.jpg)

* During testing, I used three browsers to ensure cross-compatibility. The browsers used were:
  1. Chrome
  2. Firefox  
  4. Edge
* I also consistently used the devtools to simulate different screen sizes/devices from 320px up to 2200px in width. 
* In addition to this, I used the dev tools to simulate different products such as the iPhone XR, iPhone 12 Pro, Samsung Galaxy S8+, iPad Air, iPad Mini, Surface Pro 7 and Nest Hub.
* I also got friends and my partner to test the site on their own devices - Samsung, Dell Laptops, Self-built desktops and Apple products. 

### ***Bugs and Fixes:***
Below is a list of bugs I found during the development process. A lot of the bugs and fixes where minor enough that temporary editing in the devtools allowed me to find a quick and simple solutions to most of the bugs almost instantly. But here are a few that stumped me enough to write them down.
1. **Intended Outcome** - For the Nav button to show up in the top right of the screen and dropdown to show the other links to pages,
    * ***Issue Found:*** 
        * The hover over function at first did not work, and then also floated over the top of the button instead of dropping down below the nav button,
    * ***Solution Used:*** 
        * Changing the positioning and then the using the float function then got the button to stay in the top right corner. Then I also changed the contents CSS styling to display none and position: absolute instead of relative. This fixed the issue.
 1. **Intended Outcome** - Have local storage of the points at the end of the game.
    * ***Issue Found:*** 
        * Trying to create a local storage function that would hold the value of the points at the end of the game. It did not work for a long time turns out I was not using the set and get function correctly and I was over complicating the code.
    * ***Solution Used:*** 
        * Removed all the code I had just created in my attempts and did a simple set and get with the local storage and it worked!
 1. **Intended Outcome** - Have local storage pass the score into the Highest Score Bar and stay the user’s for the browser
    * ***Issue Found:*** 
        * The score, once in local storage wasn't passing this information into the Highest Score Bar. Whilst I had gotten the HTML to do this. Once I refreshed the page the score would reset but obviously the local storage did not. This meant that unlike my intentions the local storage wasn't passing this info through, it was coming from my temporary fix.
    * ***Solution Used:*** 
        * Realised that the local storage was only being called in the endGame function and then the value in the Highest Score bar was being assigned before it was called. So I moved this to the window.onload to it would be pulled out as soon as the window loaded.     
 1. **Intended Outcome** - Have the Highest score Bar only update if the score was larger than the last score
    * ***Issue Found:*** 
        * The Highest bar now actually pulling through the score from the local storage was being replaced every time you completed that level's game. Not only if this was higher than the initial score.
    * ***Solution Used:*** 
        * Added if statement to only reassign the local storage of 'silverScore" if the points > silverScore. So only if the current points were larger than the initial silverScore value then could that value be changed. 
 1. **Intended Outcome** - When second card is clicked that it return the actual card underneath not one that === the first card clicked
    * ***Issue Found:*** 
        * When clicking on the cards the second card clicked would always be the same image underneath. Even if I saw this was not actually the case. The code was telling the image to change. 
    * ***Solution Used:*** 
        * Add a firstCard and secondCard variable and populate the selectCard function and make sure that in the code secondCard wasn't === firstCard but to just check for that.
 1. **Intended Outcome** - To be able to click more than one pair of cards 
    * ***Issue Found:*** 
        * Couldn't chose more than one pair at all.
    * ***Solution Used:*** 
        * After the selectCard function had run through and called the update function. It needed to set the firstCard and secondCard value to null.
1. **Intended Outcome** - Have the home page have a level selector that then would like you click play instead of just automatically take you there.
    * ***Issue Found:*** 
        * For ease when doing the initial build of the project I simply added links to the home board that would take you to the appropriate level. But I wanted this to be a choice and then for you to click play and it take you to the choice. This did not work despite my many attempts. 
    * ***Solution Used:*** 
        * Turned the links instead into radio buttons and then styled them! Added some JavaScript that mean that if a button with a certain id was clicked then the div with the id "play" would have its inner HTML populated with an appropriate a href link and that could be clicked. I then styled this so they all looked like buttons and would react when the click occurs with CSS.
1. **Intended Outcome** - Create columns/ rows and have indexes where this will go.
   * ***Issue Found:*** 
        * This issue didn't turn up on screen as the board hadn't yet been populated with the cards nor had the cards really been built at this point Nor could we visually see the columns or rows at any point. However this error was caught in the console. If this hadn't have been solved then any addition underneath this error would have not work the way it was intended to.
    * ***Solution Used:*** 
        * It turned out just to be a typo on my part not using correct camelCase     
 1. **Intended Outcome** - To randomise the position of the cards on the board
    * ***Issue Found:*** 
        * The card set was not being randomised - caught this in the console. But this would have left the array and then therefore the board to just be a repetition of the array before it gets concatenated. 
    * ***Solution Used:*** 
        * A typo in Math.random and Math.floor, easily fixed. But this could've have made the card game really boring and repetitive.
 1. **Intended Outcome** - Have the card images actually appear
    * ***Issue Found:*** 
        * The cards were not showing up at all despite the code looking like it should be pulling through at least something. Turns out the file path was wrong, I had just typed the name of the image instead of the correct way to pull the file through.
    * ***Solution Used:*** 
        * Fixed the file path from "poppy" to "/assets/css/images/poppy" for the JS to then add the .jpg to the end and then for this to pull through.
 1. **Intended Outcome** - Have the card images fix to the board in their columns and at the right size
    * ***Issue Found:*** 
        * Despite assigning the cards to a column and a row position [0 - 1]/[3 - 2] they weren't affixing properly to the board and they were appearing either way over sized or spilling over.
    * ***Solution Used:*** 
        * The solution here was to actually use the .card class I had created and use it properly to assign the cards height and widths. Also, to ensure that these heights and widths were appropriate for the board div - and change that when needed.

## **Post Development Testing**
### **Validators**
#### ***HTML*** - https://validator.w3.org/nu/  
* ***Issue Found:***
    * A href cannot be descendant of button
* ***Solution Used:***
    *  Changed button to div and adapted css styling to fit
* ***Issue Found:***
    * alt attribute cannot be used in a href
* ***Solution Used:***
    *  Removed alts from a href's

![HTML validator](/docs/screenshots/html-validator.jpg)
#### ***CSS*** - https://jigsaw.w3.org/css-validator/
* Code passes through with no issues.

![CSS badge](/docs/screenshots/css-validator.jpg)

#### ***JavaScript*** - https://jshint.com/
* Code passes through only stating that console and alert are undefined variables. Despite that these are not variables and that these words have functions inside JavaScript.
### **Lighthouse Scores**
### **Test conditions**
* I performed the lighthouse tests in incognito mode. I ran the tests for both mobile and desktop.
#### ***Desktop Version:***
* Here is the Desktop Lighthouse score
![Lighthouse Desktop Score](/docs/screenshots/desktop-homepage-lighthouse.jpg)

#### ***Mobile Version:***
* Here is the Desktop Lighthouse score
![Lighthouse Mobile  Score](/docs/screenshots/mobile-homepage-lighthouse.jpg) 

### **Accessability**
* The main accessibility issue with this site is that it is a visual memory game. Despite the contrast being high on purpose for the visually impaired. The images pulled through by JavaScript cannot have alt attributes due to the nature of how JavaScript pulls them through. This did cause an issue with the lighthouse scores. However, because of the nature of the game, this site would probably not be attended to by people with extra visual needs - and if there were some how did visit who were visually impaired rather than blind, the images used are high contrast enough for them to see differences, but not enough for the game to be easy (as some images were chosen for their colour similarity).
* It is unfortunate that I could not think of a way around this issue. In future I would tinker with this to create a work around and make this site fully accessible to the severely visually impaired.
* In addition to other tests, I was also inspired to use [WAVE - Web accessibility evaluation tool](https://wave.webaim.org/) by dnlbowers to check my pages for accessibility. Some issues errors were returned - I was especially concerned with the contrast of my nav button and this was flagged so I changed it and increased the font to mitigate this. It did also flag some issues that were purposeful, like the blue button and the nav button being empty - these are both empty on purpose and they are meant to be as such. These issues are also fixed by the user interaction.
* There was also an issue with the Icons I used to store links out to my GitHub and Codepen - but this is a standardised use of social media images to link out to sites. So, this did not concern me.