const { Income, Expense } = require('./IncomeExpense');
const fs = require('fs');

class Note {
    static listIncome() {
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let incomes = temp.incomes;
        console.log("List Incomes: ");
        incomes.forEach(income => {
            const { name, total } = income;
            console.log(`-${name}, Rp.${total}`);
        })
    }
    static listExpense() {
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let expenses = temp.expenses;
        console.log("List Expenses: ");
        expenses.forEach(expense => {
            const { name, total } = expense;
            console.log(`-${name}, Rp.${total}`);
        })
    }
    static addIncome(name, total) {
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let income = new Income(name, total);
        temp.incomes.push(income);
        
        this.save(temp);
    }
    static addExpense(name, total) {
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        let expense = new Expense(name, total);
        temp.expenses.push(expense);
        
        this.save(temp);
    }
    static save(data) {
        fs.writeFileSync('./data.json',JSON.stringify(data,null,3));
    }
    static balance() {
        let totalIncome = 0;
        let totalExpense = 0;
        let temp = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
        temp.incomes.forEach(income => {
            totalIncome += income.total;
        })
        temp.expenses.forEach(expense => {
            totalExpense += expense.total;
        })

        //Status: plus, minus, balanced
        let total = totalIncome - totalExpense;
        console.log(`Total income: Rp.${totalIncome}`);
        console.log(`Total expense: Rp.${totalExpense}`);
        if(total > 0) {
            console.log('Status: plus!');
        } else if(total < 0) {
            console.log('Status: minus!');
        } else {
            console.log('Status: balanced!');
        }
    }
}

module.exports = Note;