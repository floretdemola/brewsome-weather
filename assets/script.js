var brewContainer = document.querySelector('#local-brewery');
// var city = document.querySelector('#cityname').value;
var city = document.getElementById('cityname')
// var api = "https://api.openbrewerydb.org/v1/breweries?by_city=" + city.value + "&per_page=5";
var submit = document.querySelector('#submit');
var formE1 = document.querySelector('#form');

// console.log('Inputted city = ' + city.value);
// console.log(api);

$(document).ready(function() {
	$("#submit").on("click", function(event) {
	  event.preventDefault();
	  var city = $("#cityname").val();
	    if (city == "") {
		  return;
	    } else {
		getLatLon (city);
	  submitCity(city);
    }
	});

var submitCity = function (city) {
  
  $("#forecast").show();
  $("#Brewery").show();

  var breweries = city;
  var api = "https://api.openbrewerydb.org/v1/breweries?by_city=" + breweries + "&per_page=5";

  console.log('City = ' + breweries);
  console.log('API for submitCity function is ' + api);

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
      console.log(data);
      getBrewery(api);
    }
    )};

$("#forecast").hide();
$("#Brewery").hide();


// formE1.addEventListener('submit',submitCity);
// submit.addEventListener('click', getApi);

// Latitude & Longitude for weather
 function getLatLon (city) {
    $("#forecast").show();
  
	  var api_key = "5dc2c34e3d2647f6f3d1dc8a103c14d7";
	  var baseURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`;

    // var newURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
  
  
	  // var unit = "imperial";
	  // var newURL = baseURL + "&q=" + city + "&units=" + unit; 
  
	  fetch (baseURL)

    .then(function(response){
      return response.json();
      })
      .then(function (data) {
        var newURL = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=imperial&appid=${api_key}`;
        console.log(data);
        getCityWeather(newURL);
      })
    };

    // getting the city's weather
    function getCityWeather(url) {
    fetch (url)
    .then(function(response){
      return response.json();
      })
      .then(function (data) {
      console.log(data)
      $("#city-name").text(data.name);
      $("#date-today").text(`(${dayjs().format('MM/DD/YYYY')})`);
      $("#weather-icon").attr(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0]}.png`);
      $("#temperature").text(data.main.temp + " F");
      $("#humidity").text(data.main.humidity + " %");
      $("#wind-speed").text(data.wind.speed + " MPH");

    var cardHTML = "";
    $("#city-weather").html(cardHTML);
    })
  };

  function getBrewery(url1) {
    fetch(url1)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var card1HTML = "";
        
        for (let i = 0; i < data.length; i++) {
          card1HTML +=  "<div>" +
          "<h2>" + data[i].name + "</h2>" +
          "<p>" + data[i].street + "</p>" +
          "<p>" + data[i].phone + "</p>" +
          "<p>" + data[i].website_url + "</p>" +
          "</div>";
        
          if (!data[i]) {
          $("<p>").hide();
          }
        }
  
        $("#local-brewery").html(card1HTML);
      })
  };

/* Psuedo Code 
Breweries
  Pull the information from the arrays from the different breweries 
  
  Create elements and cards where this information will live 5 cards
Weather
  When you search for the city, the data from the weather API will populate in it's own card to the right of the screen.
  Showing the temperature, humidity, and whether it would be sunny/cloudy/rainy etc using the icons from the feather website
*/


});