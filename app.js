var timeLeft = 3;


window.onload = function() {
  countdown();
  setInterval(countdown, 1000);
}

function countdown () {
  var countdown = document.getElementById('countdown');
  countdown.innerHTML = "Redirecting in " + timeLeft;
  if (!timeLeft) {
    window.location.replace("https://glacial-scrubland-75610.herokuapp.com/");
  }
  timeLeft--;
} 


