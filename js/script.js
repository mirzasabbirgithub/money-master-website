//function
function logicPart(totalAmount) {
    if (isNaN(totalAmount)) {
        alert('Value must be number');
    }
    else if (totalAmount < 0) {
        alert('Give a positive value, negative value not allowed');
    }
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const food = document.getElementById('foodCost');
    const foodExpenses = food.value;
    const foodExpensesTotal = parseFloat(foodExpenses);
    logicPart(foodExpensesTotal); //call function


    //rent part
    const rent = document.getElementById('rentCost');
    const rentExpenses = rent.value;
    const rentExpensesTotal = parseFloat(rentExpenses);
    logicPart(rentExpensesTotal); //call function

    //clothes part
    const clothes = document.getElementById('clothesCost');
    const clothesExpenses = clothes.value;
    const clothesExpensesTotal = parseFloat(clothesExpenses);
    logicPart(clothesExpensesTotal); //call function


    //calculate total cost
    const totalCost = foodExpensesTotal + rentExpensesTotal + clothesExpensesTotal;

    //total Expenses
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalCost;


    //total income
    const income = document.getElementById('total-income');
    const totalIncome = income.value;
    const totalAmount = parseFloat(totalIncome);

    //balance 
    const totalFinalBalance = totalAmount - totalCost;




    //balance replaced
    const totalBalance = document.getElementById('last-balance');
    totalBalance.innerText = totalFinalBalance;

    //savings
    document.getElementById('save-btn').addEventListener('click', function () {
        const savePercetage = document.getElementById('save-percentage');
        const savePertageValue = savePercetage.value;
        const savePercetageTotal = parseFloat(savePertageValue);
        //calculate percentage
        percetageTotal = (savePercetageTotal * totalAmount) / 100;

        //savings amount
        const savingsTotal = document.getElementById('savings-amount');
        savingsTotal.innerText = percetageTotal;

        //remaining balance
        remainingTotalBalance = totalFinalBalance - percetageTotal;

        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = remainingTotalBalance;

    });
});



