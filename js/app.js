//Total Expenses Amount func
function getExpenseAmount(){
    const foodInput = document.getElementById('food-total');
    const foodAmount = parseFloat(foodInput.value);
    const rentInput = document.getElementById('rent-total');
    const rentAmount = parseFloat(rentInput.value);
    const othersInput = document.getElementById('others-total');
    const othersAmount = parseFloat(othersInput.value);

   const expenseTotalAmount = foodAmount + rentAmount + othersAmount;
   return expenseTotalAmount;
}

//total income amount func
function getTotalIncome(){
    //total income amount
    const incomeInput = document.getElementById('income-total');
    const incomeAmount = parseFloat(incomeInput.value);
    return incomeAmount;
}


//calculate handler
document.getElementById('calculate-btn').addEventListener('click', function(){
    //total expense amount
    const expenseAmount = getExpenseAmount();
    //display total expense amount
    const totalExpenseText = document.getElementById('total-expense');
    totalExpenseText.innerText = expenseAmount;
    //update balance
    const totalBalanceText = document.getElementById('total-balance');
    const totalIncome = getTotalIncome();
    const totalBalance = totalIncome - expenseAmount;
    totalBalanceText.innerText = totalBalance;
})