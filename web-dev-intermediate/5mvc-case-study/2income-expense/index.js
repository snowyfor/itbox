/*
Create Income & Expense class in IncomeExpense.js
-add 'name, total, category' attribute within them

Create Note class in Note.js as Factory Class
-add 'list' attribute that have '[]' as default value;
-include addIncome(), addExpense(), listIncome(), listExpense(), balance()
-addIncome() & addExpense() will add 1 income/expense to 'list'
-listIncome() & listExpense() will show all income/expense
-balance() will sum total = totalIncome - totalExpense
 if(total > 0) then 'Status: plus!'
 else if(total < 0) then 'Status: minus!'
 else 'Status: balanced!'

Run node index.js in terminal (with cd this directory)
*/

const Note = require('./Note');

let note = new Note();
note.addIncome("Monthly Salary", 5000);
note.addExpense("Electricity Bill", 1000);
note.listIncome();
note.listExpense();
note.Balance();