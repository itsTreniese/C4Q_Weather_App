// 
var CLIENT_ID = 'fmvWxQCwHX8ALA2ayj1P9';
var CLIENT_SECRET = 'gMHQeWcRF5g0a01QxPA3WkBj4AhFsPg7ocTrLr0N';

var zip = 10453;



var button = document.getElementById('button');
button.addEventListener('click', function() {
    
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.aerisapi.com/forecasts/' + zip + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET);

    request.onload = function () {
        zip = document.getElementById('zip').value;
        if (request.readyState === 4 && request.status === 200) {

            var data = JSON.parse(request.responseText);
            //console.log(data);


        }



    };

    request.send();
});

function renderText(){
    
}