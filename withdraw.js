document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2...get withdraw amount from the deposit input field..
    const withdrawField = document.getElementById('withdraw-field');
    //step-2.5...convert string deposit amount to a number type..
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //step-3...clear the deposit input field after getting the value..
    withdrawField.value = '';
    // step-3.5....(isNaN(newWithdrawAmount))
    if (isNaN(newWithdrawAmount)) {
        alert('pease provide the number...');
        return;
    }
    // step-4...get the withdraw previous total..
    const withdrawTotalElement = document.getElementById('withdraw-total');
    //step-4.5...convert string deposit amount to a number type..
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousWithdrawTotalString);
    // step-5... calculate the new withdraw amount and set the to the withdraw total element..
    const newWithdrawTotal = previousDepositTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    // step-6 ...get previous balance
    const balanceTotalElement = document.getElementById('balance-total');
    const newPreviousBalanceTotalString = balanceTotalElement.innerText;
    const newPreviousBalanceTotal = parseFloat(newPreviousBalanceTotalString);
    // step-6.5...
    if (newWithdrawAmount > newPreviousBalanceTotal) {
        alert('Nijer er Banka a taka nai...');
        return;
    }
    // step-7..calculate the new balance total and set it to the balance total element..
    const newBalanceTotal = newPreviousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});