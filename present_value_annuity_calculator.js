// Present Value of Annuity Calculator
function presentValueAnnuityCalculator() {
  // Get input values
  const paymentAmount = Number(document.getElementById('paymentAmount').value);
  const interestRate = Number(document.getElementById('interestRate').value);
  const numPayments = Number(document.getElementById('numPayments').value);

  // Calculate present value of annuity
  const presentValue = paymentAmount * ((1 - Math.pow((1 + interestRate / 1200), -numPayments)) / (interestRate / 1200));

  // Display result
  document.getElementById('presentValueResult').innerHTML = `<p>The present value of the annuity is $${presentValue.toFixed(2)}</p>`;
}

// Attach event listener to form submit button
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  presentValueAnnuityCalculator();
});
