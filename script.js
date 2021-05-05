var $questionText = document.querySelector("#question");

var $answers = document.querySelector("#answers");
var $startButton = document.createElement("button");
$startButton.textContent = "START";
$answers.appendChild($startButton);

var $answer1btn = document.createElement("button");
var $answer2btn = document.createElement("button");
var $answer3btn = document.createElement("button");
var $answer4btn = document.createElement("button");

$startButton.addEventListener("click", codeQuiz);

var questions = [
    {
        text: "Commonly used data types DO NOT include:",
        answers: [
        "Strings",
        "Booleans",
        "Alerts",
        "Numbers"
        ]
    },
    {
        text: "The condition in an if/else statement is enclosed within:",
        answers: [
            "Quotes",
            "Curly brackets",
            "Square brackets",
            "Parentheses"
        ]
    },
    {
        text: "Arrays in JavaScript can be used to store:",
        answers: [
            "Numbers and strings",
            "Other arrays",
            "Booleans",
            "All of the above"
        ]
    },
    {
        text: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            "Commas",
            "Curly brackets",
            "Parentheses",
            "Quotes"
        ]
    },
    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "JavaScript",
            "Terminal/bash",
            "For loops",
            "Console log"
        ]
    }
]

const dummyText = "What about this?";

function codeQuiz() {
    for (let i = 0; i < questions.length; i++) {
        $questionText.textContent = questions[i].text;
        $startButton.style.display = "none";
        $questionText.append($answer1btn, $answer2btn, $answer3btn, $answer4btn);
        $answer1btn.textContent = questions[i].answers[0];
        $answer2btn.textContent = questions[i].answers[1];
        $answer3btn.textContent = questions[i].answers[2];
        $answer4btn.textContent = questions[i].answers[3];
    }
}