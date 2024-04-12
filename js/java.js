const quizData = [
    {
        question : "1. Which of the following is NOT a primitive data type in Java?",
        options : [ "int",
            "String",
            "boolean",
            "char"
        ],
        answer : "String"
    },
    {
        question : "2. What is the keyword used to define a class in Java?",
        options : [
            "function",
            "define",
            "class",
            "create"
        ],
        answer : "class"
    },
    {
        question : "3. What is the purpose of the Java Virtual Machine (JVM)?",
        options : [
            "To write Java code",
            "To compile Java code into bytecode",
            "To execute bytecode on different platforms",
            "All of the above"
        ],
        answer : "To execute bytecode on different platforms"
    },
    {
        question : "4. What keyword is used to create an object in Java?",
        options : [
            "new",
            "create",
            "instance",
            "define"
        ],
        answer : "new"
    },
    {
        question : "5. Which concept allows for reusing code with different functionalities in Java?",
        options : [
            "Inheritance",
            "Variables",
            "Loops",
            "Comments"
        ],
        answer : "Inheritance"
    },
    {
        question : "6. What keyword is used to create a loop that continues as long as a condition is true?",
        options : [
            "if",
            "for",
            "do-while",
            "All of the above"
        ],
        answer : "for"
    },
    {
        question : "7. What is the access modifier that restricts access to a class member within the same package?",
        options : [
            "public",
            "private",
            "default",
            "protected"
        ],
        answer : "private"
    },
    {
        question : "8. Which method is automatically called when a garbage collector reclaims an object's memory?",
        options : [
            "main",
            "finalize",
            "destroy",
            "clean"
        ],
        answer : "finalize"
    },
    {
        question : "9.What is the difference between method overloading and overriding?",
        options : [
            "Overriding changes the return type, overloading doesn't.",
            "Overloading changes the return type, overriding doesn't",
            " There is no difference",
            "None of the above"
        ],
        answer : "Overloading changes the return type, overriding doesn't"
    },
    {
        question : "10. What is an interface in Java?",
        options : [
            "A way to group related variables",
            "A keyword used for conditional statements",
            "A collection of methods that must be implemented by a class ",
            "None of the above"
        ],
        answer :"A collection of methods that must be implemented by a class "
    },
    {
        question : "11. What is the main method used for in a Java program?",
        options : [
            "To define the program's entry point",
            "To declare variables",
            "To create object",
            "To define class"
        ],
        answer : " To define the program's entry point"
    },
    {
        question : "12. What is the String class used for in Java?",
        options : [
            "To perform mathematical calculation",
            "To store and manipulate text data",
            "To define user input",
            "To create loops"
        ],
        answer : "To store and manipulate text data"
    },
    {
        question : "13. What is the difference between ++x and x++?",
        options : [
            "There is no difference",
            "++x increments x before the value is used, x++ increments x after the value is used.",
            "++x can only be used with integers, x++ can be used with any data type.",
            "++x is used for pre-increment, x++ is used for post-decrement."
        ],
        answer : "++x increments x before the value is used, x++ increments x after the value is used."
    },
    {
        question : "14. Which is the correct syntax for creating an array in Java?",
        options : [
            " int[] numbers = {1, 2, 3};",
            "int numbers = {1, 2, 3};",
            "array numbers = new int[3]; {1, 2, 3};",
            "None of the Above"
        ],
        answer : " int[] numbers = {1, 2, 3};"
    },
    {
        question : "15. What is an exception in Java?",
        options : [
            "A way to comment out code",
            "An error in the code that prevents compilation ",
            " A loop that repeats infinitely",
            " A variable that can store different data types"
        ],
        answer : "An error in the code that prevents compilation"
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
