var brewContainer = document.querySelector('#local-brewery');
var city = document.querySelector('#cityname').value;
var api = "https://api.openbrewerydb.org/v1/breweries?by_city=" + city + "&per_page=5";
var submit = document.querySelector('#submit');
var formE1 = document.querySelector('#form');


console.log(api);

var formSubmitHandler = function (event) {
  event.preventDefault();

  console.log(event);

  var breweries = city.value;

  console.log(breweries);


  if (breweries) {
    getApi(breweries);

    brewContainer.textContent = '';
    city.value = '';
  } else {
    alert('Please enter a valid city');
  }

};



function getApi() {
  fetch(api)
    .then(function (response) {
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
    )}; */