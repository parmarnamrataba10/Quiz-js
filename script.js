
let quizQuestions = [
    {
        question: "What is the output of 5 == '5' in JavaScript?",
        options: ["true", "false", "undefined", "Error"],
        correctAns: 0
    },
    {
        question: "Which method converts a string to lowercase?",
        options: ["toUpperCase()", "toLowerCase()", "lower()", "changeCase()"],
        correctAns: 1
    },
    {
        question: "What does the push() method return?",
        options: [
            "The removed element",
            "The array length after adding",
            "The first element",
            "A new array"
        ],
        correctAns: 1
    },
    {
        question: "Which loop executes at least once even if the condition is false?",
        options: ["for loop", "while loop", "do...while loop", "for...in loop"],
        correctAns: 2
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
        correctAns: 1
    },
    {
        question: "What is the output of Boolean(0)?",
        options: ["true", "false", "0", "undefined"],
        correctAns: 1
    },
    {
        question: "Which method joins array elements into a string?",
        options: ["join()", "concat()", "split()", "slice()"],
        correctAns: 0
    },
    {
        question: "What does addEventListener() do?",
        options: [
            "Creates an HTML element",
            "Adds an event handler to an element",
            "Deletes an event",
            "Changes CSS automatically"
        ],
        correctAns: 1
    },
    {
        question: "Which keyword is used to handle errors with exceptions?",
        options: ["check...error", "if...else", "try...catch", "do...while"],
        correctAns: 2
    },
    {
        question: "What is the output of typeof undefined?",
        options: ["null", "object", "undefined", "boolean"],
        correctAns: 2
    }
];

const qns = document.getElementById("qns");
var currentIndex = 0;

function questionNumber(){

    qns.innerText = quizData[currentIndex].qns;



}
questionNumber()


