function displayError() {

}

function showCommits(e) {
  var repo = e.dataset.repo;
}

function searchRepositories() {
  query = $('#searchTerms').val();
  $.get('https://api.github.com/search/repositories?q=' + query, function(response) {
    const src = $("#repository-template").html();
    const template = Handlebars.compile(src);
    const repoList = template(response.items);
    $("#results").html(repoList);
  });
}

$(document).ready(function (){



});
