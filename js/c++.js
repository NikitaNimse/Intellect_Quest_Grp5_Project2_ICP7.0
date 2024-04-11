const quizData = [
    {
        question:' 1. What are containers in C++?',
        options: [' Functions that manipulate data', 'Objects that store data', 'Data types used for calculations', 'Keywords used for control flow']
        ,
        answer: ' Objects that store data'
    },
    {
        question: ' 2. Which library in C++ provides containers?',
        options: ['iostream', 'stdlib', ' vector', 'Standard Template Library (STL)'],
        answer: 'Standard Template Library (STL)'
    },
    {
        question: ' 3. Which of the following is not a container in C++?',
        options: ['Vector', 'Array', 'Queue', 'Tuple'],
        answer: 'Array'
    },
    {
        question: ' 4. What do containers abstract in C++?',
        options: ['Memory allocation', 'Control flow', 'Data structure implementation', ' File operations'],
        answer: 'Data structure implementation'
    },
    {
        question: ' 5. Which container provides constant time insertion and removal of elements at the end?',
        options: ['Vector', 'List', 'Map', ' Set'],
        answer: 'Vector'
    },
    {
        question: ' 6. Which container is implemented as a doubly-linked list?',
        options: ['Vector', 'Stack', ' Queue', '  List'],
        answer: 'List'
    },
    {
        question: '7. Which container stores unique elements in sorted order?',
        options: ['Vector', 'Set', ' Stack', 'Map'],
        answer: 'Set'
    },
    {
        question: '  8. Which container uses First In First Out (FIFO) order for element access',
        options: ['Vector', 'Stack', 'Queue', 'Map'],
        answer: 'Queue'
    },
    {
        question: ' 9. Which container does not allow duplicate elements?',
        options: ['Vector', 'List', 'Set', 'Map'],
        answer: 'Set'
    },
    {
        question: '10 . Which container is implemented as a balanced binary search tree?',
        options: ['Vector', 'List', 'Set', 'Map'],
        answer: 'Set'
    },
    {
        question: '11. What is the purpose of the volatile keyword in C++?',
        options: ['It indicates that a variable cannot be modified', 'It indicates that a variables value may change unexpectedly, so it should not be optimized', ' It specifies that a variable can only be accessed by one thread at a time', 'It is used to declare constant variables'],
        answer: ' It indicates that a variables value may change unexpectedly, so it should not be optimized'
    },
    {
        question: ' 12. What is a reference variable in C++?',
        options: ['A variable that holds the address of another variable', 'A variable that cannot be changed after initialization', 'An alias for another variable', ' A variable used to store only addresses'],
        answer: 'An alias for another variable'
    },
    {
        question: ' 13. What is the role of the "iostream" library in C++?',
        options: [' It provides input and output functionality', 't is used for mathematical operations', ' It is used for string manipulation', ' It defines the main function'],
        answer:  'It provides input and output functionality'
    },
    {
        question: ' 14.  What is the purpose of the "virtual" keyword in C++?',
        options: [' It specifies that a function cannot be overriddenr', 'It indicates that a function is implemented in the derived class', ' It enables runtime polymorphism', ' It declares a function that takes no arguments'],
        answer: 'It enables runtime polymorphism'
    },
    {
        question: '15 . What is the purpose of the "new" operator in C++?',
        options: [' It allocates memory for a new variable', 'It deallocates memory', ' It creates a new instance of a class', 'it is used for dynamic memory allocation'],
        answer: 'it is used for dynamic memory allocationSet'
    },
   
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
        const optionElement = document.createElement('li');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    loadQuestion();
}

document.getElementById('submit-btn').addEventListener('click', loadQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

// Load first question
loadQuestion();
