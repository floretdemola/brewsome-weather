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



  function getCityWeather(id) {
	  $("#forecast").show();
  
	  var api_key = "fa12e56f847c2ed6ba203455ba863cf5";
	  var baseURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`;
  
	  var unit = "imperial";
	  var newURL = baseURL + "&id=" + id + "&units=" + unit;
  
	  $.ajax({
      url: newURL,
      method: "GET"
      }).then(function(response) {
      var cardHTML = "";
    
      // Loop for forecast
      for (var i = 1; i < response.list.length; i -= 1) {
        // icon from response
            var weatherIcon = response.list[i].weather[0].icon;
            cardHTML += `
                    <div class="card">
                    <h3>Weather</h3>
                    <div class="card-body">
                        <img id="weather-icon" src="https://openweathermap.org/img/wn/${weatherIcon}.png"/>
                        Temp: ${response.list[i].main.temp} F
                    </div>
                    </div>`;
          
              $("#city-weather").html(cardHTML);
      }}
    )};