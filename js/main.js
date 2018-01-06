

var request = new XMLHttpRequest();

request.open('GET', 'http://api.aerisapi.com/forecasts/11101?client_id='+ CLIENT_ID +'&client_secret='+ CLIENT_SECRET);

request.onload = function() {
//    console.log(request.responseText);
var data = request.responseText;

};

request.send();
