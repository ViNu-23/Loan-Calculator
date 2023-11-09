const cal = document.getElementById("loan-form");
cal.addEventListener("submit", calculate);

function calculate(e) {
  const amount = document.getElementById("loan_amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthly_payment = document.getElementById("monthly_payment");
  const total_amount = document.getElementById("total_amount");
  const total_interest = document.getElementById("total_interest");
  e.preventDefault();

  const principal = parseFloat(amount.value);
  
  console.log(principal);
}
