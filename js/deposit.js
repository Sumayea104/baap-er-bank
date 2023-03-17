// step-1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2 get the  deposit amount from the deposit input  field
    // console.log('clicked')
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);
    // value banan e vul korle hobe na
    // console.log(depositAmount);

    // step-3 get the deposit current total amount
    // for non-input(element other than input ,textarea) use innertext to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // console.log(depositTotal);
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4 ; add numbers to set the total deposit 

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

        // step 5 get balance current total

        const balanceTotalElement = document.getElementById('total-balance');
        const previousBalanceTotalString = balanceTotalElement.innerText;
        const previousBalanceTotal = parseFloat(previousBalanceTotalString);

        // step 6 claculate current total balance
        const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

        // set the balance total
        balanceTotalElement.innerText = currentBalanceTotal;




    // step-7 clear the deposit field
    depositField.value = '';



})