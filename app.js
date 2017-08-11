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
  
  xhr.onload = function () {
    if (state === "ready") {
      clearInterval(interval);
      redirect();
    } else if state === "waiting" {
      var countdown = document.getElementById('countdown');
      countdown.innerText = "Retries:" + noRequests;
    }
  };
  
  xhr.onerror = function(e){
    console.log(e);
  }
  
  xhr.send(null);
  noRequests++;
} 


