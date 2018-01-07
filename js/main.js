var CLIENT_ID = config.ID;
var CLIENT_SECRET = config.SECRET;
var dataContainer = document.getElementById('data');
var zip = 10453;



var button = document.getElementById('button');
button.addEventListener('click', function () {
    //create the request object
    var request = new XMLHttpRequest();
    // Open a request -- The browser is ready to send the request
    request.open('GET', 'http://api.aerisapi.com/forecasts/' + zip + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET);

    //create the callback
    request.onload = function () {
        zip = document.getElementById('zip').value;
        if (request.readyState === 4 && request.status === 200) {

            var responseData = JSON.parse(request.responseText);
            //   console.log(responseData);
            renderText(responseData);
        }
    };
    //send the request
    request.send();
});

function renderText(responseData) {
    var renderData = document.getElementById('data');
    var weather = responseData.response[0].periods[0];

    //Fahrenheit
    var maxTempF = weather.maxTempF;
    var minTempF = weather.minTempF;

    //Celcius
    var maxTempC = weather.maxTempC;
    var minTempC = weather.minTempC;

    //Display current weather
    var displayMax = "Today's High temperature is " + maxTempF + "&#176;F";
    var displayMin = " with a low of " + minTempF + "&#176;F.";

    //Conditional display for freezing temps
    if (maxTempF || minTempF < 32) {

        // console.log("The temp is below freezing.")
    } else {

    }

    if (maxTempC || minTempC < 0) {

        // console.log("The temp is below freezing.")
    } else {

    }

    // Weather display
    renderData.innerHTML = displayMax + "<br>" + displayMin;

    //Display all days
    var days = responseData.response[0].periods;
    var dailyForecastContainer = document.querySelectorAll('.box');

    //Loop thru days of forecast
    for (let i = 0; i < days.length; i++) {

        var dailyHigh = days[i].maxTempF;
        var dailyLow = days[i].minTempF;
        var dailyDate;
        var img;
        var imgSrc = days[i].icon;
        var timestamp = days[i].timestamp;

        //Loop thru .box to display daily forecast
        for (var x = 0; x < dailyForecastContainer.length; x++) {

            dailyForecastContainer[x].innerHTML = "High " + dailyHigh + "&#176;F" + 
                                                    "<br>" + dailyLow + "&#176;F";
                
                //Date for weather
                var forecastDate = weather.dateTimeISO;
                dailyDate = document.createElement('p');
                dailyDate.innerHTML = forecastDate;
                
                //weather image
                img = document.createElement('IMG');
                img.setAttribute('src', "icons/"+ imgSrc);
                img.setAttribute("width", "55");
                img.setAttribute("height", "55");
                dailyForecastContainer[x].appendChild(img);
                dailyForecastContainer[x].insertBefore(dailyDate);



        }
    }


}