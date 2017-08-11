var herokuUrl = "https://glacial-scrubland-75610.herokuapp.com";
var interval;
var noRequests = 0;

window.onload = function() {
  interval = setInterval(request, 2000);
}

function redirect () {
  window.location.replace(herokuUrl);
}

function request () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://yqd5anxtug.execute-api.eu-west-1.amazonaws.com/prod/testLamdaApiGateway");
  
  xhr.timeout = 500; // time in milliseconds
  
  xhr.onload = function () {
    console.log(state);
    clearInterval(interval);
    redirect();
  };
  
  xhr.onerror = function(e){
    console.log(e);
  }

  xhr.ontimeout = function (e) {
    var countdown = document.getElementById('countdown');
    countdown.innerText = "Retries:" + noRequests;
  };
  xhr.send(null);
  noRequests++;
} 


