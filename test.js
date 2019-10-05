const readlineSync = require('readline-sync');
const questions = require('./questions.js')

const questionMaster = function(questions, questionNumber) {

    var question = questions[questionNumber]
    
    console.clear()

    console.log(question.scenario) 
    console.log(question.question)
    console.log("  a) " + question.optionA)
    console.log("  b) " + question.optionB)

    var answer = readlineSync.question();

    if (answer == "a") {
        console.log(question.choseAMessage)
        readlineSync.question("Press enter to continue");
        questionMaster(questions, question.chooseAGotoQuestion)        
    } else if (answer == "b") {
        console.log(question.choseBMessage)
        readlineSync.question("Press enter to continue");
        questionMaster(questions, question.chooseBGotoQuestion)                
    } else {
        console.log("You've killed RB by not making a choice!")
    }

}

questionMaster(questions, 0)