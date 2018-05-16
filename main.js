(function(){
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
    } 

    Questions.prototype.displayScore = function(score){
        console.log('Your score is: ' + score);
        console.log('--------------------------------------');
    }
    
    Questions.prototype.answerCheck = function(ans, callback){
        let sc;
            if(ans === this.correct){
                console.log('Correct!')
                sc = callback(true);
            }else{
                console.log('WRONG!')
                sc = callback(false);
            }
        this.displayScore(sc); 
    }
    
    let q1 = new Questions('My name?', ['Mitko', 'Anio', 'Dont know'],0);
    let q2 = new Questions('My favourite colooo?', ['blue', 'red', 'pink'], 2);
    let q3 = new Questions('My favourite color?', ['blue', 'red', 'pink'], 1);
    let questions = [q1, q2, q3];

   function score() {
       let sc = 0;
       return function(correct) {
           if(correct){
               sc++;
           }
           return sc;
       }
   }

    var keepScore = score();

    function nextQuestion() {
    
        let n = Math.floor( Math.random()* questions.length);
        
        questions[n].displayQuestion();
        let answer = prompt('Your asnwer?');

       if (answer !== 'exit') {
        questions[n].answerCheck(parseInt(answer),keepScore);
        nextQuestion();  
        console.log(answer);    
       } 
    }

    nextQuestion();
})();






