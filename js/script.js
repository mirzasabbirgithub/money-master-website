document.getElementById('calculate-btn').addEventListener('click', function () {
    const food = document.getElementById('foodCost');
    const foodExpenses = food.value;
    const foodExpensesTotal = parseFloat(foodExpenses);

    const rent = document.getElementById('rentCost');
    const rentExpenses = rent.value;
    const rentExpensesTotal = parseFloat(rentExpenses);

    const clothes = document.getElementById('clothesCost');
    const clothesExpenses = clothes.value;
    const clothesExpensesTotal = parseFloat(clothesExpenses);

    //calculate total cost
    const totalCost = foodExpensesTotal + rentExpensesTotal + clothesExpensesTotal;

    //total Expenses
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalCost;


    //total income
    const income = document.getElementById('total-income');
    const totalIncome = income.value;
    const totalAmount = parseFloat(totalIncome);

    const totalFinalBalance = totalAmount - totalCost;

    //balance
    const totalBalance = document.getElementById('last-balance');
    totalBalance.innerText = totalFinalBalance;


});