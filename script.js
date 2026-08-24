// Quiz questions
const questions = [
    {
        category: "Geography",
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        category: "Geography",
        question: "Which is the largest continent by land area?",
        options: ["Africa", "Asia", "North America", "Europe"],
        correctAnswer: "Asia"
    },
    {
        category: "Technology",
        question: "What does DNS stand for?",
        options: [
            "Domain Name System",
            "Digital Network Service",
            "Domain Network Server",
            "Data Naming Standard"
        ],
        correctAnswer: "Domain Name System"
    },
    {
        category: "Science",
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        category: "Technology",
        question: "Which protocol is commonly used to securely load websites?",
        options: ["FTP", "HTTPS", "SMTP", "SSH"],
        correctAnswer: "HTTPS"
    },
    {
        category: "Science",
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Lungs"],
        correctAnswer: "Skin"
    },
    {
        category: "Computing",
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Processing Utility",
            "Central Program Unit",
            "Core Processing User"
        ],
        correctAnswer: "Central Processing Unit"
    },
    {
        category: "Geography",
        question: "Which ocean is the largest?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean"
        ],
        correctAnswer: "Pacific Ocean"
    },
    {
        category: "Computing",
        question: "Which operating system is based on the Linux kernel?",
        options: ["Ubuntu", "Windows", "macOS", "MS-DOS"],
        correctAnswer: "Ubuntu"
    },
    {
        category: "Internet",
        question: "What is the main purpose of an IP address?",
        options: [
            "To identify a device on a network",
            "To encrypt a website",
            "To store passwords",
            "To increase internet speed"
        ],
        correctAnswer: "To identify a device on a network"
    }
];


// Quiz settings
const timePerQuestion = 15;


// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = timePerQuestion;
let timerInterval = null;
let questionAnswered = false;


// DOM elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const questionElement = document.getElementById("question");
const questionCategory = document.getElementById("question-category");
const questionCount = document.getElementById("question-count");
const optionsElement = document.getElementById("options");

const timerElement = document.getElementById("timer");
const timerBox = document.getElementById("timer-box");
const liveScore = document.getElementById("live-score");
const progressBar = document.getElementById("progress-bar");

const feedbackElement = document.getElementById("feedback");

const finalPercentage = document.getElementById("final-percentage");
const finalScore = document.getElementById("final-score");
const correctTotal = document.getElementById("correct-total");
const incorrectTotal = document.getElementById("incorrect-total");
const percentageTotal = document.getElementById("percentage-total");
const resultMessage = document.getElementById("result-message");
const resultIcon = document.getElementById("result-icon");


// Start quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionAnswered = false;

    startScreen.classList.add("hide");
    resultScreen.classList.add("hide");
    quizScreen.classList.remove("hide");

    liveScore.textContent = score;

    displayQuestion();
}


// Display current question
function displayQuestion() {
    clearInterval(timerInterval);

    questionAnswered = false;
    timeLeft = timePerQuestion;

    const currentQuestion = questions[currentQuestionIndex];

    questionCategory.textContent = currentQuestion.category;
    questionElement.textContent = currentQuestion.question;

    questionCount.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    const progressPercentage =
        ((currentQuestionIndex + 1) / questions.length) * 100;

    progressBar.style.width = `${progressPercentage}%`;

    optionsElement.innerHTML = "";

    feedbackElement.textContent = "";
    feedbackElement.className = "feedback hide";

    nextButton.disabled = true;

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "See Results";
    } else {
        nextButton.textContent = "Next Question";
    }

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");

        button.type = "button";
        button.classList.add("option");
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(button, option);
        });

        optionsElement.appendChild(button);
    });

    updateTimerDisplay();
    startTimer();
}


// Handle answer selection
function selectAnswer(selectedButton, selectedAnswer) {
    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    clearInterval(timerInterval);

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    const optionButtons = document.querySelectorAll(".option");

    optionButtons.forEach((button) => {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        } else if (button !== selectedButton) {
            button.classList.add("dimmed");
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;

        selectedButton.classList.add("correct");

        feedbackElement.textContent = "Correct! Nice work.";
        feedbackElement.className = "feedback correct-feedback";
    } else {
        selectedButton.classList.remove("dimmed");
        selectedButton.classList.add("incorrect");

        feedbackElement.textContent =
            `Not quite. The correct answer is ${correctAnswer}.`;

        feedbackElement.className = "feedback incorrect-feedback";
    }

    liveScore.textContent = score;
    nextButton.disabled = false;
}


// Start timer for current question
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;

        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}


// Update timer display
function updateTimerDisplay() {
    timerElement.textContent = timeLeft;

    timerBox.classList.remove("warning", "danger");

    if (timeLeft <= 5) {
        timerBox.classList.add("danger");
    } else if (timeLeft <= 8) {
        timerBox.classList.add("warning");
    }
}


// Handle running out of time
function handleTimeout() {
    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    const optionButtons = document.querySelectorAll(".option");

    optionButtons.forEach((button) => {
        button.disabled = true;

        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
        } else {
            button.classList.add("dimmed");
        }
    });

    feedbackElement.textContent =
        `Time's up. The correct answer is ${correctAnswer}.`;

    feedbackElement.className = "feedback incorrect-feedback";

    nextButton.disabled = false;
}


// Move to next question
function nextQuestion() {
    if (!questionAnswered) {
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}


// Show final results
function showResults() {
    clearInterval(timerInterval);

    quizScreen.classList.add("hide");
    resultScreen.classList.remove("hide");

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    finalPercentage.textContent = `${percentage}%`;

    finalScore.textContent =
        `You answered ${score} out of ${questions.length} questions correctly.`;

    correctTotal.textContent = score;
    incorrectTotal.textContent = questions.length - score;
    percentageTotal.textContent = `${percentage}%`;

    setResultMessage(percentage);
}


// Customize result message
function setResultMessage(percentage) {
    if (percentage === 100) {
        resultMessage.textContent = "Perfect score!";
        resultIcon.textContent = "★";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Excellent work!";
        resultIcon.textContent = "✓";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Nice job!";
        resultIcon.textContent = "✓";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Good effort. Try it again!";
        resultIcon.textContent = "↻";
    } else {
        resultMessage.textContent = "Give it another shot!";
        resultIcon.textContent = "↻";
    }
}


// Restart quiz
function restartQuiz() {
    clearInterval(timerInterval);

    currentQuestionIndex = 0;
    score = 0;
    timeLeft = timePerQuestion;
    questionAnswered = false;

    resultScreen.classList.add("hide");
    startScreen.classList.remove("hide");

    liveScore.textContent = "0";
    progressBar.style.width = "10%";

    timerBox.classList.remove("warning", "danger");
}


// Event listeners
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
