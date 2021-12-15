// for (var i = 0; i < localStorage.length; i++) {
//   console.log(cityName);
// 	var city = localStorage.length(i);

// 	var cityName = (city);

// 	cityName.append();
 
//   }

//   var searchButton = $(".button");




var apiKey = "a6a3d14f7393320c892d52e7e25b0a02";
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

      $.ajax({
        url: weatherURL,
        method: "GET",
    }).then(function (res) {
        var uvI = res.value;
       
        $(".city").text(city + " " + moment().format('l'));
        $("<img>").appendTo(".city").attr("src", `https://openweathermap.org/img/w/${response.list[0].weather[0].icon}.png`); //ICON
        $(".temp").text("Temperature: " + response.list[0].main.temp + " °F");
        $(".humidity").text("Humidity: " + response.list[0].main.humidity + " %");
        $(".wind").text("Wind Speed: " + response.list[0].wind.speed + " MPH");
        $(".uvIndex").text("UV Index: " + uvI);
        console.log(response);
        
        
        var Date = newDate();
        var numberOfDaysToAdd = 6;

        var dd = Date.getDate();
        var mm = Date.getMonth() + 1;
        var y =  Date.getFullYear();

        var FormattedDate = dd + '/'+ mm + '/'+ y;

        var myDate = new Date(new Date().getTime()+(5*24*60*60*1000));
        
        for (let i = 1; i < 6; i++){
          $(".date" +[i]).text(moment().add(i, "days").format('l'));     //Date at top of cards
          $(".icon"+ [i]).attr("src", `https://openweathermap.org/img/w/${response.list[(i*8)-1].weather[0].icon}.png`); //ICON
          $(".temp" + [i]).text("Temperature: " + response.list[(i*8)-1].main.temp + " °F");
          $(".humidity" + [i]).text("Humidity: " + response.list[(i*8)-1].main.humidity + " %");
    }
    
    let lat = response.city.lat;
    let lon = response.city.lon;

    getWeather()

    {
        let cities = JSON.parse(localStorage.getItem('cities'));
        if (!cities) {
            cities = [];
            localStorage.setItem('cities', JSON.stringify(cities));
        }
        for (let i = 0; i < cities.length; i++) {
            let button = $("<button>");
            let city = cities[i];
            button.click(function(event){
                event.preventDefault();
                console.log(this.textContent);
                getWeather(this.textContent);
            });
            button.appendTo(".nav").attr("class", "btn btn-outline-info pastCitySearch col-12").text(city);
        }
      
        
    }
  }); 
  });

 
       

// if(length>0 && length<6) {
//   $(".containerDay1").append(
//     (day.dt).format("M/DD/YYYY")]
//   )
  