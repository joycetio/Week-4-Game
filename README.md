# HW-Week-4-Game

##Crystals Collector Game 

###Requirements:
1. In this game, the player will have to guess the answer using numbers instead of letters. 
2. Here's how the app works: 
    * There will be four crystals displayed as buttons on the page. 
    * The player will be shown a random number at the start of the game. 
    * When the player clicks on a crystal, it will add a specific amount of point to the player's total score. 
        *This game will hide the amount until the player clicks a crystal. 
        *When they do click one, update the game will update the player's score counter.
    * The player wins if their total score matches the random number from the beginning of the game. 
    * The player loses if their score goes above the random number. 
    * The game restarts whenever they player wins or loses. 
        *When the game begins again, the player should see a new random number. Also,all the crystals will have four new hidden values. The user's score (and score counter) will reset to zero. 
    * The app should show the number of games the player wins and loses.
3. Game design notes: 
    * The random number shown at the start of the game should be between 19-120. 
    * Each crystal should have a random hidden value between 1-12. 

### Technologies Used: 
* Bootstrap 
* Javascript / jQuery 
* CSS 

### Code Explanation: 
*I used Bootstrap to design my HTML, and used CSS to override Bootstrap and add a background. 
*For my game.js file, 
    *I first set up my randomNumber using Math.random to select a number between 19-120, and then used the append function to show the number in the HTML file. 
    *Next, I set random numbers between 1-12 to the jewels using math.random as well. 
    *After declaring my variables, I created a function called startGame. Inside, I set up the click function the jewels and included win/lose conditionals for each one. 
    *I set up another function called playAgain to reset the game. 
    *Last, I set up two functions to determine what happens whether the player wins or loses. 

###Live Link: 
https://joycetio.github.io/Week-4-Game/


