// GET element with dom create an array

const question = document.getElementById("question");
const progressText = document.getElementById("progressText");

// score, progressBarfull, game, choice-text //
const scoreText = document.getElementsByClassName("Score");
const progressBarfull = document.getElementById("progressBarFull");
const game = document.getElementById("game");
const choice = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];
let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

// START QUIZ
const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestion = [...questions];
  console.log(availableQuestion);
  getNewQuestion();
};

const getNewQuestion = () => {
  questionCounter++;
  progressText.innerText = `Question${questionCounter}/${MAX_QUESTION}`;
  progressBarfull.style.width = `${(questionCounter / MAX_QUESTION) * 100}%`;
  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex]
  question.innerText = currentQuestion.question

//   console.log(currentQuestion)
choice.forEach((choice) => {
    const number = choice.dataset["number"]
    choice.innerText = currentQuestion["choice" + number]
})
};

startGame();
