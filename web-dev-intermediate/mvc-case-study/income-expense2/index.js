/*
Create Income & Expense class in IncomeExpense.js
-add 'name, total, category' attribute within them

See data.json

Create Note class in Note.js
-include static addIncome(), addExpense(), listIncome(), listExpense(), balance()
-include static save() to transfer data to data.json
-addIncome() & addExpense() will add 1 income/expense to data.json
-listIncome() & listExpense() will show all income/expense from data.json
-balance() will sum total = totalIncome - totalExpense
 if(total > 0) then 'Status: plus!'
 else if(total < 0) then 'Status: minus!'
 else 'Status: balanced!'

Run this index.js file while opening data.json
*/

const Note = require('./Note');

console.log("\n----------------------------------------");
Note.listIncome();
Note.listExpense();
console.log("\n-----(after addIncome & addExpense)-----");
Note.addIncome("Bonus", 3000);
Note.addExpense("Bill Payment", 2000);
Note.listIncome();
Note.listExpense();
console.log("\n----------------------------------------");
Note.balance();
console.log("\n----------------------------------------");
