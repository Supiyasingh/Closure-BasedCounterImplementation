//Question-1
function createCounter() {
    let count = 0; // Private variable

    return {
        increment() {
            count++;
            console.log(`Current count: ${count}`);
        },
        decrement() {
            count--;
            console.log(`Current count: ${count}`);
        },
        getCount() {
            return count;
        }
    };
}

// Example usage
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1

// Creating another counter
const anotherCounter = createCounter();
anotherCounter.increment(); // Output: Current count: 1

//Question-2
function createBankAccount() {
    let balance = 0; // Private variable
    const transactionHistory = []; // Array to store transaction history

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                transactionHistory.push({ type: "Deposit", amount });
                console.log(`Deposited: ${amount}`);
            } else {
                console.log("Invalid deposit amount");
            }
        },
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                transactionHistory.push({ type: "Withdrawal", amount });
                console.log(`Withdrawn: ${amount}`);
            } else {
                console.log("Insufficient balance or invalid withdrawal amount");
            }
        },
        checkBalance() {
            console.log(`Current balance: ${balance}`);
        },
        getTransactionHistory() {
            return transactionHistory;
        }
    };
}

// Example usage
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance or invalid withdrawal amount
account.checkBalance(); // Output: Current balance: 300
console.log(account.getTransactionHistory()); // Output: [{type: "Deposit", amount: 500}, {type: "Withdrawal", amount: 200}]
console.log(account.balance); // Output: undefined
