
const quizData = [
    {
        question: " 1. What is the primary goal of data analytics ?",
        options: [
            "A) making prediction",
             "B) summarizing and interpreting", 
             "C) Designing", 
             "D) Data visualization"
            ],
        answer: "B) summarizing and interpreting"
    },
    {
        question: " 2. What is the diffrence between mean and median ?",
        options: [
            "A) Mean is the middle value:median is the average", 
            "B) Mean is the average : median is middle value.", 
            "C) Both represnt the average", 
            "D) Mean and median are used inerchangeably"
        ],
        answer: "B) Mean is the average : median is middle value."
    },
    {
        question: " 3. What does the term outlier mean in data analysis ?",
        options: [
                    "A) The most common value in a database ", 
                    "B) Unusual or extreme value in a databse", 
                    "C) The diffrence between mean and median", 
                    "D) The last valu in a sortd dataset"
                ],
        answer: "B) Unusual or extreme value in a databse"
    },
    {
        question: " 4. How is the range if a dataset calculator ?",
        options: [
                "A) The diffrence between the blargest and smallest values",   
                "B) The sum of all values",
                "C)The product od all value", 
                "D) The average of all values"
                ],
        answer: "A) The diffrence between the blargest and smallest values"
    },
    {
        question: " 5. What does a histogram visualize ?",
        options: [
                "A) Relationship between two variable", 
                "B) Distribution of a single variable", 
                "C) Hierarchical data structures", 
                "D) Time-series data"
                ],
        answer: "B) Distribution of a single variable"
    },
    {
        question: " 6. What is the purpose of correlation in data analysis ?",
        options: [
                    "A) Causation between variable", 
                    "B) Descibing the spread of data", 
                    "C) Measuring the strengeth and direction of a linear relationship", 
                    "D) Identify outlier"
                ],
        answer: "C) Measuring the strengeth and direction of a linear relationship"
    },
    {
        question: " 7. In data analysis , What does the term 'skewness' measure ?",
        options: [
            "A) The symmetry od a distribution", 
            "B) The spread of data", 
            "C) The correlation between two variables", 
            "D)The presence of outlier"
            ],
        answer: "A) The symmetry od a distribution"
    },
    {
        question: " 8. What is the significace of the term Standard deviation ?",
        options: [
            "A) Measurig central tendency", 
            "B) Describing the spread or dispersion of data", 
            "C) Identifying the most frequen value", 
            "D) Represnting the range value"
        ],
        answer: "B) Describing the spread or dispersion of data"
    },
    {
        question: " 9. What is is the purpose of a box plot in data analysis ?",
        options: [
            "A) Reprenting the distribution of a single variable", 
            "B) Showng the realtion between two variable", 
            "C) Identifying outliers and displaying the spread of data", 
            "D) Displaying hirarchical realtionships"
        ],
        answer: "C) Identifying outliers and displaying the spread of data"
    },
    {
        question: " 10. What is the primary goal of hypothesis testing in data analysis ?",
        options: [
            "A) Descrining the central tendency of data ", 
            "B) Identifying outliers", 
            "C) Making predictions", 
            "D) Drawing inference about population based on sample data"
            ],
        answer: "D) Drawing inference about population based on sample data"
    },
    {
        question: " 11. What is the purpose of the term Multicollinearity in regression analysis ?",
        options: [
            "A) Identifing outlier in a dataset", 
            "B) Assessing the spread of data", 
            "C) Evaluation thr correlation between predircetion variables", 
            "D) Handling missing values i regression models"
        ],
        answer: "C) Evaluation thr correlation between predircetion variables"
    },
    {
        question: " 12. How does the term Ensemble Learning improve model performing in machine learning ?",
        options: [
            "A) Reducing model complexity", 
            "B) Combining prediction from multiple models", 
            "C) Handeling outlier by giving less weight to extreme values", 
            "D) Ensuring that features contribute  equally to a model"
        ],
        answer: "B) Combining prediction from multiple models"
    },
    {
        question: " 13. What is the purpose of th term Hierarchical Clustering n clustering analysis ?",
        options: [
            "A) Accessing the correlation between clusters ", 
            "B) Creating a hierarchy of clusters based on similarities", 
            "C) Identifying outliers in clustered data", 
            "D) Measuring the similarity within clusters"
            ],
        answer: "B) Creating a hierarchy of clusters based on similarities"
    },
    {
        question: " 14. What does th term Confidence interval Represent in statistical analysis ?",
        options: [
            "A) The range of valu witin which a population parameter is estimated to lie", 
            "B) The average of sample values", 
            "C) The proportion of data falling within a specifed range", 
            "D) The standard eror of the mean"
            ],
        answer: "A) The range of valu witin which a population parameter is estimated to lie"
    },
    {
        question: " 15. What is the primary purpose of the term Confusion Matrix in classification problems ?",
        options: [
            "A) Assessing multicollonearity in regression model", 
            "B) Evaluating the distribution of residuals", 
            "C) Summarizing the performance od a classification model ", 
            "D) Identifying outlier in a dataset"
        ],
        answer: "D) Summarizing the performance od a classification model"
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
