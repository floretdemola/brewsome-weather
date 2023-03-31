var tableBody = document.getElementById('table');
var fetchButton = document.getElementById('button');
var apikey = 'SNRSTR4yxnVLF4rT19bIPdJ1pFJQnyeA';
function getApi() {}
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=SNRSTR4yxnVLF4rT19bIPdJ1pFJQnyeA';
// const settings = {
    
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
// 		"X-RapidAPI-Host": "spotify23.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// var textbox = document.getElementById("textbox")

// function getApi1() {
//     var requestUrl = 'https://binaryjazz.us/wp-json/genrenator/v1';
//     var requestUrl2 = 'https://binaryjazz.us/wp-json/genrenator/v1/genre/'

//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//     };

var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');
var apikey = 'SNRSTR4yxnVLF4rT19bIPdJ1pFJQnyeA';
function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey={SNRSTR4yxnVLF4rT19bIPdJ1pFJQnyeA}';

  f

// function getApi() {
//     var requestUrl1 = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey={apikey}'

//     fetch(requestUrl1)
//       .then(function (response) {
//         return response.json();
//       })
//     };

    $.ajax({
        //Event Search
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey={apikey}",
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    // Parse the response.
                    // Do other things.
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });

//event details
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey={apikey}",
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    // Parse the response.
                    // Do other things.
                },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                }
    });

// function generateRandomString(length) {
//     let text = '';
//     let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
//     for (let i = 0; i < length; i++) {
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
//   }


  
