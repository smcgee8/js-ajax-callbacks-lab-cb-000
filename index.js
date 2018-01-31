function displayError() {

}

function showCommits() {

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
