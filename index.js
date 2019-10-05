const readlineSync = require('readline-sync');
const questions = require('./questions.js')

const house = require('./house.js')
const rip = require('./rip.js')
const croc = require('./croc.js')
const snowflake = require('./snowflake.js')
const bang = require('./bang.js')
const questionMaster = function(questions, questionNumber) {

    var question = questions[questionNumber]
    
    console.clear()

    console.log(question.scenario) 

    if (question.isEnd) {
        console.log();
        if (question.picture == "croc") {
            croc()
            console.log()
            
         } else if (question.picture == "bang") {
                bang() 

         } else if (question.picture == "snowflake") {
            snowflakes()

        } else if (question.picture == "rip") {
            rip()

        } else if (question.picture == "house") {
            house()

        }console.log('THE END');
    } else {

        console.log(question.question)
        console.log("  a) " + question.optionA)
        console.log("  b) " + question.optionB)

        var answer = readlineSync.question();

        if (answer == "a") {
            console.log()
            console.log(question.choseAMessage)
            console.log()
            readlineSync.question("Press enter to continue");
            questionMaster(questions, question.chooseAGotoQuestion)        
        } else if (answer == "b") {
            console.log()
            console.log(question.choseBMessage)
            console.log()
            readlineSync.question("Press enter to continue");
            questionMaster(questions, question.chooseBGotoQuestion)                
        } else {
            console.log("You've killed RB by not making a choice!")
        }
    }
}

questionMaster(questions, 0)