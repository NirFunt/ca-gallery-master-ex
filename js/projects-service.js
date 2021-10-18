'use strict'

var gProjects;

_createProjects();

function getProjects() {
    return gProjects;
}


function _createProjects() {
    gProjects = [];
    var project = _createProject('minesweeper', 'Minesweeper', 'upgraded Minesweeper game', 'there is a board with hidden mines, you supposed to uncover the board without clicking on hidden mines', 'https://nirfunt.github.io/MineSweeper2/', ['matrix', 'document flow styiling', 'game', 'neighbours']);
    console.log(project);
    gProjects.push(project);

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