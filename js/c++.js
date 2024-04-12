const quizData = [
    {
        question:' 1. What are containers in C++?',
        options: ['A) Functions that manipulate data', ' B) Objects that store data', ' C) Data types used for calculations', ' D) Keywords used for control flow']
        ,
        answer: ' Objects that store data'
    },
    {
        question: ' 2. Which library in C++ provides containers?',
        options: ['A) iostream', 'B)stdlib', ' C) vector', ' D) Standard Template Library (STL)'],
        answer: 'Standard Template Library (STL)'
    },
    {
        question: ' 3. Which of the following is not a container in C++?',
        options: ['A) Vector', ' B) Array', 'C) Queue', 'D) Tuple'],
        answer: 'Array'
    },
    {
        question: ' 4. What do containers abstract in C++?',
        options: ['A) Memory allocation', 'B) Control flow', 'C) Data structure implementation', 'D) File operations'],
        answer: 'Data structure implementation'
    },
    {
        question: ' 5. Which container provides constant time insertion and removal of elements at the end?',
        options: ['A) Vector', 'B) List', 'C)Map', 'D) Set'],
        answer: 'Vector'
    },
    {
        question: ' 6. Which container is implemented as a doubly-linked list?',
        options: ['A) Vector', 'B)Stack', 'C) Queue', '  D)List'],
        answer: 'List'
    },
    {
        question: '7. Which container stores unique elements in sorted order?',
        options: ['A) Vector', 'B) Set', ' C)Stack', 'D)Map'],
        answer: 'Set'
    },
    {
        question: '  8. Which container uses First In First Out (FIFO) order for element access',
        options: ['A)Vector', 'B) Stack', 'C) Queue', 'D) Map'],
        answer: 'Queue'
    },
    {
        question: ' 9. Which container does not allow duplicate elements?',
        options: ['A) Vector', 'B) List', 'C) Set', 'D)Map'],
        answer: 'Set'
    },
    {
        question: '10 . Which container is implemented as a balanced binary search tree?',
        options: ['A)Vector', 'B) List', 'C) Set', 'D) Map'],
        answer: 'Set'
    },
    {
        question: '11. What is the purpose of the volatile keyword in C++?',
        options: ['A) It indicates that a variable cannot be modified', 'B) It indicates that a variables value may change unexpectedly, so it should not be optimized', 'C)  It specifies that a variable can only be accessed by one thread at a time', 'D) It is used to declare constant variables'],
        answer: ' It indicates that a variables value may change unexpectedly, so it should not be optimized'
    },
    {
        question: ' 12. What is a reference variable in C++?',
        options: ['A) A variable that holds the address of another variable', ' B) A variable that cannot be changed after initialization', 'C) An alias for another variable', ' D) variable used to store only addresses'],
        answer: 'An alias for another variable'
    },
    {
        question: ' 13. What is the role of the "iostream" library in C++?',
        options: [' A) It provides input and output functionality', 'B) t is used for mathematical operations', ' C)It is used for string manipulation', ' D)It defines the main function'],
        answer:  'It provides input and output functionality'
    },
    {
        question: ' 14.  What is the purpose of the "virtual" keyword in C++?',
        options: [' A) specifies that a function cannot be overriddenr', 'B)It indicates that a function is implemented in the derived class', ' C)It enables runtime polymorphism', 'D) It declares a function that takes no arguments'],
        answer: 'It enables runtime polymorphism'
    },
    {
        question: '15 . What is the purpose of the "new" operator in C++?',
        options: [' A)It allocates memory for a new variable', 'B) It deallocates memory', ' C) It creates a new instance of a class', 'D) it is used for dynamic memory allocation'],
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
