//Set the questions
const questions = []
    {
        question: "What's the best sport in the world?",
        answers: [
            { text: "Swimming", correct: false},
            { text: "Rugby", correct: true},
            { text: "Baskeball", correct: false},
            { text: "Football", correct: false},
        ]
    },
    {
        question: "What's the fastest aircraft in the world?",
        answers: [
            { text: "777", correct: false},
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
            { text: "Kenya Airways", correct: false},
            { text: "Qatar Airways", correct: false},
            { text: "Singapore Airlines", correct: true},
            { text: "Emirates Airlines", correct: false},
        ]
    }
];
//Add variables for the 3 elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
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
    resetState();//Display previous question and answer
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ", " + currentQuestion.question;
    //Dsiplay answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){//Add true or false in data set correct
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);//Add click function
    });
}
   //Call startquiz function to display output
    function resetState(){//Define this function
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);//Will remove all previous answers
        }
    }
function selectAnswer(e){//Define selectAnswer function
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;//Disble click after selecting one answer, when we choose wrong answer it should automatically highlight right answer
    });
    nextButton.style.display = "block";//Display next button to go to next question

}
    startQuiz();
