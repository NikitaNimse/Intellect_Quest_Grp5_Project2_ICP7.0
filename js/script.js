function darkMode(){
    const imgdark=document.getElementById('img-dark');
    imgdark.classList.add('active');

    const imglight=document.getElementById('img-light');
    imglight.classList.remove('active');

    const bodyelement=document.getElementById('body');
    bodyelement.classList.add('theme-dark');
    const bodylelement=document.getElementById('body');
    bodylelement.classList.remove('theme-light');

}
function lightMode(){
    const imglight=document.getElementById('img-light');
    imglight.classList.add('active');

    const imgdark=document.getElementById('img-dark');
    imgdark.classList.remove('active');

    const bodylelement=document.getElementById('body');
    bodylelement.classList.add('theme-light');
    const bodyelement=document.getElementById('body');
    bodyelement.classList.remove('theme-dark');

    // timer
    const startingMinutes = 30;
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById('timer');

    setInterval(Updatecountdown, 1000);


    function Updatecountdown() {
        const min = Math.floor(time / 60);
        let sec = time % 60;

        sec = sec < 10 ? '0' + sec : sec;

        countdownEl.innerHTML = `Time Left: ${ min }: ${ sec }`;
        time--;
    }
    // timer end
    
}


const quizData = [
    {
        question: "1) What is the font-size of the h1 heading tag?",
        options: ["3.5 em", "2.17 em", "2 em", "1.5 em"],
        answer: "2 em"
    }
];

const quizContainer = document.getElementById('quesBox');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    quizData.forEach((data, index) => {
        const div = document.createElement('div');
        const question = document.createElement('p');

        //index is used to sent .index no. like 1,2,3.... and .question is used to set que
        question.innerText = `${index + 1}. ${data.question}`;

        // The appendChild method in JavaScript is used to add a new child node to an existing parent node
        div.appendChild(question);
        data.options.forEach((option, i) => {
            const radioBtn = document.createElement('input');
            radioBtn.type = 'radio';

            // this line tells how many options r there
            radioBtn.name = `question${index}`;
            radioBtn.value = option;
            div.appendChild(radioBtn);

            const label = document.createElement('label');
            label.innerText = option;
            div.appendChild(label);
        });

        quizContainer.appendChild(div);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('div');
    let score = 0;

    quizData.forEach((data, index) => {
        const answerContainer = answerContainers[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === data.answer) {
            score++;
            answerContainer.style.color = 'green';
        } else {
            answerContainer.style.color = 'red';
        }
    });

    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);

