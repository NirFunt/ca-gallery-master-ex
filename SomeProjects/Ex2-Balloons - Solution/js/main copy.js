'use strict'


//model:
var gBalloons = [{bottom:0 , speed:10}, {bottom:0,speed:15}];

var gLocation = 0;
var gameIntervals;


function start () {
    gameIntervals = setInterval(moveUp,100);
    
}

function moveUp () {
    var elBaloons = document.querySelectorAll('.balloon');
    gLocation += 20;
    for (var i = 0; i < elBaloons.length; i++) {
        elBaloons[i].style.bottom = gLocation + 'px';
    }
    if (gLocation === 500) {
        clearInterval(gameIntervals);
    }
}