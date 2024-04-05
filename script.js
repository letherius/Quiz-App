// Define your quiz questions and options
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris",
    },
    {
        question: "Which is the largest continent?",
        options: ["Asia", "Africa", "North America", "South America"],
        correctAnswer: "Asia",
    },
    // Add more questions...
];

// Initialize variables
let currentQuestion = 0;
let score = 0;
let timer;

// Function to display the current question and options
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion].question;

    optionsElement.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

// Function to handle option selection
function selectOption(selectedOption) {
    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach((button) => {
        button.classList.remove("selected");
        if (button.textContent === selectedOption) {
            button.classList.add("selected");
        }
    });
}

// Function to check the answer and move to the next question
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Function to start the timer
function startTimer() {
    let timeLeft = 10;
    timer = setInterval(() => {
        document.getElementById("timer").textContent = `Time left: ${timeLeft} seconds`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            checkAnswer(null); // Time's up, move to the next question
        }
    }, 1000);
}

// Function to handle end of the quiz
function endQuiz() {
    clearInterval(timer);
    document.getElementById("next-button").classList.add("hide");
    document.getElementById("score").textContent = `Your Score: ${score}/${questions.length}`;
    document.getElementById("score").classList.remove("hide");
}

// Event listener for the "Start" button
document.getElementById("start-button").addEventListener("click", () => {
    document.getElementById("start-button").classList.add("hide");
    document.getElementById("next-button").classList.remove("hide");
    startTimer();
    displayQuestion();
});

// Event listener for the "Next" button
document.getElementById("next-button").addEventListener("click", () => {
    const selectedOption = document.querySelector(".option.selected");
    if (selectedOption) {
        checkAnswer(selectedOption.textContent);
    }
});
