const readlineSync = require('readline-sync');

const question1 = function() {

    console.clear()

    console.log("RB walk through the dark forest, eventually coming to a fork in the path.") 
    console.log("Which direction should RB take?")
    console.log("  a) Right")
    console.log("  b) Left")

    var answer = readlineSync.question();

    if (answer == "a") {
        console.log("RB chooses the path to the Right")
        readlineSync.question("Press enter to continue");
        question2()
    } else if (answer == "b") {
        console.log("RB chooses the path to the Left")
        readlineSync.question("Press enter to continue");
        question3()
    } else {
        console.log("You've killed RB by not making a choice!")
    }

}

const question2 = function() {

    console.clear()

    console.log("there's a rock in RB's way") 
    console.log("wich one should he do")
    console.log("  a) climb over the rock")
    console.log("  b) hit the rock with a hammer")

    var answer = readlineSync.question();

    if (answer == "a") {
        console.log("RB chooses the path to the Right")
        readlineSync.question("Press enter to continue");
        question2()
    } else if (answer == "b") {
        console.log("RB chooses the path to the Left")
        readlineSync.question("Press enter to continue");
        question3()
    } else {
        console.log("You've killed RB by not making a choice!")
    }
} 


const question3 = function() {

    console.clear()

    console.log("RB comes to a river") 
    console.log("wich one should he do")
    console.log("  a) swim across")
    console.log("  b) find an other path")

    var answer = readlineSync.question();

    if (answer == "a") {
        console.log("RB chooses to swim across")
        readlineSync.question("Press enter to continue");
        question2()
    } else if (answer == "b") {
        console.log("RB chooses to find another path")
        readlineSync.question("Press enter to continue");
        question3()
    } else {
        console.log("You've killed RB by not making a choice!")
    }
}


const question4 = function() {

    console.clear()

    console.log("RB comes to a river") 
    console.log("wich one should he do")
    console.log("  a) swim across")
    console.log("  b) find an other path")

    var answer = readlineSync.question();

    if (answer == "a") {
        console.log("RB chooses to swim across")
        readlineSync.question("Press enter to continue");
        question5()
    } else if (answer == "b") {
        console.log("RB chooses to find another path")
        readlineSync.question("Press enter to continue");
        question4()
    } else {
        console.log("You've killed RB by not making a choice!")
    }
}

const question5 = function() {

    console.clear()

    console.log("there are crocodils in the lake so RB dies") 
    

question1();
console.log

