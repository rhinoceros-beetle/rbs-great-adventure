// this reads what the user types into the terminal
const readlineSync = require('readline-sync')
// chalk changes the color of our text and pictures in the terminal
const chalk = require('chalk')

// reads the questions from our questions file
const questions = require('./questions.js')

// these variables let us draw our pictures
const title = require('./title.js')
const hungry = require('./hungry.js')
const house = require('./house.js')
const rip = require('./rip.js')
const croc = require('./croc.js')
const snowflake = require('./snowflake.js')
const bang = require('./bang.js')

// FUNCTIONS: are named sections of code that can be called from other parts of your program
// this function asks our questions for us. It has two parameters (variables)
//   questions - this is the list of all of our questions
//   questionNumber - the number of the question that we want to show
const questionMaster = function(questions, questionNumber) {

    // gets the question that we want to show from the questions list
    var question = questions[questionNumber]
    
    // clears the screen / console / terminal
    console.log()
    console.clear()
      
    // prints the question scenario on the screen, followed by a blank line
    console.log(question.scenario) 
    console.log()

    // if this question is one of our endings...
    if (question.isEnd) {
        // print out the correct picture
        if (question.picture == "croc") {
            croc()
            
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

        }

        // add some spacing and write THE END
        console.log()
        console.log('THE END')
        console.log()
        console.log()
    
    // if this question is NOT one of our endings...
    } else {

        // ask the question, and print the options
        console.log(question.question)
        console.log()
        console.log("  a) " + question.optionA)
        console.log("  b) " + question.optionB)

        // waits for the user to type something in the terminal
        var answer = readlineSync.question()

        // if the user typed 'a'...
        if (answer == "a") {
            // write out the message
            console.log()
            console.log(question.choseAMessage)
            console.log()
            // waiting for the user to press enter
            readlineSync.question(chalk.gray("Press enter to continue"))
            // call the questionMaster function so that it asks the next question
            questionMaster(questions, question.chooseAGotoQuestion)
        
        // if the user typed 'b'...
        } else if (answer == "b") {
            // write out the message
            console.log()
            console.log(question.choseBMessage)
            console.log()
            // waiting for the user to press enter
            readlineSync.question(chalk.gray("Press enter to continue"))
            // call the questionMaster function so that it asks the next question
            questionMaster(questions, question.chooseBGotoQuestion)                
        
        // if the user typed anything else, clear their answer and ask the question again
        } else {
            questionMaster(questions, questionNumber)
        }
    }
}

console.clear()
title();
readlineSync.question(chalk.gray("Press enter to start playing!"))
// tell the questionMaster to ask the first question!
questionMaster(questions, 0)