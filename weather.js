// for (var i = 0; i < localStorage.length; i++) {
//   console.log(cityName);
// 	var city = localStorage.length(i);

// 	var cityName = (city);

// 	cityName.append();
 
//   }

//   var searchButton = $(".button");

var apiKey = "a0c98074cefb36cd62ed3ed92dddf798";
var baseURL1 =
  "https://api.openweathermap.org/data/2.5/weather?q=austin&appid=" + apiKey;

fetch(baseURL1)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
	  console.log(res);
    var cityEl = document.querySelector("#city");
	cityEl.textContent = res.name;
    var lat = res.coord.lat;
    var lon = res.coord.lon;
    var baseURL2 =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey + "&units=imperial";

    fetch(baseURL2)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
		var tempEl = document.querySelector("#temp");
		tempEl.textContent = data.current.temp
      });
  });

// if(length>0 && length<6) {
//   $(".containerDay1").append(
//     (day.dt).format("M/DD/YYYY")]
//   )
  