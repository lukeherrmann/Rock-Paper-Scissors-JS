var rps = ["rock", "paper", "scissor"];

var choiceRock = document.getElementById("rock")
var choicePaper = document.getElementById("paper")
var choiceScissors = document.getElementById("scissor")


choiceRock.addEventListener("click", function(){
  var choice = this.id;
  var compChoice = rps[Math.floor(Math.random()*rps.length)];
  if (choice == compChoice) {
    var outcome = "You Win! Your pick was: " + choice + " Computer pick was: " + compChoice
    alert(outcome)
  } else {
    var outcome2 = "You lose... Your pick was: " + choice + " Computer pick was: " + compChoice
    alert(outcome2)
  }
})

choicePaper.addEventListener("click", function(){
  var choice = this.id;
  var compChoice = rps[Math.floor(Math.random()*rps.length)];
  if (choice == compChoice) {
    var outcome = "You Win! Your pick was: " + choice + " Computer pick was: " + compChoice
    alert(outcome)
  } else {
    var outcome2 = "You lose... Your pick was: " + choice + " Computer pick was: " + compChoice
    alert(outcome2)
  }
})

choiceScissors.addEventListener("click", function(){
  var choice = this.id;
  var compChoice = rps[Math.floor(Math.random()*rps.length)];
  if (choice == compChoice) {
    var outcome = "You Win! Your pick was: " + choice + " Computer pick was: " + compChoice
    alert(outcome)
  } else {
    var outcome2 = "You lose... Your pick was: " + choice + " Computer pick was: " + compChoice
    alert(outcome2)
  }
})