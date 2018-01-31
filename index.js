function displayError(error) {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function showCommits(e) {
  var repo = e.dataset.repository;
  var owner = e.dataset.owner;
  $.get('https://api.github.com/repos/' + owner + '/' + repo + '/commits', function(response) {
    const src = $("#commits-template").html();
    const template = Handlebars.compile(src);
    const commitsList = template(response);
    $("#details").html(commitsList);
  }).fail(displayError);
}

function searchRepositories() {
  query = $('#searchTerms').val();
  $.get('https://api.github.com/search/repositories?q=' + query, function(response) {
    const src = $("#repository-template").html();
    const template = Handlebars.compile(src);
    const repoList = template(response.items);
    $("#results").html(repoList);
  }).fail(displayError);
}

$(document).ready(function (){

});
