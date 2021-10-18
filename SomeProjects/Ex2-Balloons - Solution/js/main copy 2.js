'use strict'


//model:
var gBalloons = [{distance:0 , speed:10}, {distance:0,speed:15}];
var gameIntervals;
var gAudio = new Audio('audio/pop.wav');


function start () {
    gameIntervals = setInterval(moveUp,100);
    
}

function moveUp () {
    var elBalloons = document.querySelectorAll('.balloon');
    for (var i = 0; i < gBalloons.length; i++) {
        var balloon = gBalloons[i];
        var elBalloon = elBalloons[i];

        balloon.distance += balloon.speed;
        elBalloon.style.bottom = balloon.distance + 'px' ;

        if (balloon.distance === 500) {
            clearInterval(gameIntervals);
        }
   
    }
}


function balloonClicked (elBalloon) {
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
    },100)
}

function balloonClicked2 (elBalloon) {
    gAudio.play();
    elBalloon.classList.add('balloon-fade2');
}


// CR -  elBalloon.classList.toggle(), how we use toggle () ????
function balloonClicked3 (elBalloon) {
    gAudio.play();
    var count = 0;
    var fadeInterval = setInterval(function () {
        count ++;
        setTimeout(function () {
            elBalloon.toggle(elBalloon.classList.add('balloon-fade')
            ,elBalloon.classList.remove('balloon-fade')); 
        },50);
    },100)

}
