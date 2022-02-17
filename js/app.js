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
    const errorMessage = document.getElementById('error-message');

    //validation expense amount
    if(isNaN(foodAmount) || isNaN(rentAmount) || isNaN(othersAmount)){
        errorMessage.innerText = 'Expense Amount only Number!';
    }else if(foodAmount < 0 || rentAmount < 0 || othersAmount < 0){
        errorMessage.innerText = 'Expense Amount can not under 0!';
    }else{
        const expenseTotalAmount = foodAmount + rentAmount + othersAmount;
        errorMessage.innerText = '';
        return expenseTotalAmount;
    }

}

//total income amount func
function getTotalIncome(){
    const errorMessage = document.getElementById('error-message');
    //total income amount
    const incomeAmount = getInputValue('income-total');

    //validation
    if(isNaN(incomeAmount)){
        errorMessage.innerText = 'Income amount only number!'; 
    }else if(incomeAmount < 0){
        errorMessage.innerText = 'Income amount can not under 0!';
    }else{
        return incomeAmount;
    }
}

//total balance func
function getTotalBalance(){
    const expenseAmount = getExpenseAmount();
    //update balance
    const totalIncome = getTotalIncome();
    const errorMessage = document.getElementById('error-message');
    // validation
    if(totalIncome >= expenseAmount){
        const totalBalance = totalIncome - expenseAmount;
        return totalBalance;
    }else{
        errorMessage.innerText = 'Expense amount can not over total amount!'
    }
    
}


//calculate handler
document.getElementById('calculate-btn').addEventListener('click', function(){
    //total expense amount
    const expenseAmount = getExpenseAmount();

    // validation expense amount update
    if(typeof expenseAmount != 'undefined'){
        //display total expense amount
        const totalExpenseText = document.getElementById('total-expense');
        totalExpenseText.innerText = expenseAmount;
    }

    //display total amount
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalance = getTotalBalance();

    // validation balance 
    if(isNaN(totalBalance) == false){
        totalBalanceText.innerText = totalBalance;
    }

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

