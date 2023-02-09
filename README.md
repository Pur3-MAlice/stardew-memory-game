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
        * [*Logo*](#logos)
        * [*Nav Bar*](#nav-bar)
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
* Adults who enjoy playing the sub genre of video games called “cosy games” but don’t want anything too taxing.
* Fans of the Stardew Valley. Which Is A Cult Cosy Game With A Large Player Base
* Casual Gamers who would like to spend time away from their main game and spend some time on a semi-concentrated task.
* Fans of nostalgic kids cards games like Snap or Uno. 
### **User Stories:**
* I as a user, want to be able to play a cute/nosalgic game with the ability to go to harder levels.
* I as a user, want to be able to track the progress of each round in some way.
* I as a user, want to be able to find a clear explanation of the game rules and how to play.
* As a user, I want to be able to navigate my way to resources easily.
* As a user, I want to learn more about the inspiration game.
### **Aims:**
* To provide a cute and nostalgic memory game.
* Be accessible to the visually impaired with good contrasts. 
* Provide a “how-to-play” section.
* Link to inspiration source 
* keyboard functions?
* To be an enjoyable distraction to fill the user's time.
### **How to Achieve:**
* The game will be free to use, and no sign up required.
* Site will use imagery and wording from the theme source and possible sound effects?
* Ensuring the use of semantic elements, alternate text, and aria labels where appropriate.
* The landing page will be the main menu. Access to the main menu can also be done throughout the game with the Nav button. This menu will contain links back to:
   1. Game rules.
   2. Game options menu.
   3. Keyboard Play?
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
#### *Logo*
* 
#### *Nav Bar*
* I wanted to add a Navigation button at the top-right of my website so the user could easily get from one page to another. This nav button used the traditional three stacked lines which is a colloqiual "menu" icon in websites. The icon was taken from fontawesome. 
* The hover feature was employed to do the drop down function and highlight the links the user would be going to once the hover over on the button had been activated.
![Nav Button]()
### **Hero Image**
* The Hero Image, or Background Image for this website is the loading screen of the actual game itself. Screenshot below. All images were taken from the Games Wiki "Stardew Valley Wiki", which states that the content is available under Creative Commons Attribution-NonCommercial-ShareAlike unless otherwise noted. [Creative Commons Link](https://creativecommons.org/licenses/by-nc-sa/3.0/). Due to the fact this will be a none profitable game and is free to use, all images can be freely copied, redistributed, modified and used. 
![Background Image](/assets/images/stardew-bg.jpg)
### **Footer**
* For good UX I kept with a traditional website footer of social media links. However to break from the footer "bar" i decided to just use the footer to hold the social media links and imply that the footer was see-through. This clean look show the background image behind and implies that the game board is the interactive part of the site. Hvaing the footer be more subtle lends to an elegant look. This is done throughout the website and a key part of the continuity of the website.
* There is also a copyright - because I liked the addition and becasue the images were taken from the Stardew Valley game which was created by Concerned Ape themselves, so i felt this needed to be made clear that the images are not my own.
![Footer image]()
## **Page Content Features**
### **About Content**
* 
![About Image]()

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
During the development process, I was manually testing in the following ways:-
* Manually testing each element for appearance and responsiveness via a simulated live server using an extension in VSCode.
    * Detailed below is the method in which I test the site for responsiveness and to make sure that it did what was intended. This test was focused on console.log errors ad external links going into a new tab
        1. Starting on the home page and opening the dev tools to get to the console.log. I ensured that this was a fresh simulated live server. So to ensure that past testing and local.storage wouldn't interfer with this round of manual testing. 
        2. Home Page External Links: To make sure all external links on this page were working I hovered over and clicked the "Github" "Codepen" & the Disclaimer Icon fixed to the bottom of the screen. The "Github" & "Codepen" were to turn black once hovered over - and they both did. the cursor also turned into a pointer for all three links as intended. Also all three external links opened out into a new tab as intended.
        3. Home Page Internal Links
* Asked a Data Scientist friend to review the pages and the games responsiveness often they had no comments on improvements that could be made to the website in the timeframe.
### ***Manual Testing:***
* During testing, I used three browsers to ensure cross-compatibility. The browsers used were:
  1. Chrome
  2. Firefox  
  4. Edge
* I then used the devtools to simulate different screen sizes/devices from 320px up to 2200px in width. 
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
