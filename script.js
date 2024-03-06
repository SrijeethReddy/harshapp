function calculateInterest() {
    var amount = parseFloat(document.getElementById('amount').value);
    var rate = parseFloat(document.getElementById('rate').value);

    if (isNaN(amount) || isNaN(rate)) {
        alert('Please enter valid numbers for amount and rate of interest.');
        return;
    }

    var monthlyInterest = (amount * rate / 100) / 12;
    document.getElementById('result').innerHTML = 'Monthly Interest: $' + monthlyInterest.toFixed(2);
}
