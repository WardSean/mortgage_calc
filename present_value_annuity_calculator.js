document.addEventListener("DOMContentLoaded", function() {
    const presentValueForm = document.getElementById("present-value-form");
  
    presentValueForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const paymentAmount = parseFloat(document.getElementById("paymentAmount").value);
      const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
      const numPayments = parseInt(document.getElementById("numPayments").value);
      
      const presentValue = (paymentAmount * (1 - Math.pow(1 + interestRate, -numPayments))) / interestRate;
  
      const presentValueRounded = Math.round(presentValue * 100) / 100;
      
      document.getElementById("presentValueResult").innerHTML = "The present value is $" + presentValue.toFixed(2);
    });
  });
  
  