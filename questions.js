/*
    {
        questionNumber: 0,
        scenario: "",
        question: "",
        optionA: "",
        optionB: "",
        choseAMessage: "",
        chooseAGotoQuestion: 0,
        choseBMessage: "",
        chooseBGotoQuestion: 0 
    },
*/

module.exports = [
    {
        questionNumber: 0,
        scenario: "RB wandering in the wildernes eventualy coming to a menesing fork in the path",
        question: "Wich direction should he take",
        optionA: "Right",
        optionB: "Left",
        choseAMessage: "RB chooses the path to the Right",
        chooseAGotoQuestion: 1,
        choseBMessage: "RB chooses the path to the Left",
        chooseBGotoQuestion: 2
    },
    {
        questionNumber: 1,
        scenario: "After ten minutes of walking RB saw a gargantuan bolder blocking his way",
        question: "What should RB do",
        optionA: "Climb the bolder",
        optionB: "Hit the bolder whith a hammer",
        choseAMessage: "RB climbs the bolder",
        chooseAGotoQuestion: 5,
        choseBMessage: "RB hits the bolder with a hammer",
        chooseBGotoQuestion: 3
    },
    {
        questionNumber: 2,
        scenario: "RB walks a little until he comes to a river. He takes a sip it tastes good",
        question: "What should RB do",
        optionA: "Swim",
        optionB: "Find another way around",
        choseAMessage: "RB swims across",
        chooseAGotoQuestion: 6,
        choseBMessage: "RB decides to find another way round",
        chooseBGotoQuestion: 4
    },
    {
        questionNumber: 3,
        scenario: " The bolder opens half way. theres a under ground stair case",
        question: "hould he...",
        optionA: "Take the staircase",
        optionB: "Hit the bolder with a hammer again",
        choseAMessage: "RB takes the staircase",
        chooseAGotoQuestion: 11,
        choseBMessage: "RB hits the bolder with a hammer",
        chooseBGotoQuestion: 9
    },
    {
        questionNumber: 4,
        scenario: "RBs realy hungry he bumps into a berry tree",
        question: "Should he...",
        optionA: "Eat one",
        optionB: "keep walking",
        choseAMessage: "RB eats one there realy good he puts loads in his backpack",
        chooseAGotoQuestion: 7,
        choseBMessage: "RB chooses to keep walking",
        chooseBGotoQuestion: 8
    },
    {
        questionNumber: 5,
        scenario: "There are some slippy spots RB slips and dies!!!!!!!!!!!!!!!!!!!!!!!!",
        isEnd: true,
        picture:"rip"
    },
    {
        questionNumber: 6,
        scenario: "In the river there are crocodiles they eat RB alive while he's swimming to the other side!!!!!!!!!!!!!!!!!!!!!",
        isEnd: true,
        picture:"croc" 
    },
    {
        questionNumber: 7,
        scenario: "RB has to make a choice",
        question: "Should he...",
        optionA: "Stay there for ever",
        optionB: "keep walking",
        choseAMessage: "RB chooses to stay there forever",
        chooseAGotoQuestion: 10,
        choseBMessage: "RB chooses to keep walking",
        chooseBGotoQuestion: 11 
    },
    {
        questionNumber: 8,
        scenario: "RB dies off hunger!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        isEnd: true
    },
    {
        questionNumber: 9,
        scenario: "the sound is so loud it kills you!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        isEnd: true,
        picture:"bang"
    },
    {
        questionNumber: 10,
        scenario: "winter comes RB dies off coldness!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        isEnd: true,
        picture:"snowflake"
    },
    {
        questionNumber: 11,
        scenario: "RBs finally home",
        isEnd: true,
        picture:"house"
    }
]
