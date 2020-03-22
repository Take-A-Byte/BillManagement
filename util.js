function calculate() {
    let gstRate;
    let invoiceNumberInput = document.getElementById("invoiceNumberInput").value;
    let dateInput = document.getElementById("dateInput").value;
    let partyNameInput = document.getElementById("partyNameInput").value;
    let gstnInput = document.getElementById("gstnInput").value;

    let amountInput = document.getElementById("amountInput").value;
    let totalAmountInput = document.getElementById("totalAmountInput").value;

    // Access Radio Button
    if (document.getElementById("rate_5").checked) {
        gstRate = document.getElementById("rate_5").value;
    } else if (document.getElementById("rate_12").checked) {
        gstRate = document.getElementById("rate_12").value
    } else if (document.getElementById("rate_18").checked) {
        gstRate = document.getElementById("rate_18").value
    } else if (document.getElementById("rate_28").checked) {
        gstRate = document.getElementById("rate_28").value
    }
    // calculateTotalAmount(gstRate, amountInput);
    calculateAmount(gstRate,totalAmountInput);
}
function calculateTotalAmount(gstRate, amount) {
    // let a= "Hello World"
    let f_amount = parseFloat(amount);
    let i_gstRate = parseInt(gstRate);
    let totalAmount = f_amount + i_gstRate * f_amount / 100;

    let roundedTotalAmount = totalAmount.toFixed(2)
    alert(`Total Amount Is: ${roundedTotalAmount}`)
    return roundedTotalAmount;

}
function calculateAmount(gstRate, totalAmount) {
    let i_gstRate = parseInt(gstRate);
    let f_totalAmount = parseFloat(totalAmount);
    let amount = f_totalAmount * 100 / (100 + i_gstRate);
    let roundedAmount = amount.toFixed(2);
    alert(`Amount Is: ${roundedAmount}`);
    return roundedAmount
}