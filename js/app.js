$(document).ready(function () {
    var CLIENT_ID = fmvWxQCwHX8ALA2ayj1P9;
    var CLIENT_SECRET = gMHQeWcRF5g0a01QxPA3WkBj4AhFsPg7ocTrLr0N;
    $.get('http://api.aerisapi.com/forecasts/11101?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET, function(data){
        console.log(data);
    })





}