import {questions} from "./questions.js"

const genRand = (len) => {
    return Math.random().toString(36).substring(2,len+2);
  }

console.log(questions)

const body = document.getElementById('body');
const main = document.getElementById('main');

let result = questions.forEach( (question, index) => {
    let div = document.createElement('div');
    div.className = "question"
    div.innerHTML = `
        ${index+1}. ${question.question} <br/>
        <div class="options">

        ${(question.options.map( (option, index) => {
            let optionDiv = document.createElement('div');
            let id= genRand(5);

            return `<div class="option">
            <input type="radio" name=${question.id} value=${index} id=${id} />
            <label for=${id}>${option}</label></div>`;
        })).join(" ")}


        </div>
        
    `
    // div.innerHTML = question.question
    main.append(div)
})