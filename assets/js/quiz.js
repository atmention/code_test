const questions = [{
        question: 'How many points for a tech fall in Greco:',
        options: ['15', '10', '8', '25'],
        answer: 2,
    }, {

        question: 'Highest percentage takedown finishes in the NCAA:',
        options: ['Double leg', 'Single leg', 'Suplex', 'Headlock'],
        answer: 1,
    },
    {
        question: 'What is PA wrestling known for:',
        options: ['Mat wrestling', 'Takedowns', 'Freestyle', 'Greco'],
        answer: 0,
    },
    {
        question: 'Best current Team USA wrestler:',
        options: ['Jordan Burroughs', 'Adaline Gray', 'Kyle Dake', 'Spencer Lee'],
        answer: 0,
    },
    {
        question: '2021 Hodge Trophy winner:',
        options: ['Gable Steveson', 'Mosha Schwartz', 'Mr. Fasttwitch', 'Spencer Lee'],
        answer: 3,
    },
]
let timeLeft = 90;
let timerSpan = document.querySelector("#timer");
timerSpan.innerHTML = timeLeft;
let currentQuestion = 0;
let qTitle = document.querySelector("#question-title");
let qContainer = document.querySelector("#container");
let rSpan = document.querySelector("#result");
let e;

function displayQuestion(currentQuestion) {

    // Insert the question into the header
    qTitle.innerHTML = questions[currentQuestion].question;

    // Add possible answers to the buttons
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {

        // Display each possible answer to the displayed question
        qContainer.children[1].children[i].innerHTML = `${i+1}. ${questions[currentQuestion].options[i]}`;
        qContainer.children[1].children[i].dataset.answer = false;
        console.log(qContainer.children[1].children[i]);
        // If the current option is the correct answer, set data value to true
        if (i === questions[currentQuestion].answer) {
            qContainer.children[1].children[i].dataset.answer = true;
        }
    }
}

// Listen for click on an answer
const answers = document.getElementsByTagName("li"); // TODO refactor 

for (let ans of answers) {
    ans.addEventListener("click", playQuiz);
}

function playQuiz(event) {

    // Check if the option clicked is the correct answer,
    // if so - display "Correct!" and move to the next question.
    if (event.target.dataset.answer === "true") {
        rSpan.innerHTML = "Correct!";
    } else {
        rSpan.innerHTML = "Wrong!";
        timeLeft = timeLeft - 10;
    }
    currentQuestion++; 
    displayQuestion(currentQuestion);

}

function countDown() {
    timeLeft--;
    timerSpan.innerHTML = timeLeft;
    console.log(timeLeft);

    if (timeLeft === 0 || timeLeft < 0 || questions.length === currentQuestion) {
        // save the score
        localStorage.setItem("score", timeLeft);
        window.location.href = 'hs.html';
    }
}

setInterval(countDown, 1000);

displayQuestion(currentQuestion);