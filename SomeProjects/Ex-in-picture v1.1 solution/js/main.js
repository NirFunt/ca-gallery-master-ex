'use strict'

// ask CR: 1)many gVars? 2)organization of functions and code?

var gCountriesNames = ['Philippines', 'Argentina', 'Australia', 'Azerbaijan', 'Brazil'
    , 'Canada', 'Greece', 'Japan', 'Marshall Islands', 'Mexico'];
// gNames indecies corrolate to img files corrolates to gCorrectNums and gWrongNums indecies

var gNumOfQuests = 10;
var gCorrectAnswers = []; // for correct answers
var gWrongAnswers = []; // for 3 answer options for each question
var gIdx = 1;

var gCurrQuest;
var gQuests;
var gCorrectCount = 0;

function init() {
    gQuests = createQuests();
    // console.log(gQuests);
    play();
}

function restart(btn) {
    btn.style.display = 'none';
    init();

}

function play() {
    gCurrQuest = spliceRandom(gQuests);
    // console.log(gCurrQ);
    renderQuest(gCurrQuest);
}


function createQuest() {
    createNums(gWrongAnswers);
    var randomCorrect = spliceRandom(gCorrectAnswers);
    gWrongAnswers.splice(randomCorrect, 1);
    var quest = {
        id: gIdx,
        opts: [spliceRandom(gWrongAnswers), spliceRandom(gWrongAnswers)
            ,spliceRandom(gWrongAnswers)],
        correctOptIndex: randomCorrect
    }
    gIdx++;
    quest.opts.splice(getRandomInt(0, 3), 0, quest.correctOptIndex);
    return quest;
}


function createQuests() {
    createNums(gCorrectAnswers);
    var quests = [];
    for (var i = 0; i < gNumOfQuests; i++) {
        var question = createQuest();
        quests.push(question);
    }
    return quests;
}


function createNums(nums) {
    for (var i = 0; i < gNumOfQuests; i++) {
        nums[i] = i;
    }
}


function checkAnswer(answer) {
       if (answer === gCurrQuest.correctOptIndex) {
        alert('Correct');
        gCorrectCount++;
        if (gCorrectCount >= gNumOfQuests) {
            won();
            return;
        }
        play();
    } else {
        alert('Wrong');
    }
}


function renderQuest(CurrQ) {
    var str = '';
    var elImageDiv = document.querySelector('.image-div');
    // console.log(CurrQ);
    elImageDiv.innerHTML = `<img src="img/${CurrQ.correctOptIndex}.gif">`

    for (var i = 0; i < CurrQ.opts.length; i++) {
        str += ` <div class="answer-div answer${i}" onclick="checkAnswer(${CurrQ.opts[i]})"> ${gCountriesNames[CurrQ.opts[i]]}</div> `
        // we inject in to div checkAnnswer function arguments of the country index + the county name. arguemnts are set here as html in checkAnswer() and they corrolate with this div, so brazil div would have checkAnswer (4)
    }
    var elAnswersDiv = document.querySelector('.answers-div');
    elAnswersDiv.innerHTML = str;
}


function won() {
    var elBtn = document.querySelector('.main-div button');
    elBtn.style.display = 'block';
    var elImage = document.querySelector('.image-div img');
    elImage.src = 'img/won.jpg';
    var elAnswers = document.querySelector('.answers-div');
    elAnswers.innerHTML = 'You Have Won!!!!!!';
    gCorrectCount = 0;
}

function spliceRandom (nums) {
return nums.splice(getRandomInt(0, nums.length), 1)[0];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}