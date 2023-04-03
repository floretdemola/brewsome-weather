var brewContainer = document.querySelector('#local-brewery');
// var city = document.querySelector('#cityname').value;
var city = document.getElementById('cityname')
// var api = "https://api.openbrewerydb.org/v1/breweries?by_city=" + city.value + "&per_page=5";
var submit = document.querySelector('#submit');
var formE1 = document.querySelector('#form');

// console.log('Inputted city = ' + city.value);
// console.log(api);

var formSubmitHandler = function (event) {
  event.preventDefault();

  var breweries = city.value;
  var api = "https://api.openbrewerydb.org/v1/breweries?by_city=" + breweries + "&per_page=5";

  console.log('City = ' + breweries);
  console.log('API for formSubmitHandler function is ' + api);


  if (breweries) {
    getApi(breweries);

    brewContainer.textContent = '';
   // city.value = '';

  } else {
    alert('Please enter a valid city');
  }

};


function getApi(breweries) {
  var api = "https://api.openbrewerydb.org/v1/breweries?by_city=" + breweries + "&per_page=5";
  console.log('API for formSubmitHandler function is ' + api);
  return fetch(api)

    .then(function (response) {
      console.log(...response.headers);
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    }
    )};

formE1.addEventListener('submit',formSubmitHandler);
submit.addEventListener('click', getApi);


 /* function getCityWeather(id) {




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
      for (var i = 1; i < response.list.length; i++) {
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
    )}; */


/* Psuedo Code 
Breweries
  Pull the information from the arrays from the different breweries 
  
  Create elements and cards where this information will live 5 cards

Weather

  When you search for the city, the data from the weather API will populate in it's own card to the right of the screen.
  Showing the temperature, humidity, and whether it would be sunny/cloudy/rainy etc using the icons from the feather website

*/
