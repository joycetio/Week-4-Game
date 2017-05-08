$(document).ready(function() {
    //Select a random number between 19-120
    var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log("randomNumber: " + randomNumber);

    //Append that random number to HTML document 
    $("#random-number").append(randomNumber);

    //Set the random number between 1-12 to the jewels 
    var firstCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log("firstCrystal: " + firstCrystal);
    var secondCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log("secondCrystal: " + secondCrystal);
    var thirdCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log("thirdCrystal: " + thirdCrystal);
    var fourthCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log("fourthCrystal: " + fourthCrystal);


    //declare win, lose, total-score variables 
    var userTotalScore = 0;
    var wins = 0;
    var losses = 0;

    $("#numWins").html("Wins: " + wins);
    $("#numLosses").html("Losses: " + losses);

    function startGame() {
        //Set up click for jewels & win/lose conditionals 
        $("#blueCrystal").click(function() {
            userTotalScore = userTotalScore + firstCrystal;
            console.log("New total score: " + userTotalScore);
            $("#total-score").html(userTotalScore);
            if (userTotalScore === randomNumber) {
                youWin();
            } else if (userTotalScore > randomNumber) {
                youLose();
            };
        });

        $("#greenCrystal").click(function() {
            userTotalScore = userTotalScore + secondCrystal;
            console.log("New total score: " + userTotalScore);
            $("#total-score").html(userTotalScore);
            if (userTotalScore === randomNumber) {
                youWin();
            } else if (userTotalScore > randomNumber) {
                youLose();
            };
        });

        $("#yellowCrystal").click(function() {
            userTotalScore = userTotalScore + thirdCrystal;
            console.log("New total score: " + userTotalScore);
            $("#total-score").html(userTotalScore);
            if (userTotalScore === randomNumber) {
                youWin();
            } else if (userTotalScore > randomNumber) {
                youLose();
            };
        });

        $("#redCrystal").click(function() {
            userTotalScore = userTotalScore + fourthCrystal;
            console.log("New total score: " + userTotalScore);
            $("#total-score").html(userTotalScore);
            if (userTotalScore === randomNumber) {
                youWin();
            } else if (userTotalScore > randomNumber) {
                youLose();
            };
        });
    };

    startGame();


    function playAgain() {

        userTotalScore = 0;

        randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        console.log("randomNumber: " + randomNumber);
        $("#random-number").html(randomNumber);

        firstCrystal = Math.floor(Math.random() * (12 - 1) + 1);
        console.log("firstCrystal: " + firstCrystal);
        secondCrystal = Math.floor(Math.random() * (12 - 1) + 1);
        console.log("secondCrystal: " + secondCrystal);
        thirdCrystal = Math.floor(Math.random() * (12 - 1) + 1);
        console.log("thirdCrystal: " + thirdCrystal);
        fourthCrystal = Math.floor(Math.random() * (12 - 1) + 1);
        console.log("fourthCrystal: " + fourthCrystal);


        $("#total-score").html(userTotalScore);

    };

    //create a win counter 
    function youWin() {
        alert("You win!!");
        wins++;
        console.log("Wins: " + wins);
        $("#numWins").html("Wins: " + wins);
        playAgain();
    };

    //create a loss counter 
    function youLose() {
        alert("That sucks, you lose!!");
        losses++;
        console.log("Losses: " + losses);
        $("#numLosses").html("Losses: " + losses);
        playAgain();
    };

});
