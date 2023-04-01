var Brewerylist = document.getElementById('local-brewery');
var Button = document.getElementById('button');
var citynameinput = document.querySelector('#cityname');
var Brewcontainer = document.querySelector('#local-brewery');

  var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var breweries= citynameinput.value.trim();
  
    if (breweries) {
      getBrews(breweries);
  
      Brewcontainer.textContent = '';
      citynameinput.value = '';
    } else {
      alert('Please enter a valid city');
    }
  };
  function getApi() {
    // fetch request gets a list of all the repos for the breweries for a city that the user inputs.
    var requestUrl = 'https://api.openbrewerydb.org/v1/breweries?by_city=' + city + '&per_page=3';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
      })
      //Creates the elemnt and displays it as a list item in html page. We can change it to cards later. :)
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = data[i].html_url;
          Brewerylist.appendChild(listItem);
        }
      });
    };
    Button.addEventListener('click', getApi);

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