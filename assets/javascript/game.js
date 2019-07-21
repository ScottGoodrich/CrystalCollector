
var wins = 0;
var losses = 0;
var score = 0;
var targetNumber = Math.floor(Math.random() * 102) + 19;
$(".target-text").html(targetNumber);
console.log(targetNumber);

$(document).ready(function () {

    function newGame() {
        score = 0;
        randomNumber();
        $(".score-text").empty();
        $(".target-text").html(targetNumber);
        $(".score-text").html(score);
    }

    function randomNumber() {
        for (var i = 0; i < 4; i++) {
            var randNum = Math.floor(Math.random() * 12) + 1;
            console.log(randNum);
            var crystal = $("#crystal" + (i + 1));
            crystal.attr("data-value", randNum);
        }
        targetNumber = Math.floor(Math.random() * 102) + 19;
    } 
    for (var i = 0; i < 4; i++) {
        var randNum = Math.floor(Math.random() * 12) + 1;
        console.log(randNum);
        var crystal = $("#crystal" + (i + 1));
        crystal.attr("data-value", randNum);
    }
    $("button").on("click", function() {
        score +=$(this).data("value");
        console.log(score);
        $(".score-text").html(score);
        if (score === targetNumber) {
            alert("You Win!");
            wins++;
            $(".wins-text").html(wins);
            newGame();
        }
        if (score > targetNumber) {
            alert("Game Over!");
            losses++;
            $(".losses-text").html(losses);
            newGame();
        }
    });
    
    
});