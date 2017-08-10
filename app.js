var herokuUrl = "https://wobble-mind.herokuapp.com";
var interval;
var noRequests = 0;

window.onload = function() {
  interval = setInterval(request, 1000);
}

function redirect () {
  window.location.replace(herokuUrl);
}

function request () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', herokuUrl);
  
  xhr.timeout = 2000; // time in milliseconds
  
  xhr.onload = function () {
    clearInterval(interval);
    redirect();
  };
  
  xhr.ontimeout = function (e) {
    var countdown = document.getElementById('countdown');
    countdown.innerText = "Retries:" + noRequests;
  };
  xhr.send(null);
  noRequests++;
} 


