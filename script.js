var $questionText = document.querySelector("#question");

var $startButton = document.createElement("button");
$startButton.textContent = "START";
$questionText.appendChild($startButton);

function gameTimer () {
    time--;
    $timerDisplay.textContent = "Timer: " + time;
    if (time === 0) {
       clearInterval(timer); 
       endGame("Game over!");
    }
}

var timer = setInterval(gameTimer, 1000);

var time = 75;

var $timerDisplay = document.querySelector("#timerDisplay");

var $answer1btn = document.createElement("button");
var $answer2btn = document.createElement("button");
var $answer3btn = document.createElement("button");
var $answer4btn = document.createElement("button");
var buttonsArr = [$answer1btn, $answer2btn, $answer3btn, $answer4btn];

var index = 0;

$startButton.addEventListener("click", playGame);

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
]

function playGame() {
    $startButton.style.display = "none";
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
    
    if (element.textContent === questions[index-1].correctAnswerText) {
        console.log("Right");
    } else {
        console.log("Wrong");
    }
    if (index < 5) {
        nextQuestion();
    } else {
        endGame("Finished!");
    }
}

function endGame(endingText) {
    $questionText.textContent = endingText;
    if (time === 0) {
        $questionText.textContent = "Game over! Play again to get a score.";
    } else {
        var userScore = time;
    }
    displayScores();
}

function displayScores() {
    
}


