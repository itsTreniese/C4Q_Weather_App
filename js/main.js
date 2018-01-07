var CLIENT_ID = config.ID;
var CLIENT_SECRET = config.SECRET;
var dataContainer = document.getElementById('data');
var zip = 10453;



var button = document.getElementById('button');
button.addEventListener('click', function() {
    //create the request object
    var request = new XMLHttpRequest();
    // Open a request -- The browser is ready to send the request
    request.open('GET', 'http://api.aerisapi.com/forecasts/'+ zip +'?client_id='+ CLIENT_ID + '&client_secret=' + CLIENT_SECRET);

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
    
    var days = responseData.response[0].periods;

    for(let i = 0; i < days.length;i++){
        
       

        var dailyHigh = days[i].maxTempF;
        var dailyLow = days[i].minTempF;
        var dailyDate = days[i].dateTimeISO;
        var img = days[i].icon;

         console.log(dailyHigh, dailyLow, dailyDate);
            console.log("The Daily High for "+dailyDate+" is "+dailyHigh);

        var dailyForecastContainer = document.querySelectorAll('.box');
        
        for(let x = 0; x < dailyForecastContainer.length; i++){

            dailyForecastContainer[x].innerHTML = "I'm the container at" + x;

        }
    }


}