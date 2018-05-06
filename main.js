
var Questions = function(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}


Questions.prototype.displayQuestion = function(){

    console.log(this.question);
    for(let i = 0; i < this.answers.length; i++){
        console.log(i + ': ' + this.answers[i]);
    }
}; 

let q1 = new Questions('My name?', ['Mitko', 'Anio', 'Dont know'],0);
let q2 = new Questions('My favourite colooo?', ['blue', 'red', 'pink'], 2);
let q3 = new Questions('My favourite color?', ['blue', 'red', 'pink'], 1);


let questions = [q1, q2, q3];

let n = Math.floor( Math.random()* questions.length);

questions[n].displayQuestion();


let answer = prompt('Your asnwer?');


