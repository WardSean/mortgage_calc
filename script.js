// Mortgage Calculator
document.addEventListener("DOMContentLoaded", function() {
    const mortgageForm = document.querySelector("#mortgageForm");
    mortgageForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const principal = document.querySelector("#principal").value;
      const interestRate = document.querySelector("#interestRate").value / 100 / 12;
      const payments = document.querySelector("#payments").value;
  
      const x = Math.pow(1 + interestRate, payments);
      const monthly = (principal * x * interestRate) / (x - 1);
  
      const result = document.querySelector("#result");
      result.innerHTML = `$${monthly.toFixed(2)} per month`;
    });
  });
  
  // Future Value Calculator
  document.addEventListener("DOMContentLoaded", function() {
    const futureValueForm = document.querySelector("#futureValueForm");
    futureValueForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const presentValue = document.querySelector("#presentValue").value;
      const interestRate = document.querySelector("#interestRate").value / 100;
      const years = document.querySelector("#years").value;
  
      const futureValue = presentValue * Math.pow(1 + interestRate, years);
  
      const result = document.querySelector("#result");
      result.innerHTML = `$${futureValue.toFixed(2)}`;
    });
  });
  
  // Present Value of Annuity Calculator
  document.addEventListener("DOMContentLoaded", function() {
    const presentValueForm = document.querySelector("#presentValueForm");
    presentValueForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const paymentAmount = document.querySelector("#paymentAmount").value;
      const interestRate = document.querySelector("#interestRate").value / 100 / 12;
      const numPayments = document.querySelector("#numPayments").value;
  
      const presentValue =
        (paymentAmount *
          (1 - Math.pow(1 + interestRate, -numPayments))) /
        interestRate;
  
      const result = document.querySelector("#result");
      result.innerHTML = `$${presentValue.toFixed(2)}`;
    });
  });
  