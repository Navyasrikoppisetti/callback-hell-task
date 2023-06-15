(function () {
    function countdown(number, callback) {
      if (number > 0) {
        document.getElementById('countdown').innerText = number;
        setTimeout(function () {
          countdown(number - 1, callback);
        }, 1000);
      } else {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        callback();
      }
    }
  
    function displayMessage() {
      document.getElementById('message').innerText = 'HAPPY INDEPENDENCE DAY';
    }
  
    countdown(10, displayMessage);
  })();
  