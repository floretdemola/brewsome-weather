var tableBody = document.getElementById('repo-table');
var Button = document.getElementById('button');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.openbrewerydb.org/v1/breweries?by_city=san_diego&per_page=3';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
    });
  };

  Button.addEventListener('click', getApi);

