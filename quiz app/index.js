const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalhari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: true },
            { text: "Anatartica", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Artic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
];

const questionelement = document.querySelector("#question");
const answerbuttons = document.querySelector("#answer-buttons");
const nextbutton = document.querySelector("#next");
let currentquestionindex=0;
let score=0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML="next";
    showquestion();
}
function showquestion(){
    resetstate();
    let currentquestion=questions[currentquestionindex];
    let questionnumber=currentquestionindex+1;
    questionelement.innerHTML=questionnumber+". "+currentquestion.question;

    currentquestion.answers.forEach(answer=>{
         const button=document.createElement("button");
         button.innerHTML=answer.text;
         button.classList.add("btn");
         answerbuttons.appendChild(button);
         if(answer.correct){
            button.dataset.correct=answer.correct;
         }
         button.addEventListener("click",selectanswer)
    });
}
function resetstate(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
     }
}
function selectanswer(e){
    const selbutton=e.target;
    const iscorrect=selbutton.dataset.correct==="true";
    if(iscorrect){
        selbutton.classList.add("correct");
        score++;
    }
    else{
        selbutton.classList.add("incorrect");
}
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    });
    nextbutton.style.display="block";
}
function showscore(){
    resetstate();
    questionelement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
}
function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentquestionindex < questions.length){
        handlenextbutton();
    }
    else{
        startquiz();
    }
})
startquiz();
