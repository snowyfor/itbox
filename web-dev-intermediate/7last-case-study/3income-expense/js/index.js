/*
step 1 - DOM Button, tBody table
step 2 - Add Event Listener (just declare)
step 3 - Global Variable
step 4 - incomeHandler()
step 6 - expenseHandler() (copy from incomeHandler)
step 7 - getTransaction()
*/

// DOM Button
const btnIncome = document.querySelector('#btnIncome');
const btnExpense = document.querySelector('#btnExpense');

// Global Variable
let transactions = {
    income : [
        {
            id: 1,
            transaction: 'salary',
            balance: 1000
        }
    ],
    expense: [
        {
            id: 2,
            transaction: 'bill',
            balance: 100
        }
    ]
}

// Add Event Listener
function incomeHandler() {
    // input
    const nameValue = document.querySelector('#name').value;
    const balanceValue = document.querySelector('#balance').value;

    let id;
    if(transactions.income.length === 0) {
        id = 1;
    } else {
        id = transactions.income[transactions.income.length - 1].id + 1;
    }

    let tempObj = {
        id,
        transaction: nameValue,
        balance: +balanceValue
    }

    transactions.income.push(tempObj);
    getTransaction();
    countBalance();

    document.querySelector('#name').value = '';
    document.querySelector('#balance').value = '';

    alert(`"${nameValue}" telah ditambahkan!`);
}

function expenseHandler() {
    // input
    const nameValue = document.querySelector('#name').value;
    const balanceValue = document.querySelector('#balance').value;

    let id;
    if(transactions.expense.length === 0) {
        id = 1;
    } else {
        id = transactions.expense[transactions.expense.length - 1].id + 1;
    }

    let tempObj = {
        id,
        transaction: nameValue,
        balance: +balanceValue
    }

    transactions.expense.push(tempObj);
    getTransaction();
    countBalance();

    document.querySelector('#name').value = '';
    document.querySelector('#balance').value = '';

    alert(`"${nameValue}" telah ditambahkan!`);
}

// getTransaction
function getTransaction() {
    // tBody table
    const tBodyInc = document.querySelector('#tBodyInc');
    const tBodyExp = document.querySelector('#tBodyExp');
    tBodyInc.innerHTML = '';
    tBodyExp.innerHTML = '';

    transactions.income.forEach(inc => {
        tBodyInc.innerHTML += `<tr>
            <td>${inc.id}</td>
            <td>${inc.transaction}</td>
            <td>${inc.balance}</td>
        </tr>`
    })
    transactions.expense.forEach(exp => {
        tBodyExp.innerHTML += `<tr>
            <td>${exp.id}</td>
            <td>${exp.transaction}</td>
            <td>${exp.balance}</td>
        </tr>`
    })
}

// countBalance
function countBalance() {
    let incomeBalance = 0;
    let expenseBalance = 0;

    transactions.income.forEach(inc => {
        incomeBalance += inc.balance;
    })
    transactions.expense.forEach(exp => {
        expenseBalance += exp.balance;
    })

    let difference = incomeBalance - expenseBalance;

    let balanceAmount = document.querySelector('#balance-text');
    balanceAmount.innerHTML = `$${difference}`;
}

btnIncome.addEventListener('click', incomeHandler);
btnExpense.addEventListener('click', expenseHandler);
getTransaction();
countBalance();