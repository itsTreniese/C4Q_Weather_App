var CLIENT_ID = config.ID;
var CLIENT_SECRET = config.SECRET;
var dataContainer = document.getElementById('data');
var zip = 10453;



var button = document.getElementById('button');
button.addEventListener('click', function () {
    //create the request object
    var request = new XMLHttpRequest();
    // Open a request -- The browser is ready to send the request
    request.open('GET', `http://api.aerisapi.com/forecasts/${zip}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);

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
    var displayMax = `Today's High temperature is ${maxTempF} &#176;F`;
    var displayMin = `with a low of ${minTempF} &#176;F`;

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

    //Loop thru days of forecast periods
    for (let i = 0; i < days.length; i++) {

        var dailyHigh = days[i].maxTempF;
        var dailyLow = days[i].minTempF;
        var dailyDate = days[i].dateTimeISO;
        var img;
        var imgSrc = days[i].icon;
        var timestamp = days[i].timestamp;
        var forecastDate = dailyDate.toString().slice(0, 10);
        var dateRender = document.createElement('p');

        // console.log(dailyHigh,dailyLow,dailyDate);

        //7 Day forecast
        var dailyWeatherDiv = document.createElement('div');
        dailyWeatherDiv.innerHTML = `High ${dailyHigh}&#176;F <br> Low ${dailyLow}&#176;F`;
        dailyWeatherDiv.classList.add('box');

        // Add weather icon
        img = document.createElement('IMG');
        img.setAttribute('src', "icons/"+ imgSrc);
        img.setAttribute("width", "55");
        img.setAttribute("height", "55");
        dailyWeatherDiv.appendChild(img);

        //Add date
        dateRender.innerHTML = forecastDate;
        dailyWeatherDiv.appendChild(dateRender);

        //Get the weather element
        var addWeatherInfo = document.querySelector(".weatherDisplay");
        addWeatherInfo.appendChild(dailyWeatherDiv);

    }


}