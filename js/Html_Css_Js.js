
const quizData = [
    {
    question : "1) What is the font-size of the h1 heading tag?",
            options : [
                "a) 3.5 em",
                "b) 2.17 em",
                "c) 2 em",
                "d) 1.5 em"
            ],
            answer : "b) 2 em"
        },
        {
            question : "2) Which of the following is the correct way to add background color in HTML?",
            options : [
                "a) <body color = “green”>",
                "b)<body bg-color = “green”>",
                "c) <body style =“background-color=green”>",
                "d) <body style = “background-color: green;”>"
            ],
            answer : "d) <body style = “background-color: green;”>"
        },
        {
            question : "3) Which of the following attributes is used to add link to any element?",
            options : [
                "a) link",
                "b) ref",
                "c) href",
                "d) newref"
            ],
            answer : "c) href"
        },
        {
            question : "4) Which of the following is the correct way of creating an hyperlink in HTML?",
            options : [
                "a) <a>www.geeksforgeeks.org <Geeksforgeeks /a>",
                "b) <a href=“www.geeksforgeeks.org” Geeksforgeeks /a>",
                "c) <a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>",
                "d) <a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>"
            ],
            answer : "c) <a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>"
        },
        {
            question : "5) Which among the following is the correct way in HTML to insert an image?",
            options : [
                "a) <img url=“https://bit.ly/2FicgIx”>Geeksforgeeks</img>",
                "b) <img href=“https://bit.ly/2FicgIx” alt= “Geeksforgeeks”></img>",
                "c) <img src=“https://bit.ly/2FicgIx” alt=“Geeksforgeeks”>",
                "d) <image src=“https://bit.ly/2FicgIx” alt=“Geeksforgeeks”></image>"
            ],
            answer : "c) <img src=“https://bit.ly/2FicgIx” alt=“Geeksforgeeks”>"
        }, 
        {
            question : "6) What is the correct CSS syntax to make all paragraph (p) elements bold?",
            options : [
                "a) {p font-size:bold;} ",
                "b) p{font-weight :bold;}",
                "c) <p style=“font-size=bold;”>",
                "d) None of the Above"
            ],
            answer : "b) p{font-weight :bold;}"
        },
        {
            question : "7) Which is the correct syntax to set the unordered-list item marker to a square.",
            options : [
                "a) <ul style“list-style-type:square”>",
                "b) <ul style=“square”>",
                "c) <ul list-style: “square”>",
                "d) <ul style=square>"
            ],
            answer : "a) <ul style=“list-style-type:square”>"
        },
        {
            question : "8) What is the correct representation to change the color of h2 element?",
            options : [
                "a) h2 { background-color: #008000 }",
                "b) {h2 background-color: #008000}",
                "c) h2.all{ background-color: #008000 }",
                "d) {h2.all background-color: #008000}"
            ],
            answer : "a) h2 { background-color: #008000 }"
        },
        {
            question : "9) If padding: 10px 5px 20px 0px is given. What does this represent?",
            options : [
                "a) left:10px , top:5px , right:20px , bottom:0px",
                "b) top:10px , right:5px , bottom:20px , left:0px",
                "c) right:10px , bottom:5px , left:20px , top:0px",
                "d) bottom:10px , left:5px , top:20px , right:0px"
            ],
            answer : "b) top:10px , right:5px , bottom:20px , left:0px"
        },
        {
            question : "10) Select the correct among the following for linking an external style sheet.",
            options : [
                "a) <link rel=“stylesheet” type=“text/css” href=“style.css”>",
                "b) <style rel=“stylesheet” type=“text/css” href=“style.css”>",
                "c) <link>stylesheet",
                "d) <link href=“style.css”>stylesheet"
            ],
            answer : "a) <link rel=“stylesheet” type=“text/css” href=“style.css”>"
        },
        {
            question : "11)What will be the output of the following code snippet let data=’false’; data?console.log(‘first statement’):console.log(‘second statement’);",
            options : [
                "a) first statement",
                "b) Second statement",
                "c) Can’t say",
                "d) None of the above"
            ],
            answer : "a) first statement"
        },
        {
            question : "12) The advantages of using strict mode in javascript are",
            options : [
                "a) Strict mode eliminates some JavaScript silent errors by changing them to throw errors.",
                "b) It disables features that are confusing or poorly thought out.",
                "c) Strict mode makes it easier to write “secure” JavaScript.",
                "d) All of the above"
            ],
            answer : "d) All of the above"
        },
        {
            question : "13) What will be the output of the following code snippet let data=7 while(data>=0) { if(data<=5) { data--; continue; } console.log(data); data--; }",
            options : [
                "a) 7 6 5 4 3 2 1 0",
                "b) 7 6 5",
                "c) 7 6",
                "d) 0 1 2 3 4 5"
            ],
            answer : "c) 7 6"
        },
        {
            question : "14) What will be the output for the following code snippet for(let i=1; ;i++) { Let data= i*5; console.log(data) if(data>=30) break; }",
            options : [
                "a) Infinite loop",
                "b) 5 10 15 20 25 30",
                "c) 5 10 15 20 25",
                "d) 5 10 15 20 25 30 35"
            ],
            answer : "b) 5 10 15 20 25 30"
        },
        {
            question : "15) Inside which HTML element do we put the JavaScript?",
            options : [
                "a) <javascript>",
                "b) <js>",
                "c) <src>",
                "d) <script>"
            ],
            answer : "d)<script>"
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
