const quizData = [
    {
        question:' 1. Which of the following statements is true about Python?',
        options: [' It is a compiled language', ' It is a dynamically typed language', 'It is primarily used for system programming', 'It is not open source'],
        
        answer: '  It is a dynamically typed language'
    },
    {
        question: ' 2. Which of the following statements is true about Python list and tuple?',
        options: ['Lists are immutable, and tuples are mutable', ' Lists are mutable, and tuples are immutable', 'Both lists and tuples are mutable', ' Both lists and tuples are immutable'],
        answer: 'Lists are mutable, and tuples are immutable'
    },
    {
        question: ' 3. Which of the following is used to create a dictionary comprehension in Python?',
        options: ['{key: value for (key, value) in iterable}', '[key: value for (key, value) in iterable]', '{value: key for (key, value) in iterable}', '(key: value for (key, value) in iterable)'],
        answer: '{key: value for (key, value) in iterable}'
    },
    {
        question: ' 4.Which of the following statements is true about the "pass" statement in Python?',
        options: ['It does nothing and acts as a placeholder', ' It raises an exception', ' It terminates the program', '  It is used to define a function'],
        answer: 'It does nothing and acts as a placeholder'
    },
    {
        question: ' 5. What is the purpose of the "super()" function in Python?',
        options: ['To call the superclass constructor', 'To call the subclass constructor', 'To instantiate an object', ' To access class attributes'],
        answer: 'To call the superclass constructor'
    },
    {
        question: ' 6.What is the purpose of the "init" method in Python classes?',
        options: ['To initialize class attributes', 'To define a destructor', 'To define class methods', ' To define static methods'],
        answer: 'To initialize class attributes'
    },
    {
        question: '7.Which of the following is not a valid data type in Python?',
        options: [' Complex', 'Boolean', 'Float', 'Decimal'],
        answer: 'Decimal'
    },
    {
        question: '  8. What does the '==', '!=', '<', '>', '<=', and '>=' operators do in Python?',
        options: ['Comparison', ' Assignment', ' Logical', 'Bitwise'],
        answer: 'Comparison'
    },
    {
        question: ' 9. Which of the following is the correct way to declare a variable in Python?',
        options: ['var x;', ' x = var;', 'x := var;', 'x = 5;'],
        answer: ' x = 5;'
    },
    {
        question: '10 . What does the "len()" function do in Python?',
        options: ['Returns the length of a string', 'Returns the length of a list or tuple', 'Returns the length of a dictionary', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: '11.Which of the following data types is immutable in Python?',
        options: [' List', ' Dictionary', 'Tuple', 'Set'],
        answer: 'Tuple'
    },
    {
        question: ' 12. What does the "range()" function in Python do?',
        options: ['Generates a range of numbers as a list', 'Returns a list of integers', 'Creates an iterable sequence of numbers', ' Performs arithmetic operations'],
        answer: 'Creates an iterable sequence of numbers'
    },
    {
        question: ' 13. What is the purpose of the "if" statement in Python?',
        options: [' To loop over a sequence of numbers', ' To define a function', ' To perform conditional execution', ' To create a dictionary'],
        answer:  'To perform conditional execution'
    },
    {
        question: ' 14. Which of the following is true about Python "for" loop?',
        options: [' It can only iterate over lists', 'It can iterate over any iterable object', ' It can only iterate over dictionaries', ' It can only iterate over tuples'],
        answer: 'It can iterate over any iterable object'
    },
    {
        question: '15 . Which of the following is not a valid data type in Python?',
        options: ['  Complex', ' Boolean', ' Float', 'Decimal'],
        answer: ' Decimal'
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
