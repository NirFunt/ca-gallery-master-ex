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
    var project3 = _createProject('balloons', 'Balloons', 'similar to balloon pop game ', 'you need to pop all the balloon by clicking on them', 'SomeProjects/Ex2-Balloons - Solution/index.html', ['moving divs', 'onclick hide', 'game', 'annimations', 'audio']);
    var project4 = _createProject('inpicture', 'Inpicture', 'questions & answer game ', 'you need to match flag to country', 'SomeProjects/Ex-in-picture v1.1 solution/index.html', ['Q&A', 'Random Q&A', 'game', 'flags', 'render quest']);
    // project3 & project4 have links to the game save on local folder at SomeProject, this folder would also be uploaded to GitHub
    // SomeProject folder much be inside the project and can not be outside
    var project5 = _createProject('bookshop', 'Book-Shop', 'menageing a book store ', 'you can CRUD at book store', 'https://nirfunt.github.io/book-shop/', ['MCV', 'CRUD', 'Flex Design', 'id injection between functions']);
    gProjects = [project1, project2, project3, project4,project5];
    // console.log(gProjects);

}


function _createProject(id, name, title, desc, url, labels) {
    var project = {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: Date.now(),
        labels: labels
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