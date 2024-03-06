// function calculateInterest() {
//     var amount = parseFloat(document.getElementById('amount').value);
//     var rate = parseFloat(document.getElementById('rate').value);

//     if (isNaN(amount) || isNaN(rate)) {
//         alert('Please enter valid numbers for amount and rate of interest.');
//         return;
//     }

//     var monthlyInterest = (amount * rate / 100) / 12;
//     document.getElementById('result').innerHTML = 'Monthly Interest: $' + monthlyInterest.toFixed(2);
// }

function calculateInterest() {
    var amount = parseFloat(document.getElementById('amount').value);
    var years = parseInt(document.getElementById('years').value);
    var rate = parseFloat(document.getElementById('rate').value);

    if (isNaN(amount) || isNaN(years) || isNaN(rate)) {
        alert('Please enter valid numbers for amount, years, and rate of interest.');
        return;
    }

    var interest = (amount * rate * years) / 100;
    var totalAmount = amount + interest;

    document.getElementById('result').innerHTML = 'Simple Interest: $' + interest.toFixed(2) + '<br>Total Amount: $' + totalAmount.toFixed(2);
}

