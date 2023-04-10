var brewContainer = document.querySelector('#local-brewery');
var city = document.getElementById('cityname')
var submit = document.querySelector('#submit');
var formE1 = document.querySelector('#form');


$(document).ready(function() {
  // local storage
  var cities = localStorage.getItem('city');
  if (cities) {
    cities = JSON.parse(cities);
  } else {
    cities = []
  }

	$("#submit").on("click", function(event) {
	  event.preventDefault();
	  var city = $("#cityname").val();
	    if (city == "") {
		  return;
	    } else {
		getLatLon (city);
	  submitCity(city);
    cities.push(city);
    localStorage.setItem('city', JSON.stringify(cities));
      }
	});

  var submitCity = function (city) {
  
  $("#forecast").show();
  $("#Brewery").show();
  $(".city-name-1").show();


  var breweries = city;
  var api = "https://api.openbrewerydb.org/v1/breweries?by_city=" + breweries + "&per_page=5";

  console.log('City = ' + breweries);
  console.log('API for submitCity function is ' + api);

  if (breweries) {
    getApi(breweries);

    brewContainer.textContent = '';

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
$("#city-name-1").hide();

// Latitude & Longitude for weather
 function getLatLon (city) {
    $("#forecast").show();
  
	  var api_key = "5dc2c34e3d2647f6f3d1dc8a103c14d7";
	  var baseURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`;
  
	  fetch(baseURL)

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
    fetch(url)
    .then(function(response){
      return response.json();
      })
      .then(function (data) {
      console.log(data)
      $("#city-name").text(data.name);
      $("#date-today").text(`(${dayjs().format('MM/DD/YYYY')})`);
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
          card1HTML +=  "<div class='flex flex-col text-center border-4 w-1/4'>" +
          "<h2 class='bg-sky-950  p-8 text-white border-b-4'>" + data[i].name + "</h2>" +
          "<p class='bg-amber-700 p-4 text-white border-b-4'>" + data[i].street + "</p>" +
          "<p class='bg-amber-700  p-4 text-white border-b-4'>" + data[i].phone + "</p>" +
          "<p class='bg-amber-700 p-4 text-white border-b-4'><a href="+ data[i].website_url + ">" + data[i].website_url + "</a></p>" +
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