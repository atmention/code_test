const questions = [{
    question: 'How many points for a tech fall in Greco:',
    options: ['15', '10', '8', '25'],
    answer: 3,
}, {

    question: 'Highest percentage takedown finishes in the NCAA:',
    options: ['Double leg', 'Single leg', 'Suplex', 'Headlock'],
    answer: 2,
},
{
    question: 'What is PA wrestling known for:',
    options: ['Mat wrestling', 'Takedowns', 'Freestyle', 'Greco'],
    answer: 1,
},
{
    question: 'Best current Team USA wrestler:',
    options: ['Jordan Burroughs', 'Adaline Gray', 'Kyle Dake', 'Spencer Lee'],
    answer: 1,
},
{
    question: '2021 Hodge Trophy winner:',
    options: ['Gable Steveson', 'Mosha Schwartz', 'Mr. Fasttwitch', 'Spencer Lee'],
    answer: 4,
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

// Insert the question into the header
qTitle.innerHTML = questions[currentQuestion].question;

// Add possible answers to the buttons
for (let i = 0; i < questions[currentQuestion].options.length; i++) {

    // Display each possible answer to the displayed question
    qContainer.children[1].children[i].innerHTML = `${i+1}. ${questions[currentQuestion].options[i]}`;
    
    // If the current option is the correct answer, set data value to true
    if (i + 1 === questions[currentQuestion].answer) {
        qContainer.children[1].children[i+1].dataset.answer = true;
    }
}

// Listen for click on an answer
const answers = document.getElementsByTagName("li");

for (let ans of answers) {
    ans.addEventListener("click", playQuiz);
}

function playQuiz(event){

    // Check if the option clicked is the correct answer,
    // if so - display "Correct!" and move to the next question.
    if (event.target.dataset.answer === "true") {
        rSpan.innerHTML = "Correct!";
    }
    else {
        rSpan.innerHTML = "Wrong!";
    }
}

// function countDown() {
//     timeLeft--;
//     timerSpan.innerHTML = timeLeft;
//     console.log(timeLeft);

//     if (timeLeft === 0 || timeLeft < 0) {
//         window.location.href = 'hs.html';
//     }
// }

// setInterval(countDown, 1000);
