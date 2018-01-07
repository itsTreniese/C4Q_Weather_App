var CLIENT_ID = config.ID;
var CLIENT_SECRET = config.SECRET;
var dataContainer = document.getElementById('data');
var zip = 10453;



var button = document.getElementById('button');
button.addEventListener('click', function() {
    
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.aerisapi.com/forecasts/'+ zip +'?client_id='+ CLIENT_ID + '&client_secret=' + CLIENT_SECRET);

    request.onload = function () {
        zip = document.getElementById('zip').value;
        if (request.readyState === 4 && request.status === 200) {

            var responseData = JSON.parse(request.responseText);
                //   console.log(responseData);
            renderText(responseData);
        }
    };
    request.send();
});

function renderText(responseData){
    var renderData = document.getElementById('data');
    var weather = responseData.response[0].periods[0];

    //Fahrenheit
    var maxTempF = weather.maxTempF;
    var minTempF = weather.minTempF;

    //Celcius
    var maxTempC = weather.maxTempC;
    var minTempC = weather.minTempC;

    //Date
    var forecastDate = weather.dateTimeISO;

    //text var's
    var displayMax = "Today's High temperature is " + maxTempF + "&#176;F";
    var displayMin = " with a low of " + minTempF + "&#176;F.";

        if (maxTempF || minTempF < 32){
    
           // console.log("The temp is below freezing.")
        }

        if (maxTempC || minTempC < 0) {

           // console.log("The temp is below freezing.")
        }

    // Weather display
        renderData.innerHTML = displayMax + displayMin + "<br>" + forecastDate;
        
      //  console.log(JSON.stringify(forecastDate));

      //  console.log(typeof maxTempC);

    //Display all days
    var dailyForecast = document.querySelectorAll('.box');
    var x;
    dailyForecast.forEach( div => {

        var weatherRender1 = document.getElementById('box_1');
        weatherRender1.innerHTML = responseData.response[0].periods[0].maxTempF;


    });



}