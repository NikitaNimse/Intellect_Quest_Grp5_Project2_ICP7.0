
const quizData = [
    {
    question : "1) What is the font-size of the h1 heading tag?",
            options : [
                "3.5 em",
                "2.17 em",
                "2 em",
                "1.5 em"
            ],
            answer : "2 em"
        },
        {
            question : "2) Which of the following is the correct way to add background color in HTML?",
            options : [
                "<body color = “green”>",
                "<body bg-color = “green”>",
                "<body style =“background-color=green”>",
                "<body style = “background-color: green;”>"
            ],
            answer : "<body style = “background-color: green;”>"
        },
        {
            question : "3) Which of the following attributes is used to add link to any element?",
            options : [
                "link",
                "ref",
                "href",
                "newref"
            ],
            answer : "href"
        },
        {
            question : "4) Which of the following is the correct way of creating an hyperlink in HTML?",
            options : [
                "<a>www.geeksforgeeks.org <Geeksforgeeks /a>",
                "<a href=“www.geeksforgeeks.org” Geeksforgeeks /a>",
                "<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>",
                "<a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>"
            ],
            answer : "<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>"
        },
        {
            question : "5) Which among the following is the correct way in HTML to insert an image?",
            options : [
                "<img url=“https://bit.ly/2FicgIx”>Geeksforgeeks</img>",
                "<img href=“https://bit.ly/2FicgIx” alt= “Geeksforgeeks”></img>",
                "<img src=“https://bit.ly/2FicgIx” alt=“Geeksforgeeks”>",
                "<image src=“https://bit.ly/2FicgIx” alt=“Geeksforgeeks”></image>"
            ],
            answer : "<img src=“https://bit.ly/2FicgIx” alt=“Geeksforgeeks”>"
        }, 
        {
            question : "6) What is the correct CSS syntax to make all paragraph (p) elements bold?",
            options : [
                "{p font-size:bold;} ",
                "p{font-weight :bold;}",
                "<p style=“font-size=bold;”>",
                "None of the Above"
            ],
            answer : "p{font-weight :bold;}"
        },
        {
            question : "7) Which is the correct syntax to set the unordered-list item marker to a square.",
            options : [
                "<ul style=“list-style-type:square”>",
                "<ul style=“square”>",
                "<ul list-style: “square”>",
                "<ul style=square>"
            ],
            answer : "<ul style=“list-style-type:square”>"
        },
        {
            question : "8) What is the correct representation to change the color of h2 element?",
            options : [
                "h2 { background-color: #008000 }",
                "{h2 background-color: #008000}",
                "h2.all{ background-color: #008000 }",
                "{h2.all background-color: #008000}"
            ],
            answer : "h2 { background-color: #008000 }"
        },
        {
            question : "9) If padding: 10px 5px 20px 0px is given. What does this represent?",
            options : [
                "left:10px , top:5px , right:20px , bottom:0px",
                "top:10px , right:5px , bottom:20px , left:0px",
                "right:10px , bottom:5px , left:20px , top:0px",
                "bottom:10px , left:5px , top:20px , right:0px"
            ],
            answer : "top:10px , right:5px , bottom:20px , left:00px"
        },
        {
            question : "10) Select the correct among the following for linking an external style sheet.",
            options : [
                "<link rel=“stylesheet” type=“text/css” href=“style.css”>",
                "<style rel=“stylesheet” type=“text/css” href=“style.css”>",
                "<link>stylesheet",
                "<link href=“style.css”>stylesheet"
            ],
            answer : "<link rel=“stylesheet” type=“text/css” href=“style.css”>"
        },
        {
            question : "11)What will be the output of the following code snippet let data=’false’; data?console.log(‘first statement’):console.log(‘second statement’);",
            options : [
                "first statement",
                "Second statement",
                "Can’t say",
                "None of the above"
            ],
            answer : "first statement"
        },
        {
            question : "12) The advantages of using strict mode in javascript are",
            options : [
                "Strict mode eliminates some JavaScript silent errors by changing them to throw errors.",
                "It disables features that are confusing or poorly thought out.",
                "Strict mode makes it easier to write “secure” JavaScript.",
                "All of the above"
            ],
            answer : "All of the above"
        },
        {
            question : "13) What will be the output of the following code snippet let data=7 while(data>=0) { if(data<=5) { data--; continue; } console.log(data); data--; }",
            options : [
                "7 6 5 4 3 2 1 0",
                "7 6 5",
                "7 6",
                "0 1 2 3 4 5"
            ],
            answer : "7 6"
        },
        {
            question : "14) What will be the output for the following code snippet for(let i=1; ;i++) { Let data= i*5; console.log(data) if(data>=30) break; }",
            options : [
                "Infinite loop",
                "5 10 15 20 25 30",
                "5 10 15 20 25",
                "5 10 15 20 25 30 35"
            ],
            answer : "5 10 15 20 25 30"
        },
        {
            question : "15) Inside which HTML element do we put the JavaScript?",
            options : [
                "<javascript>",
                "<js>",
                "<src>",
                "<script>"
            ],
            answer : "<script>"
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
