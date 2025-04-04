const questions = [
    {
        question: 'Who is the head of MDR?',
        answers: [
            { text: "Mr. Milchick", correct: false },
            { text: "Mark S", correct: true },
            { text: "Helly R", correct: false },
            { text: "Dylan G", correct: false },
        ]
    },
    {
        question: 'Where is Cobel from?',
        answers: [
            { text: "Kier, PE", correct: false },
            { text: "Delaware", correct: false },
            { text: "The Equator", correct: false },
            { text: "Salt's Neck", correct: true },
        ]
    },
    {
        question: 'What kind of music does Choreography and Merriment play?',
        answers: [
            { text: "Marching Band", correct: true },
            { text: "Defiant Jazz", correct: false },
            { text: "Classical", correct: false },
            { text: "Metal", correct: false },
        ]
    },
    {
        question: 'What is the last thing Irv says to Dylan?',
        answers: [
            { text: "Hang in there!", correct: true },
            { text: "Yes, do it Seth!", correct: false },
            { text: "Go suck your own f*ck", correct: false },
            { text: "Praise Kier", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();