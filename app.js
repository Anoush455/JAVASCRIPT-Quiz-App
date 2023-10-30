var quizData = [
    {
        question: "Which language Runs in a web browser?",
        a:"Java",
        b:"c",
        c:"Python",
        d:"Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML Stand for?",
        a:"Hyper Markup Language",
        b:"Hyper Markdown Language",
        c:"Hyper Machine language",
        d:"Helicopter terminals",
        correct: "a",
    },
    {
        question: "what year was javascript launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct: "b",
    },
];

var quiz = document.getElementById('quiz');
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitbtn = document.getElementById('submit')


var currentQuiz = 0
var score = 0

loadQuiz()

function loadQuiz(){
    deslectedAnswers()

    var currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}

function deslectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getselected(){
    var answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked){
            answer = answerEls.id
        }
    })
    return answer
}

submitbtn.addEventListener('click', () => {
    var answer = getselected()
    if(answer){
        if(answer === quizData[currentQuiz].correct)
        score++
    }
    currentQuiz++

    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML = `
        <h2>you answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `
    }
    }
)