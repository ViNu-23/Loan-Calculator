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
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedPayment = parseFloat(years.value)*12
  const x = Math.pow(1 + calculatedInterest,calculatedPayment);
  const monthly = (principal*x*calculatedInterest)/(x-1);

if(isFinite(monthly)){
    monthly_payment.value = monthly.toFixed(2);
    total_amount.value = (monthly * calculatedPayment).toFixed(2);
    total_interest.value = (monthly*calculatedPayment-principal).toFixed(2);
    document.getElementById('results').style.display='block'
}
else{
    showAlert('Please Enter Amount');
}

}

function showAlert(error) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  card.insertBefore(errorDiv, heading);

  // Remove the alert after 3 seconds
  setTimeout(function() {
    errorDiv.remove();
  }, 1000);
}