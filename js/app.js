//get input value func
function getInputValue(inputId){
    const inputValue = document.getElementById(inputId).value;
    return parseFloat(inputValue);
}

//Total Expenses Amount func
function getExpenseAmount(){
    const foodAmount = getInputValue('food-total');
    const rentAmount = getInputValue('rent-total');
    const othersAmount = getInputValue('others-total');

   const expenseTotalAmount = foodAmount + rentAmount + othersAmount;
   return expenseTotalAmount;
}

//total income amount func
function getTotalIncome(){
    //total income amount
    const incomeAmount = getInputValue('income-total');
    return incomeAmount;
}

//total balance func
function getTotalBalance(){
    const expenseAmount = getExpenseAmount();
    //update balance
    const totalIncome = getTotalIncome();
    const totalBalance = totalIncome - expenseAmount;
    return totalBalance;
}


//calculate handler
document.getElementById('calculate-btn').addEventListener('click', function(){
    //total expense amount
    const expenseAmount = getExpenseAmount();
    //display total expense amount
    const totalExpenseText = document.getElementById('total-expense');
    totalExpenseText.innerText = expenseAmount;

    //display total amount
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = getTotalBalance();
    totalBalanceText.innerText = totalBalance;
})

//saving handler
document.getElementById('saving-btn').addEventListener('click', function(){
    const savingPercentage = getInputValue('saving-percentage');
    const totalIncome = getTotalIncome();
    //total saving by percentage
    const totalSavingParcentage = (totalIncome * savingPercentage) / 100;
    
    //update saving amount
    const savingAmountText = document.getElementById('saving-amount');
    savingAmountText.innerText = totalSavingParcentage;

    // update remaining balance 
    const remainingText = document.getElementById('remaning-amount');
    const balance = getTotalBalance();
    const remainingBalance = balance - totalSavingParcentage;
    remainingText.innerText = remainingBalance;

});

