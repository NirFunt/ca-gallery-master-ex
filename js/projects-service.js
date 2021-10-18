'use strict'

var gProjects;

_createProjects();

function getProjects() {
    return gProjects;
}


function _createProjects() {
    gProjects = [];
    var project1 = _createProject('minesweeper', 'Minesweeper', 'upgraded Minesweeper game', 'there is a board with hidden mines, you supposed to uncover the board without clicking on hidden mines', 'https://nirfunt.github.io/MineSweeper2/', ['matrix', 'document flow styiling', 'game', 'neighbours']);
    var project2 = _createProject('pacman', 'Pacman', 'new Pacman game', 'Pacman needs to eat all the bread and avoid ghost encounter', 'https://nirfunt.github.io/Pacman/', ['matrix', 'board players', 'game', 'neighbours', 'gPositions']);
    // console.log(project);
    gProjects = [project1, project2];
    // console.log(gProjects);

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


function getProject(id) {
    var project = gProjects.find(proj => proj.id === id);
    return project;
}


function loadProjectsFromLS() {

}


function saveProjectsToLS() {

}