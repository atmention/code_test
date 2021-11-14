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
let currentQuestion = 0;
let userScore = {};

const timerSpan = document.querySelector("#timer");
timerSpan.innerHTML = timeLeft;
const qTitle = document.querySelector("#question-title");
const qContainer = document.querySelector("#container");
const rSpan = document.querySelector("#result");
const containerEl = $("#container");

function displayQuestion(currentQuestion) {

    // Insert the question into the header
    qTitle.innerHTML = questions[currentQuestion].question;

    // Add possible answers to the buttons
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {

        // Display each possible answer to the displayed question
        qContainer.children[1].children[i].innerHTML = `${i+1}. ${questions[currentQuestion].options[i]}`;
        qContainer.children[1].children[i].dataset.answer = false;
        // If the current option is the correct answer, set data value to true
        if (i === questions[currentQuestion].answer) {
            qContainer.children[1].children[i].dataset.answer = true;
        }
    }
}

// Listen for click on an answer
const answersEl = $("#question-options");

// Refactor: Add event listener to parent <ul> instead of individual <li>'s
answersEl.on('click', '.option', function (event) {
    playQuiz(event);
});

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
    // check if we've reached the end of the list of questions,
    // if not, display the next question in the list
    if (currentQuestion < questions.length) {
        displayQuestion(currentQuestion);
    } else { // Immediately call countDown since the quiz is over
        countDown();
    }

}
// Some cool stuff happens here
function countDown() {
    timeLeft--;
    timerSpan.innerHTML = timeLeft;

    if (timeLeft === 0 || timeLeft < 0 || questions.length === currentQuestion) {

        let qh2 = document.getElementById("question-title");
        let oul = document.getElementById("question-options");
        qh2.remove();
        oul.remove();
        clearInterval(intervalId);
        const newTitle = document.createElement('h2');
        newTitle.textContent = "Quiz Over";
        const newText = document.createElement('p');
        newText.textContent = `Your final score is ${timeLeft}.`;

        const inputLabel = $('<label>')
            .attr('for', 'Initials')
            .text("Initials: ");

        const inputBox = $('<input>')
            .attr('type', 'text')
            .attr('name', 'Initials');

        const submitButton = $('<button>')
            .attr('type', 'button')
            .addClass('submit-button')
            .text("Submit");

        containerEl.prepend(submitButton);
        containerEl.prepend(inputBox);
        containerEl.prepend(inputLabel);
        containerEl.prepend(newText);
        containerEl.prepend(newTitle);

        submitButton.on('click', function () {
            let userInitials = $('input[name=Initials]').val();
            userScore = {
                'initials': userInitials,
                'score': timeLeft
            };
            submitScore();
        });

    }
}
let intervalId = setInterval(countDown, 1000);

function submitScore() {
    // grab any existing localStorage data for scores, or an empty array if it is null
    let highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

    // add the new score
    highScores.push(userScore);

    // set the local storage to include the new score
    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href = 'hs.html';
}

displayQuestion(currentQuestion);