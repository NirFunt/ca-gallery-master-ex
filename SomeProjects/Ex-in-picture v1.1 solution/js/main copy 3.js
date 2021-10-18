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
    gCurrQuest = gQuests.splice(getRandomInt(0, gCorrectAnswers.length), 1)[0];
    // console.log(gCurrQ);
    renderQuest(gCurrQuest);
}


function createQuest() {
    createNums(gWrongAnswers);
    var randomCorrect = gCorrectAnswers.splice(getRandomInt(0, gCorrectAnswers.length), 1)[0];
    gWrongAnswers.splice(randomCorrect, 1);
    var quest = {
        id: gIdx,
        opts: [gWrongAnswers.splice(getRandomInt(0, gWrongAnswers.length), 1)[0],
        gWrongAnswers.splice(getRandomInt(0, gWrongAnswers.length), 1)[0]
            , gWrongAnswers.splice(getRandomInt(0, gWrongAnswers.length), 1)[0]],
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
    var imageDiv = document.querySelector('.image-div');
    // console.log(CurrQ);
    imageDiv.innerHTML = `<img src="img/${CurrQ.correctOptIndex}.gif">`
    var image = document.querySelector('.image-div img');
    image.style.width = 250 + 'px';

    for (var i = 0; i < CurrQ.opts.length; i++) {
        str += ` <div class="answer-div answer${i}" onclick="checkAnswer(${CurrQ.opts[i]})"> ${gCountriesNames[CurrQ.opts[i]]}</div> `
        // we inject in to div checkAnnswer function arguments of the country index + the county name. arguemnts are set here as  html
    }
    var answersDiv = document.querySelector('.answers-div');
    answersDiv.innerHTML = str;
}


function won() {
    var btn = document.querySelector('.main-div button');
    btn.style.display = 'block';
    var image = document.querySelector('.image-div img');
    image.src = 'img/won.jpg';
    var answers = document.querySelector('.answers-div');
    answers.innerHTML = 'You Have Won!!!!!!';
    gCorrectCount = 0;

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}