const readlineSync = require('readline-sync');
const questions = require('./questions.js')
const chalk = require('chalk')
const hungry = require('./hungry.js')
const house = require('./house.js')
const rip = require('./rip.js')
const croc = require('./croc.js')
const snowflake = require('./snowflake.js')
const bang = require('./bang.js')

const questionMaster = function(questions, questionNumber) {

    var question = questions[questionNumber]
    
    console.clear()

    console.log(question.scenario) 
    console.log();

    if (question.isEnd) {
        if (question.picture == "croc") {
            croc()
            console.log()
            
         } else if (question.picture == "bang") {
                bang() 

         } else if (question.picture == "snowflake") {
            snowflake()

        } else if (question.picture == "rip") {
            rip()

        } else if (question.picture == "house") {
            house()

        } else if (question.picture == "hungry") {
            hungry() 

        }console.log('THE END');
    } else {

        console.log(question.question)
        console.log()
        console.log("  a) " + question.optionA)
        console.log("  b) " + question.optionB)

        var answer = readlineSync.question();

        if (answer == "a") {
            console.log()
            console.log(question.choseAMessage)
            console.log()
            readlineSync.question(chalk.gray("Press enter to continue"));
            questionMaster(questions, question.chooseAGotoQuestion)        
        } else if (answer == "b") {
            console.log()
            console.log(question.choseBMessage)
            console.log()
            readlineSync.question(chalk.gray("Press enter to continue"));
            questionMaster(questions, question.chooseBGotoQuestion)                
        } else {
            questionMaster(questions, questionNumber)
        }
    }
}

questionMaster(questions, 0)