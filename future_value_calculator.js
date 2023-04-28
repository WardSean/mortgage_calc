document.addEventListener("DOMContentLoaded", function() {
    const futureValueForm = document.getElementById("future-value-form");
  
    futureValueForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const presentValue = parseFloat(document.getElementById("present-value").value);
      const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
      const numYears = parseFloat(document.getElementById("num-years").value);
      
      const futureValue = presentValue * Math.pow(1 + interestRate, numYears);
  
      const futureValueRounded = Math.round(futureValue * 100) / 100;
      
      document.getElementById("futureValueResult").innerHTML = "The future value is $" + futureValue.toFixed(2);
    });
  });
  
  