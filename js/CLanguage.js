
const quizData = [
    {
        question: " 1. Who is the father of C Langauge ?",
        options: ["Steve Jobs", "Dennis Ritchie", "James Gosling", "Rasmus Lerdorf"],
        answer: "Dennis Ritchie"
    },
    {
        question: " 2. Which of the following is not a valid C variable name ?",
        options: ["int number;", "float rate;", "int variable_count;", "int $main;"],
        answer: "int $main; "
    },
    {
        question: " 3. Which is valid C expression ?",
        options: [" int my_num = 100,000;", " int my_num = 100000;", " int my num = 1000;", "int $my_num = 100000;"],
        answer: "int my_num = 100000"
    },
    {
        question: " 4. How is the range if a dataset calculator ?",
        options: ["The diffrence between the blargest and smallest values", "The sum of all values", "The product od all value", "The average of all values"],
        answer: "The diffrence between the blargest and smallest values"
    },
    {
        question: " 5. What does a histogram visualize ?",
        options: ["Relationship between two variable", "Distribution of a single variable", "Hierarchical data structures", "Time-series data"],
        answer: "Distribution of a single variable"
    },
    {
        question: " 6. What is the purpose of correlation in data analysis ?",
        options: ["Causation between variable", "Descibing the spread of data", "Measuring the strengeth and direction of a linear relationship", "Identify outlier"],
        answer: "Measuring the strengeth and direction of a linear relationship"
    },
    {
        question: " 7. In data analysis , What does the term 'skewness' measure ?",
        options: ["The symmetry od a distribution", "The spread of data", "The correlation between two variables", "The presence of outlier"],
        answer: "The symmetry od a distribution"
    },
    {
        question: " 8. What is the significace of the term Standard deviation ?",
        options: ["Measurig central tendency", "Describing the spread or dispersion of data", "Identifying the most frequen value", "Represnting the range value"],
        answer: "Describing the spread or dispersion of data"
    },
    {
        question: " 9. What is is the purpose of a box plot in data analysis ?",
        options: ["Reprenting the distribution of a single variable", "Showng the realtion between two variable", "Identifying outliers and displaying the spread of data", "Displaying hirarchical realtionships"],
        answer: "Identifying outliers and displaying the spread of data"
    },
    {
        question: " 10. What is the primary goal of hypothesis testing in data analysis ?",
        options: ["Descrining the central tendency of data ", "Identifying outliers", "Making predictions", "Drawing inference about population based on sample data"],
        answer: "Drawing inference about population based on sample data"
    },
    {
        question: " 11. What is the purpose of the term Multicollinearity in regression analysis ?",
        options: ["Identifing outlier in a dataset", "Assessing the spread of data", "Evaluation thr correlation between predircetion variables", "Handling missing values i regression models"],
        answer: "Evaluation thr correlation between predircetion variables"
    },
    {
        question: " 12. How does the term Ensemble Learning improve model performing in machine learning ?",
        options: ["Reducing model complexity", "Combining prediction from multiple models", "Handeling outlier by giving less weight to extreme values", "Ensuring that features contribute  equally to a model"],
        answer: "Combining prediction from multiple models"
    },
    {
        question: " 13. What is the purpose of th term Hierarchical Clustering n clustering analysis ?",
        options: ["Assessing the correlation between clusters ", "Creating a hierarchy of clusters based on similarities", "Identifying outliers in clustered data", "Measuring the similarity within clusters"],
        answer: "Creating a hierarchy of clusters based on similarities"
    },
    {
        question: " 14. What does th term Confidence interval Represent in statistical analysis ?",
        options: ["The range of valu witin which a population parameter is estimated to lie", "The average of sample values", "The proportion of data falling within a specifed range", "The standard eror of the mean"],
        answer: "The range of valu witin which a population parameter is estimated to lie"
    },
    {
        question: " 15. What is the primary purpose of the term Confusion Matrix in classification problems ?",
        options: ["Assessing multicollonearity in regression model", "Evaluating the distribution of residuals", "Summarizing the performance od a classification model ", "Identifying outlier in a dataset"],
        answer: "Summarizing the performance od a classification model"
    }
    
    // Add more questions as needed
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
// const submitButton = document.getElementById("submitBtn");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    q.options.forEach((option, index) => {
        const optionElement = document.createElement("radio");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => {
            selectOption(option);
        });
        optionsContainer.appendChild(optionElement);
    });
}
console.log(quizData);


function selectOption(option) {
    const q = quizData[currentQuestion];
    if (option === q.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) { //this point need to edit
        displayQuestion();
    } 
    else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    document.getElementById("score").textContent = `You scored ${score} out of ${quizData.length}.`;
}

displayQuestion();

submitButton.addEventListener("click", () => {
    if (currentQuestion < quizData.length) {
        selectOption(null); // No option selected
    }
});
