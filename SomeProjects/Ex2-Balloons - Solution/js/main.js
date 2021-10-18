'use strict'

//Model:
var gBalloons = [{distance:0 , speed:3}, {distance:0,speed:7}
, {distance:0 , speed:10},{distance:0 , speed:12},{distance:0 , speed:15}];
var gameIntervals;
var gAudio = new Audio('audio/pop.wav');


function start () {
    generateBalloons();
    gameIntervals = setInterval(moveUp,100);
}

function restart () {
for (var i = 0; i < gBalloons.length; i ++) {
    gBalloons[i].distance = 0;
}
    start();
}

function moveUp () {
    var elBalloons = document.querySelectorAll('.balloon');
    for (var i = 0; i < gBalloons.length; i++) {
        var balloon = gBalloons[i]; // Model
        var elBalloon = elBalloons[i]; // DOM

        balloon.distance += balloon.speed; // Model
        elBalloon.style.bottom = balloon.distance + 'px'; // DOM

        if (balloon.distance > 1200) {
            // clearInterval(gameIntervals);
            // elBalloon.style.transition = 'none';
            balloon.distance = 0;
            // elBalloon.style.bottom = balloon.distance + 'px';
            // elBalloon.style.transition = 500 + 'ms';
        }
    }
}


function balloonClicked1 (elBalloon) {
    gAudio.play();
    var count = 0;
    var fadeInterval = setInterval(function () {
        count ++;
        setTimeout(function () {
            elBalloon.classList.add('balloon-fade');
        },50)
        
         elBalloon.classList.remove('balloon-fade');

        if (count === 30) {
            // elBalloon.classList.remove('balloon-fade');
            clearInterval(fadeInterval);
            // elBalloon.classList.remove('balloon-fade');
            // can not make balloon appear again from some reason
        }
    },100);
   
}

function balloonClicked2 (elBalloon) {
    gAudio.play();
    elBalloon.classList.add('balloon-fade2');
}


// CR -  elBalloon.classList.toggle('balloon-fade'), how we use toggle () ????
function balloonClicked3 (elBalloon) {
    gAudio.play();
    var count = 0;
    var fadeInterval = setInterval(function () {
        count ++;
        setTimeout(function () {
           elBalloon.classList.toggle('balloon-fade');
          
        },50);
        elBalloon.classList.toggle('balloon-fade');
    },100)

}

function generateBalloons () {
    
    var elBody = document.querySelector('body');
    var text = '';
    for (var i = 1; i <= 5; i++) {
        text += '<div class="balloon balloon' + i +' " ' 
        + ' onclick="balloonClicked'+((Math.random()>0.5)? 1:2)+'(this)"> '
       +' Balloon' +
     '</div>'
    }
    text += ' <button onclick="start()">Start</button>';
    text += ' <button onclick="restart()">restart</button>';
    elBody.innerHTML = text;

    for (var i = 1; i <= 5; i++) {
        var elBalloon = document.querySelector('.balloon'+i);
        elBalloon.style.backgroundColor = getRandomColor ();
        elBalloon.style.marginLeft = 300*i + 'px';
    }
   
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    // CR - use spaces between code sections
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

