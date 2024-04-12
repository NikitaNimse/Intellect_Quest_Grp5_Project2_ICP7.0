const quizData = [
    {
        question : "1. Which of the following is NOT a primitive data type in Java?",
        options : [ 
            "A) int",
            "B) String",
            "C) boolean",
            "D) char"
        ],
        answer : "B) String"
    },
    {
        question : "2. What is the keyword used to define a class in Java?",
        options : [
            "A) function",
            "B) define",
            "C) class",
            "D) create"
        ],
        answer : "C) class"
    },
    {
        question : "3. What is the purpose of the Java Virtual Machine (JVM)?",
        options : [
            "A) To write Java code",
            "B) To compile Java code into bytecode",
            "C) To execute bytecode on different platforms",
            "D) All of the above"
        ],
        answer : "C) To execute bytecode on different platforms"
    },
    {
        question : "4. What keyword is used to create an object in Java?",
        options : [
            "A) new",
            "B) create",
            "C) instance",
            "D) define"
        ],
        answer : "A) new"
    },
    {
        question : "5. Which concept allows for reusing code with different functionalities in Java?",
        options : [
            "A) Inheritance",
            "B) Variables",
            "C) Loops",
            "D) Comments"
        ],
        answer : "A) Inheritance"
    },
    {
        question : "6. What keyword is used to create a loop that continues as long as a condition is true?",
        options : [
            "A) if",
            "B) for",
            "C) do-while",
            "D) All of the above"
        ],
        answer : "B) for"
    },
    {
        question : "7. What is the access modifier that restricts access to a class member within the same package?",
        options : [
            "A) public",
            "B) private",
            "C) default",
            "D) protected"
        ],
        answer : "B) private"
    },
    {
        question : "8. Which method is automatically called when a garbage collector reclaims an object's memory?",
        options : [
            "A) main",
            "B) finalize",
            "C) destroy",
            "D) clean"
        ],
        answer : "B) finalize"
    },
    {
        question : "9.What is the difference between method overloading and overriding?",
        options : [
            "A) Overriding changes the return type, overloading doesn't.",
            "B) Overloading changes the return type, overriding doesn't",
            "C) There is no difference",
            "D) None of the above"
        ],
        answer : "B) Overloading changes the return type, overriding doesn't"
    },
    {
        question : "10. What is an interface in Java?",
        options : [
            "A) A way to group related variables",
            "B) A keyword used for conditional statements",
            "C) A collection of methods that must be implemented by a class ",
            "D) None of the above"
        ],
        answer :"C) A collection of methods that must be implemented by a class "
    },
    {
        question : "11. What is the main method used for in a Java program?",
        options : [
            "A) To define the program's entry point",
            "B) To declare variables",
            "C) To create object",
            "D) To define class"
        ],
        answer : "A) To define the program's entry point"
    },
    {
        question : "12. What is the String class used for in Java?",
        options : [
            "A) To perform mathematical calculation",
            "B) To store and manipulate text data",
            "C) To define user input",
            "D) To create loops"
        ],
        answer : "B) To store and manipulate text data"
    },
    {
        question : "13. What is the difference between ++x and x++?",
        options : [
            "A) There is no difference",
            "B) ++x increments x before the value is used, x++ increments x after the value is used.",
            "C) ++x can only be used with integers, x++ can be used with any data type.",
            "D) ++x is used for pre-increment, x++ is used for post-decrement."
        ],
        answer : "B) ++x increments x before the value is used, x++ increments x after the value is used."
    },
    {
        question : "14. Which is the correct syntax for creating an array in Java?",
        options : [
            "A) int[] numbers = {1, 2, 3};",
            "B) int numbers = {1, 2, 3};",
            "C) array numbers = new int[3]; {1, 2, 3};",
            "D) None of the Above"
        ],
        answer : "A) int[] numbers = {1, 2, 3};"
    },
    {
        question : "15. What is an exception in Java?",
        options : [
            "A) A way to comment out code",
            "B) An error in the code that prevents compilation ",
            "C) A loop that repeats infinitely",
            "D) A variable that can store different data types"
        ],
        answer : "B) An error in the code that prevents compilation"
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
    confirm("Are you sure you want to restart java quiz ?");
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
