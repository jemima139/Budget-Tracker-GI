class Transaction {
    constructor(description, amount) {
        this.description = description; // Sets the description of the transaction
        this.amount = amount; // Sets the amount of the transaction
    }
}

class Income extends Transaction {
    constructor(description, amount) {
        super(description, amount); // super() method calls the parent class constructor for income
    }
}

class Expense extends Transaction {
    constructor(description, amount) {
        super(description, amount); 
    }
}

class Budget {
    constructor() {
        this.incomes = []; // Array to store income transactions
        this.expenses = []; // Array to store expense transactions
        this.totalIncome = 0; 
        this.totalExpense = 0; 
        this.totalBudget = 0; 
    }

    addTransaction(transaction) {
        if (transaction instanceof Income) {
            this.incomes.push(transaction); // Adds the income transaction to the incomes array
            this.totalIncome += transaction.amount; // Updates the total income
        } else if (transaction instanceof Expense) {
            this.expenses.push(transaction); // Adds the expense transaction to the expenses array
            this.totalExpense += transaction.amount; // Updates the total expense
        }
        this.calculateTotalBudget(); // Recalculates the total budget
        this.updateUI(); // Updates the UI with the new totals
    }

    calculateTotalBudget() {
        this.totalBudget = this.totalIncome - this.totalExpense; // Calculates the total budget as income minus expenses
    }

    updateUI() {
        document.getElementById('total-income').textContent = `$${this.totalIncome.toFixed(2)}`; // Updates total income display
        document.getElementById('total-expense').textContent = `$${this.totalExpense.toFixed(2)}`; 
        document.getElementById('total-budget').textContent = `$${this.totalBudget.toFixed(2)}`; 
    }

    showError(message) {
        const errorMessage = document.getElementById('error-message'); // Gets the error message element
        errorMessage.textContent = message; // Displays the error message
        setTimeout(() => {
            errorMessage.textContent = ''; // Clears the error message after 3 seconds
        }, 3000);
    }

    clearAll() { //Clears and rests all the fields
        this.incomes = []; 
        this.expenses = []; 
        this.totalIncome = 0; 
        this.totalExpense = 0; 
        this.totalBudget = 0; 
        this.updateUI(); // Updates the UI with the reset values
        clearInputs(); // Clears the input fields
    }
}

const budget = new Budget(); // Creates a new Budget instance

document.getElementById('addincome').addEventListener('click', () => {
    const description = document.getElementById('description').value; // Gets the description input value
    const amount = parseFloat(document.getElementById('amount').value); 
    if (description && amount > 0) { // Validates the input values
        const income = new Income(description, amount); // Creates a new Income instance
        budget.addTransaction(income); // Adds the income transaction to the budget
        clearInputs(); // Clears the input fields
    } else {
        budget.showError('Please enter a valid income description and amount.'); // Show an error message for invalid inputs
    }
});

document.getElementById('addexpense').addEventListener('click', () => {
    const description = document.getElementById('description').value; // Get the description input value
    const amount = parseFloat(document.getElementById('amount').value);
    if (description && amount > 0) { // Validates the input values
        const expense = new Expense(description, amount); // Creates a new Expense instance
        budget.addTransaction(expense); // Adds the expense transaction to the budget
        clearInputs(); // Clears the input fields
    } else {
        budget.showError('Please enter a valid expense description and amount.'); // Show san error message for invalid inputs
    }
});

document.getElementById('clear').addEventListener('click', clearInputs); // Attaches an event listener to clear button

document.getElementById('allclear').addEventListener('click', () => {
    budget.clearAll(); // Attaches an event listener to all clear button to reset the budget
});

function clearInputs() {
    document.getElementById('description').value = ''; // Clears the description input field
    document.getElementById('amount').value = ''; 
    document.getElementById('transactionDate').value = ''; 
}

// Initial update to ensure the UI is set to initial state
budget.updateUI();
