// Mortgage Calculator

function calculateMortgage() {
  const principal = parseFloat(document.getElementById("principal").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const numPayments = parseFloat(document.getElementById("numPayments").value);

  const monthlyPayment = (principal * interestRate * Math.pow(1 + interestRate, numPayments)) / (Math.pow(1 + interestRate, numPayments) - 1);

  const monthlyPaymentFormatted = monthlyPayment.toFixed(2);
  const totalPayments = (monthlyPayment * numPayments).toFixed(2);
  const totalInterest = (totalPayments - principal).toFixed(2);

  const resultElement = document.getElementById("mortgageResult");
  resultElement.innerHTML = `<p>Your monthly payment is: $${monthlyPaymentFormatted}</p>
    <p>You will pay a total of $${totalPayments}, of which $${totalInterest} is interest.</p>`;
}

const mortgageForm = document.getElementById('mortgage-form');
const resultDiv = document.getElementById('result');

mortgageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const principal = parseFloat(document.getElementById('principal').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
  const loanLength = parseFloat(document.getElementById('loan-length').value) * 12;

  const monthlyPayment = (principal * interestRate * Math.pow(1 + interestRate, loanLength)) / (Math.pow(1 + interestRate, loanLength) - 1);
  const totalInterest = monthlyPayment * loanLength - principal;

  resultDiv.innerHTML = `
    <p>Monthly payment: $${monthlyPayment.toFixed(2)}</p>
    <p>Total interest paid: $${totalInterest.toFixed(2)}</p>
  `;
});

// Present Value Annuity Calculator

function calculatePresentValue() {
  const paymentAmount = parseFloat(document.getElementById("paymentAmount").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
  const numPayments = parseFloat(document.getElementById("numPayments").value);

  const presentValue = paymentAmount * ((1 - Math.pow(1 + interestRate, -numPayments)) / interestRate);

  const presentValueFormatted = presentValue.toFixed(2);

  const resultElement = document.getElementById("presentValueResult");
  resultElement.innerHTML = `<p>The present value of your annuity is: $${presentValueFormatted}</p>`;
}

const presentValueForm = document.getElementById("presentValueForm");
presentValueForm.addEventListener("submit", function (event) {
  event.preventDefault();
  calculatePresentValue();
});

// Future Value Calculator

function calculateFutureValue() {
  const presentValue = parseFloat(document.getElementById("deposit").value);
  const annualInterestRate = parseFloat(document.getElementById("interest").value);
  const years = parseFloat(document.getElementById("years").value);

  const interestRatePerDay = (annualInterestRate / 100) / 365;
  const numPeriods = years * 365;
  const futureValue = presentValue * Math.pow(1 + interestRatePerDay, numPeriods);

  const futureValueFormatted = futureValue.toFixed(2);

  const resultElement = document.getElementById("futureValueResult");
  resultElement.innerHTML = `<p>The future value of your investment is: $${futureValueFormatted}</p>`;
}


const futureValueForm = document.getElementById("futureValueForm");
futureValueForm.addEventListener("submit", function (event) {
  event.preventDefault();
  calculateFutureValue();
});
