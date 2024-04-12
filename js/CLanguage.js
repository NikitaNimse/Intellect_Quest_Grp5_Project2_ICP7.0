const quizData = [
    {
        question : "1. Who is the father of C Language ?",
        options : [ "Steve Jobs",
            "Dennis Retchie",
            "James Gosling",
            "Rasmus Lerdorf"
        ],
        answer : "Dennis Retchie "
    },
    {
        question : "2. Which of the following declaration is not supported in C Langauge?",
        options : [
            "string str;",
            "char *str;",
            "float str = 3e2;",
            "All of the above"
        ],
        answer : "string str;"
    },
    {
        question : "3. Which symbol is used to define a pointer in C Language ?",
        options : [
            " = ",
            " ' ",
            " * ",
            "None of the above"
        ],
        answer : " * "
    },
    {
        question : "4. Which keyword is prevent any changes in the variable within C language ?",
        options : [
            "enum",
            "mutable",
            "const",
            "volatile"
        ],
        answer : "const"
    },
    {
        question : "5. which of the following cannot be a variable name in C Language ?",
        options : [
            "volatile",
            "true",
            "friend",
            "export"
        ],
        answer : "volatile"
    },
    {
        question : "6. What is #include<stdio.h> in C Language ?",
        options : [
            "file inclusion",
            "inclusion directive ",
            "Preprocessor directive",
            "None of the above"
        ],
        answer : "Preprocessor directive "
    },
    {
        question : "7. functions can return enumeration constants in C Language?",
        options : [
            "true",
            "false",
            "depends on standard",
            "depends on compiler"
        ],
        answer : "true"
    },
    {
        question : "8. What is an example of iteration in C Language?",
        options : [
            "for",
            "while",
            "do-while",
            "All of the above"
        ],
        answer : "All of the above "
    },
    {
        question : "9. All keywords in C Language are in___?",
        options : [
            "LowerCase",
            " UpperCase",
            " CamelCase",
            "None of the above"
        ],
        answer : "LoweCase"
    },
    {
        question : "10. Which of the following are C preprocessors?",
        options : [
            "#ifdef",
            "#define",
            "#endif",
            "All of the above"
        ],
        answer :" All of the above  "
    },
    {
        question : "11. Which of the following is not possible statically in C Language?",
        options : [
            "Jagged Array",
            "Rectangular Array",
            "Cuboidal Array",
            "Multidimensional Array"
        ],
        answer : " Jagged Array"
    },
    {
        question : "12. In C Language, FILE is of which data type?",
        options : [
            "int",
            "char",
            "float",
            "Struct"
        ],
        answer : " Struct"
    },
    {
        question : "13. Which of the following is not an operator in C?",
        options : [
            " K ",
            "sizeof()",
            "~",
            "None of the above"
        ],
        answer : "None of the above "
    },
    {
        question : "14. scanf() is predefined function in_________header file?",
        options : [
           "stdlib.h",
           "ctype.h",
           "stdio.h",
           "stdarg.h"
        ],
        answer : " stdio.h"
    },
    {
        question : "15.What is the size of the int data type?",
                                                                    
        options : [
            "5",
            "1 ",
            " 4",
            " 3"
        ],
        answer : "4"
    } 
]


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
