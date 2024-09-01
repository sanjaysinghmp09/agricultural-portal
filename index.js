document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    var phoneNumber = document.getElementById('phoneNumber').value;
    
    fetch('/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phoneNumber: phoneNumber })
    }).then(response => response.json())
      .then(data => {
        alert(data.message);
      }).catch(error => {
        console.error('Error:', error);
      });
  });



  var sid = "xxxxx";
  var auth_token = "xxxxxx" ;
  
  var twilio = require("twilio")(sid, auth_token);
  
  twilio.messages
    .create({
      from: "+15059855660",
      to: `+91${phoneNumber}`,
      body: `Congratulation ${phoneNumber} Testing `,
    })
    .then(function(res) {console.log("message has sent!")})
    .catch(function(err)  {
      console.log(err);
    });