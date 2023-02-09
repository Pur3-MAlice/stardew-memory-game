# **JAVASCRIPT PROJECT**
## **Site Overview**
SITE OVERVIEW
![Responsive Screenshot]
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
    * [***Content***](#content)
    * [***Media***](#media)
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
* Adults who enjoy playing the sub genre of video games called “cosy games” but don’t want anything too mentally taxing.
* Fans of the Stardew Valley. Which Is A Cult Cosy Game With A Large Player Base.
* Casual Gamers who would like to spend time away from their main game and spend some time on a semi-concentrated task.
* Fans of nostalgic kids cards games like Snap or Uno. 
### **User Stories:**
* I as a user, want to be able to play a cute/nosalgic game with the ability to go to harder levels.
* I as a user, want to be able to track the progress of each round in some way.
* I as a user, want to be able to find explanation of the game rules and how to play.
* As a user, I want to be able to navigate my way to resources.
* As a user, I want to learn more about the inspiration game (Stardew Valley) and possibly find links to more infomation.
### **Aims:**
* To provide a cute and nostalgic memory game.
* Be accessible to the visually impaired with good contrasts. 
* Provide a “how-to-play” section.
* Link to inspiration source 
* To be an enjoyable distraction to fill the user's time.
### **How to Achieve:**
* The game will be free to use, and no sign up required.
* Site will use imagery and wording from the theme source and possible sound effects?
* Ensuring the use of semantic elements, alternate text, and aria labels where appropriate.
* The landing page will be the main menu. Access to the main menu can also be done throughout the game with the Nav button. This menu will contain links back to:
   1. How to Play
   2. About the source Material (Stardew Valley)
   3. Home 
* After each move, the relevant tally will be modified. Overall game play will be scored.
### **Wireframes**
* Below are some screengrabs of the desktop and mobile wireframes made for this project.
* Some notable changes and differences is the addition of a "table" behind the cards, home page and about sections. I did this first of all for better accesibility and contrast, secondly becuase it hghlights the game play area easisly and looks more clean, and last of all becuase it emulates a classic game table.
* Another change is that I have added a disclaimer at the bottom of each page to ensure that people are aware that all imagery is taken from Stardew Valley, and was not a creation of mine. 
#### *Desktop*
![desktop home page](/docs/wireframes/wireframes-homepage-desktop.jpg)

![desktop about us & how to page](/docs/wireframes/wireframes-about-howto-desktop.jpg)

![desktop gameplay page](/docs/wireframes/wireframes-gameplay-desktop.jpg)

#### *Mobile*
![mobile home page](/docs/wireframes/wireframes-homepage-mobile.jpg)

![mobile aabout us & how to page](/docs/wireframes/wireframes-about-howto-mobile.jpg)

![mobile gameplay page](/docs/wireframes/wireframes-gameplay-mobile.jpg)

#### *Tablet*
![mobile home page](/docs/wireframes/wireframes-homepage-tablet.jpg)

![mobile aabout us & how to page](/docs/wireframes/wireframes-about-howto-tablet.jpg)

![mobile gameplay page](/docs/wireframes/wireframes-gameplay-tablet.jpg)

### **Design**
* The basis of the design theme for this game came from the cult classic game of "Stardew Valley" a farming sim that was relised in 2014. This game has a huge following and has sold over 10 million copies. The bright and nostalgic pixel art is pleasing to look at and the icons in the game lend themselves to this type of spin-off game. It also has lots of groupable icons that can be used as card faces. Plus the bright colours made to create an intresting colour pallette with high contrast.
#### *Color Scheme*
* I used the loading image (seen below) and added in other complmentary colours to create a colour pallete and then used . I am planning to only use #fff and #000 for writing to increase asseibility.
![Contrast](/docs/screenshots/contrast-grid.png)
#### *Typography*
* Whilst doing research into what best fonts to use - I was struck by the idea to use pixelated fonts for the main title. However this would not look as good in smaller fonts and wouldn't be as accessible due to blur. So I used 'DotGothic16', 'Noto Sans Syloti Nagri', and 'VT323'. Two pixelated fonts and one regular clean lined font - all three were taken from Google Fonts and were imported into the style.css file.
## **Universal Features**
### **Header Element**
#### *Nav Button*
* I wanted to add a Navigation button at the top-right of my website so the user could easily get from one page to another. This nav button used the traditional three stacked lines which is a colloqiual "menu" icon in websites. The icon was taken from fontawesome. 
* The hover feature was employed to do the drop down function and highlight the links the user would be going to once the hover over on the button had been activated.
![Nav Button](/docs/screenshots/navbutton.jpg)
![Nav Button Hover](/docs/screenshots/navbutton-hover.jpg)
### **Hero Image**
* The Hero Image, or Background Image for this website is the loading screen of the actual game itself. Screenshot below. All images were taken from the Games Wiki "Stardew Valley Wiki", which states that the content is available under Creative Commons Attribution-NonCommercial-ShareAlike unless otherwise noted. [Creative Commons Link](https://creativecommons.org/licenses/by-nc-sa/3.0/). Due to the fact this will be a none profitable game and is free to use, all images can be freely copied, redistributed, modified and used. 
![Background Image](/assets/images/stardew-bg.jpg)
### **Footer**
* For good UX I kept with a traditional website footer of social media links. However to break from the footer "bar" i decided to just use the footer to hold the social media links and imply that the footer was see-through. This clean look show the background image behind and implies that the game board is the interactive part of the site. Hvaing the footer be more subtle lends to an elegant look. This is done throughout the website and a key part of the continuity of the website.
* There is also a copyright - because I liked the addition and becasue the images were taken from the Stardew Valley game which was created by Concerned Ape themselves, so i felt this needed to be made clear that the images are not my own. 
![Footer image](/docs/screenshots/footer.jpg)
## **Page Content Features**
### **Home Page content**
* The main home page features that are not universal are the home board and the score board.
* The Home Baord is mean to simulate a classic game opening page of "chose your difficulty" and to ensure that you ant start playing without chosing a difficulty setting. It was styled to emulate a classic game playing table with the green velvet, and also to highlight the colourful themes of the insparation game. The board was also created to ensure that the feautres of this page were not distracted by the background which i think has been achieved especailly with the centering. The colours of the board also tie in nicly with the background colours which was done for pure estheic reasons.
* The Score board is meant to be highlighting the high scores logged by the brower. And place them somewhere obvious. It seemed natural to have them at the top left, which is usally where highscore boards tend to be on classic 8-bit games. 

(SCORE BOARD IMAGE)
(HOME BOARD IMAGE)
![About Image IMAGE HERE]()

### **EASY page Content**

### **HARD Page Content**

### **EXPERT Page Content**

## **Future Improvements**
* 
## **Credits**
### **References**
* Whilst I did try to deviate as much as possible, this project was influenced by the reaserch I did before starting this project.
* Before starting this project, I did research javascript build of memory card games, for both code inspiration and direction. Whilst no code was directly taken from these other projects and was all typed and built by me, I can say that my research did influence how I built the project initially - hwoever strong deviations were taken after my research and the initial build. (Notable mentions: [Make MEMORY GAME in JavaScript, HTML and CSS for your portfolio](https://www.youtube.com/watch?v=tjyDOHzKN0w)), [Build A Memory Card Game in HTML CSS & JavaScript](https://www.youtube.com/watch?v=DABkhfsBAWw), [Memory Game Javascript Project | HTML, CSS, Javascript](https://www.youtube.com/watch?v=dqqxkrKhfS4) these were the most helpful but weren't the only videos I watched during my research phase.)
* I did rely on StackOverflow, W3schools, CSS-TRICKS and MDN web docs for general references and problem solving throughout the project.
### **Content**
* All images were taken from [Stardew Valley Wiki](https://stardewvalleywiki.com/Stardew_Valley_Wiki) and are used under the 
### **Media**
* All images were taken from Pexels.com. WHERE WERE ALL THE IMAGE TAKEN 
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
    * Detailed below is the method in which I test the site for responsiveness and to make sure that it did what was intended. This test was focused on console.log errors ad external links going into a new tab
        1. Starting on the home page and opening the dev tools to get to the console.log. I ensured that this was a fresh simulated live server. So to ensure that past testing and local.storage wouldn't interfer with this round of manual testing. 
        2. Home Page External Links: To make sure all external links on this page were working I hovered over and clicked the "Github" "Codepen" & the Disclaimer Icon fixed to the bottom of the screen. The "Github" & "Codepen" were to turn black once hovered over - and they both did. the cursor also turned into a pointer for all three links as intended. Also all three external links opened out into a new tab as intended.
        3. Home Page Internal Links: On the all pages there is a Nav button. When hovered over it should change to a lighter shade of green and three dropdown tabs should pop up underneath. The hover function once deployed on the tabs beneath should then change colour to match the interacted with Nav button. Clicking on the tabs should take you to the "Home", "What is Stardew Valley?" & "How to Play" respectivley. These should not go into new tabs and they don't.
        4. Home Page Initial Console.log: Wihtout interacting with anything the console appears blank. 
        5. Home Page Score Board: The score board will be blank if using a fresh browser or a new live extension. 
        6. Home Page Level Picking: To chose the level the user is visually guided by both the green playing board and the black bar above the green board saying "Chose Your Level:". On the green board there are three red buttons and one blue (what is a button but cannot yet be clicked). To chose the level the users selects either the "Silver", "Gold" or "Iridium" button. Once a level difficulty has been chose then the blue button can be clicked. The user can tell this because once a level has been chosen, "PLAY" appears in white lettering. The Javascript mean while will console log "(Silver/Gold/Iridium) Level Picked" based on the level chosen to show that the code links up correctly. This also then changes the inner.HTML of the play button from blank to the approiate link to the game play page. One small error/bug with this is that you can log multiple clicks of each level before you settle on which level to pick. However this didn't effect the site's funciton, the game play nor did it bring up any console errors. However fixing this could be a future improvement.
        7. Silver Page: To get to the silver level we initally click on the silver red button on the home page, which then turns a darker shade of red to imply that it has been chosen, and then once the white "play" text in the blue button appears we can play this level. Doing this works as expected and takes us to the Silver page with no console errors at the initialisation. 
        8. Silver Page External Links: Like for the Home Page link testing to make sure all external links on this page were working I hovered over and clicked the "Github" "Codepen" & the Disclaimer Icon fixed to the bottom of the screen. The "Github" & "Codepen" were to turn black once hovered over - and they both did. The cursor also turned into a pointer for all three links as intended. Also all three external links opened out into a new tab as intended.
        9. Silver Page Internal Links: Like for the Home Page link testing on the all pages there is a Nav button. When hovered over it should change to a lighter shade of green and three dropdown tabs should pop up underneath. The hover function once deployed on the tabs beneath should then change colour to match the interacted with Nav button. Clicking on the tabs should take you to the "Home", "What is Stardew Valley?" & "How to Play" respectivley. These should not go into new tabs and they don't. Also for all none Home Pages, there are two other buttons, the left and right buttons. On the Silver page the left button takes you back to the Home page and the right button takes you to the next level, in this case "gold.html". Bother of them act as expected. Take you to the page once clicked, the hover over function ensures that the shadow under the button has mor ecolour to it and looks brighter as if the button has been light up the colour of the button also gets bright, again implying it has been light up. At this point there have been no console errors.
        10. Silver Page Game Play Expectations: The game play for silver has a few expectations. One the loading of the screen we are to get 500 miliseconds of seeing where the cards are before they are hidden, that when we click a card the back is replaced by the image, that when we try to match the first card with another we either get a match or we dont. If we don't get a match the expectation is that the cards will then turn back over and we will have a our error cacluated and this will impact our points. However if we do get a match we want those cards to stay turnt over and we want our matches to be caluated and our points score to reflect this match. Also once the game is finsihed we want to be notified in some way of the game finishing and if our score is higher than our last (which it should be at this point as the score bar at the top shouldn't have a number) then this will be refelcted in the "Highest Score Silver: X" bar. After game play we can try again and all the above still applies, but if our end score is lower than our last then the "Highest Score Silver: X" bar. shouldn't change to the new score number, and if our new end score is higher we DO want this reflected in the "Highest Score Silver: X" bar and the local.storage. Also after each game play we want to be able to see our highscore in that level refelcted on the score baord on the home page. These are the Game play expecations of the Silver Page
        11. Silver Page Test: Refreshed page, got 500 milisecond of cards then the backs replaced the images. Clicked first card and it showed the image. Clicked second and not a match. Cards turned over after a short time. Errors count went up by one and Points count -1. clicked new card and the second card. Match, cards stayed on screen turned over, matches went up by 1 and points +2. Finished level with Matches:4, Points: 5 and Errors: 3. highest score now shows "5". No console errors throughout. Went to Home page silver scoer refelcted in the score board. Re-did level to get worse score, all the same tactics as above. Matches: 4 Points: 2 and Errors: 6. Highest score bar not changed, no console errors. Homepage score also unchnaged. New round to improve on score Matches: 4 Points: 7 and Errors: 1. Highest score bar chnaged to 7 as did home page score board. No console errors.
        12. Gold and Iridium Pages:
            1. I did all testing from the Silver Pages on the Gold and Iridium in the same way. All results the same (bar the actual scores, but the outcomes of the testing remained unchanged). 
            2. All extneral links in new tabs, all internal links work. All hover functions work as expected like above.
            3. Left button link on Gold & Iridium Page is "Previous Level" and takes you to the easier level. Right button on Iridium Page is "Play Again" and refreshes the page.
            4. There were no console errors throughout this testing.
* Asked a Data Scientist friend to review the pages and the games responsiveness by following the above procedure often throughout the development of the game. They did not offer any help on the coding nor did they provide feedback other than "this link/button/card" is broken. They did however make a good soundboard for me to talk at while talking through difficult code issues.

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
        * The hover over function at first did not work, and then also floated over the top of the button instead of droping down below the nav button,
    * ***Solution Used:*** 
        * Chaning the positioning and then the using the float function then got the button to stay in the top right corner. Then I also changed the contents css stylign to display: none and position: absolute instead of relative. This fixed the issue.
 1. **Intended Outcome** - 
    * ***Issue Found:*** 
        * 
    * ***Solution Used:*** 
        *     

## **Post Development Testing**
### **Validators**
#### ***HTML*** - https://validator.w3.org/nu/  
* ***Issue Found:***
    * 
* ***Solution Used:***
    *  
*
![HTML validator]()
#### ***CSS*** - https://jigsaw.w3.org/css-validator/
* 
![CSS badge]()
### **Lighthouse Scores**
### **Test conditions**
* 
#### ***Desktop Version:***
* 

![Lighthouse Desktop Score]() 
* 
#### ***Mobile Version:***
* 
* 

![Lighthouse Mobile Best Score]() 

![Lighthouse Mobile Worst Score]() 

### **Accessability**
In addition to other tests, I was also inspired to use [WAVE - Web accessibility evaluation tool](https://wave.webaim.org/) by dnlbowers to check my pages for accessibility. no errors were returned - I was especially concerned with the contrast of my signup page but beforehand I had increased the font-weight and size, so this was mitigated.
