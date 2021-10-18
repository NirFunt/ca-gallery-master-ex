'use strict'

$(document).ready(init);
function init() {
    renderProjectsPortfolios();
}


function renderProjectsPortfolios() {
    var projects = getProjects();
    console.log(projects);
    var projectsPortfolioHTMLs = projects.map(proj => {
        var portfolioItemHTML = `
        <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderProjectModal('${proj.id}')" >
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/Projects/${proj.id}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.id} game</p>
        </div>
      </div>
        `
        return portfolioItemHTML;
    });
    $('.project-portfolios').html(projectsPortfolioHTMLs.join(''));
    // onclick="renderProjectModal('${proj.id}' should have been done in the rendering as I did, doing it with jQuery could be more tricky
    // just inject onclick and inject the proj.id in it would be great
}

function renderProjectModal(id) {
    var proj = getProject(id);
    console.log(proj);

        var portfolioModalHTML = `
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}.</p>
                    <img class="img-fluid d-block mx-auto" src="img/Projects/${proj.id}.jpg" alt="">
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                      <li>Date: ${proj.publishedAt}</li>
                      <li>Client: Nir Funt</li>
                      <li>Category: ${proj.labels.toString()}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                      <div><a href="${proj.url}">Go Play!!!</a> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        `
    $('.modal-for-projects').html(portfolioModalHTML);
}

function submitForm () {
    var emailInput = $('.email-input').val();
    var subjectInput = $('.subject-input').val();
    var textAreaInput = $('.textarea-input').val();
    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailInput}&su=${subjectInput}&body=${textAreaInput}`;
  window.open(url);
  $('.offcanvas-aside').hide('slow');
  }

