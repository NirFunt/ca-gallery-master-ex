'use strict'

var gProjects;

function getProjects() {
    return gProjects;
}


function _createProjects() {
    var prject = _createProject('minesweeper', 'Minesweeper', 'upgraded Minesweeper game', 'there is a board with hidden mines, you supposed to uncover the board without clicking on hidden mines', '../AllProjects/MineSweeper', ['matrix', 'document flow styiling', 'game', 'neighbours']);
}


function _createProject(id, name, title, desc, url, labels) {
    var project = {
        id : id,
        name : name,
        title : title,
        desc : desc,
        url : url,
        publishedAt : Date.now(),
        labels : labels
    }
    return project;
}


function loadProjectsFromLS() {

}


function saveProjectsToLS() {

}