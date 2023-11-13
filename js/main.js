//Set the questions
const questions = []
    {
        question: "What's the best sport in the world?",
        answers: [
            { text: "Swimming", correct: fasle},
            { text: "Rugby", correct: true},
            { text: "Baskeball", correct: false},
            { text: "Football", correct: false},
        ]
    },
    {
        question: "What's the fastest aircraft in the world?",
        answers: [
            { text: "777", correct: fasle},
            { text: "SR-17", correct: true},
            { text: "A380", correct: false},
            { text: "F-16", correct: false},
        ]
    },
    {
        question: "What's the fastest train in the world?",
        answers: [
            { text: "Maglev", correct: true},
            { text: "TGV", correct: true},
            { text: "Shikansen", correct: false},
            { text: "ICE 3", correct: false},
        ]
    },
    {
        question: "What's the best ariline in the world?",
        answers: [
            { text: "Kenya Airways", correct: fasle},
            { text: "Qatar Airways", correct: false},
            { text: "Singapore Airlines", correct: true},
            { text: "Emirates Airlines", correct: false},
        ]
    }
};
//Add variables for the 3 elements
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

//Variables for question index and score
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
//Create showQuestion function
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ", " + currentQuestion.question;
    //Dsiplay answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
   //Call startquiz function to display output
