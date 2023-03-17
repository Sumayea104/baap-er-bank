//  step-1 add event listener to the deposit button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2 get the  deposit amount from the deposit input  field
    // console.log('clicked');
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawField.value;

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    // console.log(depositTotal);
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentTotalWithdraw;

    withdrawField.value = '';
    const balanceTotalElement = document.getElementById('total-balance');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);

        // step 6 claculate current total balance
        const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalElement.innerText = currentBalanceTotal;
        console.log(currentBalanceTotal);

})