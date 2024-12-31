const { Income, Expense } = require('./IncomeExpense');

class Note {
    constructor(list) {
        this.list = list || [];
    }
    addIncome(name, total) {
        let income = new Income(name, total, 'income');
        this.list.push(income);
    }
    addExpense(name, total) {
        let expense = new Expense(name, total, 'expense');
        this.list.push(expense);
    }
    listIncome() {
        console.log('List income: ');
        this.list.forEach(elm => {
            if(elm.category === 'income') {
                console.log(`${elm.name}, Rp.${elm.total}`);
            }
            
        })
    }
    listExpense() {
        console.log('List Expense: ');
        this.list.forEach(elm => {
            if(elm.category === 'expense') {
                console.log(`${elm.name}, Rp.${elm.total}`);
            }
        })
    }
    Balance() {
        let totalIncome = 0;
        let totalExpense = 0;
        this.list.forEach(elm => {
            if(elm.category === 'income') {
                totalIncome += elm.total;
            } else if (elm.category === 'expense') {
                totalExpense += elm.total;
            }
        })

        //Status: plus, minus, balance
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