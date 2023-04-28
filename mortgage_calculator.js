document.addEventListener("DOMContentLoaded", function() {
  const mortgageForm = document.getElementById("mortgage-form");

  mortgageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById("loan-term").value) * 12;
    
    const mortgagePayment = (principal * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);

    const mortgagePaymentRounded = Math.round(mortgagePayment * 100) / 100;
    
    document.getElementById("result").innerHTML = "Your monthly mortgage payment is: $" + mortgagePaymentRounded;
  });
});

