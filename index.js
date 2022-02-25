var readlineSync = require("readline-sync");



var score = 0;



// array of objects  //questions
var questions = [{
  question: "Where do I live? ",
  answer: "Bangalore"
}, {
  question: "My favorite food? ",
  answer: "Chicken biriyani"
},
{
  question: "Where do I study? ",
  answer: "Reva university"
},
{
  question:"where is my homwtown? ",
  answer:"udupi"
},
{
  question:"which is my favorite sport?",
  answer:"cricket"  
}];

function welcome() {
  
 var userName = readlineSync.question("What's your name? ");

 

  console.log("Welcome "+ userName + " to DO YOU KNOW prathish?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You  have SCORED: ", score);

  console.log("Thank you for playing the game!")

  console.log("your score is:",score,"/5")
}


welcome();
game();
showScores();


