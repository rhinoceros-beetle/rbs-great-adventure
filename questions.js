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
        scenario: "RB got lost in the wildernes eventualy coming to a fork in the path",
        question: "wich direction should he take",
        optionA: "right",
        optionB: "left",
        choseAMessage: "RB chooses the path to the Right",
        chooseAGotoQuestion: 1,
        choseBMessage: "RB chooses the path to the Left",
        chooseBGotoQuestion: 2
    },
    {
        questionNumber: 1,
        scenario: "after ten minutes of walking RB saw a bolder blocking his way",
        question: "what should RB do",
        optionA: "climb the bolder",
        optionB: "hit the bolder whith a hammer",
        choseAMessage: "RB climbs the bolder",
        chooseAGotoQuestion: 5,
        choseBMessage: "RB hits the bolder with a hammer",
        chooseBGotoQuestion: 3
    },
    {
        questionNumber: 2,
        scenario: "RB walks a little until he comes to a river. He takes a sip it tastes good",
        question: "what should RB do",
        optionA: "swim",
        optionB: "find another way around",
        choseAMessage: "RB swims across",
        chooseAGotoQuestion: 6,
        choseBMessage: "RB decides to find another way round",
        chooseBGotoQuestion: 4
    },
    {
        questionNumber: 3,
        scenario: " the bolder opens half way. theres a under ground stair case",
        question: "should he...",
        optionA: "take the staircase",
        optionB: "hit the bolder with a hammer again",
        choseAMessage: "RB takes the staircase",
        chooseAGotoQuestion: 11,
        choseBMessage: "RB hits the bolder with a hammer",
        chooseBGotoQuestion: 9
    },
    {
        questionNumber: 4,
        scenario: "RBs realy hungry he bumps into a berry tree",
        question: "should he...",
        optionA: "eat one",
        optionB: "keep walking",
        choseAMessage: "RB eats one there realy good he puts loads in his backpack",
        chooseAGotoQuestion: 7,
        choseBMessage: "RB chooses to keep walking",
        chooseBGotoQuestion: 8
    },
    {
        questionNumber: 5,
        scenario: "there are some slippy spots RB slips and dies!!!!!!!!!!!!!!!!!!!!!!!!",
        isEnd: true
    },
    {
        questionNumber: 6,
        scenario: "in the river there are crocodiles they eat RB alive while he's swimming to the other side!!!!!!!!!!!!!!!!!!!!!",
        isEnd: true 
    },
    {
        questionNumber: 7,
        scenario: "RB has to make a choice",
        question: "should he...",
        optionA: "stay there for ever",
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
        isEnd: true
    },
    {
        questionNumber: 10,
        scenario: "winter comes RB dies off coldness!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        isEnd: true
    },
    {
        questionNumber: 11,
        scenario: "RBs finally home",
        isEnd: true
    }
]
