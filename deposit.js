// step-1: addEventListener add btn-deposit...
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: depositField.value;
    const depositField = document.getElementById('deposit-field');
    const depositFieldAmountString = depositField.value;
    const newDepositFieldAmount = parseFloat(depositFieldAmountString);

    // step-3: clear the depositField amount..
    depositField.value = '';

    // step-4: deposit-total amount...
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalAmountString = depositTotalElement.innerText;
    const depositTotalAmount = parseFloat(depositTotalAmountString);
    
    // step-5: Calculate the amount
    const newDepositTotal = depositTotalAmount + newDepositFieldAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step-6: balance-total element set the id
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalElement.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    // step-7: Calculate the total balance..
    const newBalanceTotal = balanceTotalAmount + newDepositFieldAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});