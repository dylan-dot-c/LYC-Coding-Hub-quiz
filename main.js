import {questions} from "./questions.js"

const genRand = (len) => {
    return Math.random().toString(36).substring(2,len+2);
  }

// console.log(questions)

const body = document.getElementById('body');
const main = document.getElementById('main');
const start = document.getElementById('start');
const submit = document.getElementById('submit');
const questionArray = Array.from({length: 9}, (_, i) => `question${i+1}`)

start.addEventListener('click', renderQuiz)
submit.addEventListener('click', markQuiz)

function renderQuiz() {
    start.style.display = "none";
    submit.style.display = "block";
    questions.forEach( (question, index) => {
        let div = document.createElement('div');
        div.className = "question"
        div.innerHTML = `
            <b>${index+1}. ${question.question} </b><br/>
            <div class="options">
    
            ${(question.options.map( (option, index) => {
                let optionDiv = document.createElement('div');
                let id= genRand(5);
    
                return `<div class="option">
                <input type="radio" name=${question.id} value=${index} id=${id} required/>
                <label for=${id}>${option}</label></div>`;
            })).join(" ")}
    
    
            </div>
            
        `
        main.append(div)
    })
}

function markQuiz()  {
    console.log(questionArray)
  

    const quests = questionArray.map( (question) => {
        let query = `input[name=${question}]:checked`
        console.log(query)
        let ans = Number(document.querySelector(query).value)
        return ans
    })
    console.log(quests)

    let correct = 0
    let grade = 0

    for(let i=0; i<9; i++) {
        console.log(questions[i].answer-1, quests[i]);
        if(questions[i].answer-1 === quests[i]) {
            correct+=1;
            // console.log(questions[i].answer-1, quests[i]);
        }else {
            console.log("INcorrect")
        }
    }

    grade = ((correct*100) / 9).toFixed(2)
    console.log(`Congrats you have gotten ${grade}`);
}