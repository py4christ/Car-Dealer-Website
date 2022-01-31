
 function selectPaymentOption() {
    var selected = "no"
     if (document.getElementById('cash').checked) {
        selected = document.getElementById('cash').value;
    }
    if (document.getElementById('financing').checked) {
        selected = document.getElementById('financing').value;
    }
    if (document.getElementById('trade_in').checked) {
        selected = document.getElementById('trade_in').value;
    }
    alert(`You have seleted ${selected} option`)
    history.back();
    }  

    function sendRequest() {
      var name =  document.getElementById('name').value;
      var email =  document.getElementById('email').value;
      if (document.getElementById('emailOption').checked) {
      alert(`Hello ${name}! Your Quotation has been sent to ${email}`)
      history.back();
    }
    }
      