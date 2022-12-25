import {questions} from "./questions.js"

const genRand = (len) => {
    return Math.random().toString(36).substring(2,len+2);
  }

// console.log(questions)

// const body = document.getElementById('body');
const main = document.getElementById('main');
const start = document.getElementById('start');
const timeDiv = document.getElementById('time')
var submit;

const questionArray = Array.from({length: 9}, (_, i) => `question${i+1}`)
const questionBlock = Array.from({length: 9}, (_, i) => `questionBlock${i+1}`)

start.addEventListener('click', renderQuiz)
// 

function renderQuiz() {
    startTimer()
    start.style.display = "none";
    // 
    questions.forEach( (question, index) => {
        let div = document.createElement('div');
        div.id = questionBlock[index]
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
    var sub = document.createElement('input');
        sub.type = 'submit';
        sub.value  = "Submit Quiz"
        sub.id = "submit"

        main.append(sub)
    submit = document.getElementById('submit');
    submit.addEventListener('click', markQuiz)
    submit.style.display = "block";
}

function markQuiz(e)  {
    e.preventDefault()
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


    // document.getElementById('grade').innerHTML = grade;

    let exp = questionBlock.map( (question) => {
        return document.getElementById(question);
    })

    exp.forEach( (question, index) => {
        let div = document.createElement('div')
        div.className = "explanation"
        div.innerHTML = "<b>Explanation:</b><br/>" + questions[index].explanation

        if(questions[index].answer-1 === quests[index]) {
            question.style.backgroundColor = "rgba(0, 255, 64, 0.596)"
        } else {
            question.style.backgroundColor = "rgba(255, 0, 0, 0.596)"
            question.style.borderColor = "red"
        }
        question.append(div)
    })

}


function startTimer() {
    let time = 100
    let seconds = time % 60
    let minutes = time / 60

    let timer = setInterval( function() {
        time -=1
        if(time==0) {
            alert("TIME UP!")
            // sub.click
            // markQuiz(e)
            submit.click()
        }
        seconds = time % 60
        minutes = (Math.floor(time / 60))
        timeDiv.innerHTML = `Time Left: ${minutes}:${('00'+seconds).slice(-2)}`

    }, 1000)
}