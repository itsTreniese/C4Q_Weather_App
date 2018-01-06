// 
var CLIENT_ID = config.ID;
var CLIENT_SECRET = config.SECRET;
var dataContainer = document.getElementById('data');
var zip = 10453;



var button = document.getElementById('button');
button.addEventListener('click', function() {
    
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.aerisapi.com/forecasts/' + zip + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET);

    request.onload = function () {
        zip = document.getElementById('zip').value;
        if (request.readyState === 4 && request.status === 200) {

            var data = JSON.parse(request.responseText);
            console.log(data);


        }



    };

    request.send();
});

function renderText(data){
    var dataContent = "";
    dataContainer.innerHTML = 'render text works';
}