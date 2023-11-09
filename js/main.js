//Set the questions
const questions = {
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
const questionElement = document.getElementById("answer-button")
