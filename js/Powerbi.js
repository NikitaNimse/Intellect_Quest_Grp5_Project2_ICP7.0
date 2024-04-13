
const quizData = [
    {
        question: " 1. In which year did Microsoft discharge an extra administration called Power BI Embedded?",
        options: [
            "2014",
             "2015", 
             "2016", 
             "2017"
            ],
        answer: "2016"
    },
    {
        question: " 2. The principal arrival of Power BI depended on the… ",
        options: [
            "Microsoft Excel", 
            "Microsoft Word", 
            "Microsoft PowerPoint", 
            "Microsoft Outlook"
        ],
        answer: "Microsoft Excel"
    },
    {
        question: " 3. Power BI was first discharged to the overall population on… ",
        options: [
                    "2013",
                    "2014",
                    "2015",
                    "2016"
                ],
        answer: "2015"
    },
    {
        question: " 4.BI remains for…",
        options: [
                "Business Information",   
                "Business Intelligence", 
                "Business Insider",
                "Business Initiation "
                ],
        answer: "Business Intelligence"
    },
    {
        question: " 5.The free Power BI adaptation has a data limit point of confinement of…",
        options: [
                "512MB/client", 
                "1GB/client", 
                "2GB/client", 
                "3GB/client"
                ],
        answer: "1GB/client"
    },
    {
        question: " 6. The Pro form of Power BI has what number of GB/client?",
        options: [
                    "2GB/client", 
                    "4GB/client", 
                    "6GB/client", 
                    "10GB/client"
                ],
        answer: "10GB/client"
    },
    {
        question: " 7. Power BI Plus is accessible for a month to month membership expense of not as much as what number of US$ per permit?",
        options: [
            "$10.00", 
            "$15.00", 
            "$20.00", 
            "$25.00"
            ],
        answer: "$10.00"
    },
    {
        question: " 8. The Power BI portable application is accessible for all these with the exception of…",
        options: [
            "IOS", 
            "Android", 
            "BlackBerry", 
            "Windows Phone"
        ],
        answer: "BlackBerry"
    },
    {
        question: " 9.Before it was renamed to Power BI, Project Crescent was at first accessible for open download on…",
        options: [
            "July 13, 2012", 
            "July 10, 2011", 
            "July 11, 2011", 
            "July 12, 2012"
        ],
        answer: "July 11, 2011"
    },
    {
        question: " 10. It was initially composed by Ron George in the mid-year of…",
        options: [
            "2009", 
            "2010", 
            "2011", 
            "2012"
            ],
        answer: "2010"
    },
    {
        question: " 11. What area do you go to change and reshape data in Power BI?",
        options: [
            " Data Transformation ", 
            "Data Editing", 
            "Question Editor", 
            "Data Modling"
        ],
        answer: "Data Editing"
    },
    {
        question: " 12.Which isn’t a data compose in Power BI? ",
        options: [
            "General", 
            "Decimal Number", 
            "Data", 
            "Double"
        ],
        answer: "Data"
    },
    {
        question: " 13. What do you use to consolidate inquiries in Power BI?",
        options: [
            "Join Quries", 
            "CUnion Quries", 
            "There is no alternative", 
            "Don't Know"
            ],
        answer: "Join Quries"
    },
    {
        question: " 14. What isn’t a possibility for recommended esteems when characterizing a parameter?",
        options: [
            "Table", 
            "Any value", 
            "Roundown of Values", 
            "I don't know"
            ],
        answer: "Any value"
    },
    {
        question: " 15. In the recipe Total Cost = Sum(‘Fact'[Cost]), what kind of computation should Total Cost be according to best practice?",
        options: [
            "Ascertained section", 
            "Measure", 
            "Variable ", 
            "None of these"
        ],
        answer: "Variable"
    }
    
    // Add more questions as needed
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');

let currentQuestion = 0;
let score = 0;


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
