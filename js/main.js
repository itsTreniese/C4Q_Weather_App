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
    
    var forecastDate = weather.dateTimeISO;

    //text var's
    var displayMax = "Today's High temperature is " + minTempF + "&#176;F";
    var displayMin = "with a low of "tempC + "&#176;C";

    // if(){

    // }

    // Weather in F and C
    renderData.innerHTML = displayF +" and "+ displayC;

    //Display all days
    var dailyForecast = document.querySelectorAll('.box');
    for(let i = 0; i < dailyForecast.length; i++){
        var box = dailyForecast[i];
        var days = responseData.response[0].periods;
        for( let i = 0; i < days.length; i++) {
            days[i];
            dailyForecast.innerHTML = minTempF + maxTempF
        }

    }

}