'use strict'

var gNames = ['Philippines', 'Argentina', 'Australia', 'Azerbaijan','Brazil'
, 'Canada', 'Greece', 'Japan', 'Marshall Islands', 'Mexico' ];

var gNumOfQ = 5;
var gRandomNums1 = [];
var gRandomNums2 = [];
var gId = 1;

var gCurrQ;
var gQuests;
var gCount = 0;

function init () {
    gQuests = createQuests();
    console.log(gQuests);
    play();
}

function restart (btn) {
    btn.style.display = 'none';
    init();

}

function play () {
        gCurrQ = gQuests.splice(getRandomInt(0,gRandomNums1.length),1)[0];
         console.log(gCurrQ);
         renderQuest (gCurrQ);
}


function createQuest () {
createNums (gRandomNums2);
var randomCorrect = gRandomNums1.splice(getRandomInt(0,gRandomNums1.length),1)[0];
gRandomNums2.splice(randomCorrect,1);
var quest = {
    id : gId,
    opts : [gRandomNums2.splice(getRandomInt(0,gRandomNums2.length),1)[0],
    gRandomNums2.splice(getRandomInt(0,gRandomNums2.length),1)[0]
    ,gRandomNums2.splice(getRandomInt(0,gRandomNums2.length),1)[0]],
    correctOptIndex : randomCorrect
}
gId++;
quest.opts.splice(getRandomInt(0,5),0,quest.correctOptIndex);
return quest;
}


function createQuests () {
    createNums (gRandomNums1);
    var quests = [];
    for (var i = 0; i < gNumOfQ; i++) {
        var question = createQuest();
        quests.push(question);
    }
    return quests;
}


function createNums (nums) {
    for (var i = 0; i < gNumOfQ; i++) {
        nums[i] = i;
    }
}


function checkAnswer (answer) {
    if (answer === gCurrQ.correctOptIndex) {
        gCount++;
        if (gCount >= 5) {
           won ();
           return;
        }
        play();
        alert('Correct');
    } else {
        alert('Wrong');
    }
}


function renderQuest (CurrQ) {
var str = '';
var imageDiv = document.querySelector('.image-div');
// console.log(CurrQ);
imageDiv.innerHTML = `<img src="img/${CurrQ.correctOptIndex}.gif">`
var image = document.querySelector('.image-div img');
image.style.width = 250 + 'px';

for (var i = 0; i < CurrQ.opts.length; i++) {
    str += ` <div class="answer-div answer${i}" onclick="checkAnswer(${CurrQ.opts[i]})"> ${gNames[CurrQ.opts[i]]}</div>       `
}
var answersDiv = document.querySelector('.answers-div');
answersDiv.innerHTML = str;

}


function won () {
    var btn = document.querySelector('.main-div button');
    btn.style.display = 'block';
    var image = document.querySelector('.image-div img');
    image.src ='img/won.jpg';
    var answers = document.querySelector('.answers-div');
    answers.innerHTML = 'You Have Won!!!!!!';
    gCount = 0;
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }