var $questionText = document.querySelector("#question");
var $startButton = document.createElement("button");
var $timerDisplay = document.querySelector("#timerDisplay");
var $highscoreList = document.querySelector("#highscores");
// var $highscoreDisplay = document.querySelector("#scores");

var time = 75;

var $answer1btn = document.createElement("button");
var $answer2btn = document.createElement("button");
var $answer3btn = document.createElement("button");
var $answer4btn = document.createElement("button");
var buttonsArr = [$answer1btn, $answer2btn, $answer3btn, $answer4btn];

var index = 0;

var questions = [
    {
        text: "Commonly used data types DO NOT include:",
        answers: [
        "Strings",
        "Booleans",
        "Alerts",
        "Numbers"
        ],
        correctAnswerText: "Alerts"
    },
    {
        text: "The condition in an if/else statement is enclosed within:",
        answers: [
            "Quotes",
            "Parentheses",
            "Square brackets",
            "Curly brackets"
        ],
        correctAnswerText: "Parentheses"
    },
    {
        text: "Arrays in JavaScript can be used to store:",
        answers: [
            "Numbers and strings",
            "Other arrays",
            "Booleans",
            "All of the above"
        ],
        correctAnswerText: "All of the above"
    },
    {
        text: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            "Commas",
            "Curly brackets",
            "Quotes",
            "Parentheses"
        ],
        correctAnswerText: "Quotes"
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "JavaScript",
            "Terminal/bash",
            "For loops",
            "Console log"
        ],
        correctAnswerText: "Console log"
    }
];

var userScore; 

var existing = localStorage.getItem("highscores");

var scoreHistory;

$startButton.textContent = "START";
$questionText.appendChild($startButton);
$startButton.addEventListener("click", playGame);

function playGame() {
    $startButton.style.display = "none";
    function gameTimer () {
        time--;
        $timerDisplay.textContent = "Timer: " + time;
        if (time === 0) {
           clearInterval(timer); 
           endGame();
        }
    }
    var timer = setInterval(gameTimer, 1000);
    nextQuestion();
}

function nextQuestion() {
    $questionText.textContent = questions[index].text;
    $questionText.append($answer1btn, $answer2btn, $answer3btn, $answer4btn);
    for (let j = 0; j < buttonsArr.length; j++) {
        buttonsArr[j].textContent = questions[index].answers[j];
        buttonsArr[j].addEventListener("click", checkAnswer);
    }
    index++;
}

function checkAnswer(event) {
    var element = event.target;
    
    if (element.textContent !== questions[index-1].correctAnswerText) {
        console.log("Wrong");
        time -= 10;
        index -= 2;
        nextQuestion();
    } else {
        console.log("Right");
        
    }
    if (index < 5) {
        nextQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    if (time === 0) {
        $questionText.textContent = "Time is up! Play again to get a score.";
    } else {
        userScore = time;
        userInitials = prompt("Please enter your initials.");
        var scoreObj = {
            score: userScore,
            initials: userInitials
        };
        if (existing) {
            existing = JSON.parse(localStorage.getItem("highscores"));
            existing.push(scoreObj);
            localStorage.setItem("highscores", JSON.stringify(existing));
        } else {
            scoreObj = JSON.stringify([scoreObj]);
            localStorage.setItem("highscores", scoreObj);
        }
    }
    $questionText.textContent = "High Scores";
    $questionText.style.textDecoration = "underline";
    scoreHistory = JSON.parse(localStorage.getItem("highscores"));
    for (let i = 0; i < scoreHistory.length; i++) {
        var $scoreListing = document.createElement("li");
        $highscoreList.appendChild($scoreListing);
        $scoreListing.textContent = scoreHistory[i].initials + ": " + scoreHistory[i].score;
    };
}