function searchCity(searchingCity){
 
  
  var apiKey = "a6a3d14f7393320c892d52e7e25b0a02";
  var baseURL1 =
    "https://api.openweathermap.org/data/2.5/weather?q="+searchingCity+"&appid=" + apiKey;
  
    fetch(baseURL1)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res);
      $("#city").text(res.name)
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
        $("#temp").text( data.current.temp + " °F");
        $("#Humidity").text("Humidity: " + data.current.humidity + " %");
          $("#Wind").text("Wind Speed: " + data.current.wind_speed + " MPH");
          $("#UV").text("UV Index: " + data.current.uvi);
          $("<img>").appendTo("#img").attr("src", `https://openweathermap.org/img/w/${res.weather[0].icon}.png`); //ICON 
  
          for (let i = 1; i < 6; i++){
            $("#date" +i).text(moment().add(i, "days").format("MM/DD/YYYY"));     //Date at top of cards
            $("<img>").appendTo("#icon"+ i).attr("src", `https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png`); //ICON
            $("#temp" + i).text("Temperature: " + data.daily[i].temp.day + " °F");
            $("#humidity" + i).text("Humidity: " + data.daily[i].humidity + " %");
      }
      })
       
        });
}
$("#search-button").on("click", function(){
  var city= $("#search-value").val()
  searchCity(city)
  saveCity(city)
})
  
    
        
       


function saveCity(city){
  $("#history").html("")
  let cities = JSON.parse(localStorage.getItem('cities'));
        if (!cities) {
             cities = [];
            
        }
cities.push(city)
localStorage.setItem('cities', JSON.stringify(cities));

       for (let i = 0; i < cities.length; i++) {
            let button = $("<button>");
            let city = cities[i];
             button.click(function(event){
             event.preventDefault();
               searchCity(city)
             });
            button.appendTo("#history").attr("class", "btn btn-outline-info pastCitySearch col-12").text(city);
         }
}

    function loadCities(){
      let cities = JSON.parse(localStorage.getItem('cities'));
        if (!cities) {
             cities = [];
            
        }

localStorage.setItem('cities', JSON.stringify(cities));

       for (let i = 0; i < cities.length; i++) {
            let button = $("<button>");
            let city = cities[i];
             button.click(function(event){
             event.preventDefault();
               searchCity(city)
             });
            button.appendTo("#history").attr("class", "btn btn-outline-info pastCitySearch col-12").text(city);
         }

    }     
  loadCities()  
  

  //   getWeather()

  //   {
  //      
  
      
        
  //   }
  // }); 
  // });

 
       


  