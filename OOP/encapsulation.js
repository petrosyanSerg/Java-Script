// ------------------------------ Инкапсуляция в ООП ------------------------------

// Инкапсуляция - это принцип ООП, который предполагает скрытие внутреннего состояния объекта
// и предоставление доступа к нему только через определенные методы.

// Пример инкапсуляции в JavaScript с использованием классов

class BankAccount {
    // Приватное свойство для хранения баланса
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance; // Инициализация баланса
    }

    // Метод для получения текущего баланса
    getBalance() {
        return this.#balance;
    }

    // Метод для внесения средств на счет
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    // Метод для снятия средств со счета
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log('Insufficient funds or invalid withdrawal amount.');
        }
    }
}

// Создание экземпляра класса BankAccount
const myAccount = new BankAccount(1000);

// Попытка доступа к приватному свойству напрямую (будет ошибка)
// console.log(myAccount.#balance); // SyntaxError

// Использование методов для взаимодействия с балансом
console.log(`Initial Balance: $${myAccount.getBalance()}`); // Initial Balance: $1000
myAccount.deposit(500); // Deposited: $500
console.log(`Balance after deposit: $${myAccount.getBalance()}`); // Balance after deposit: $1500
myAccount.withdraw(200); // Withdrew: $200
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`); // Balance after withdrawal: $1300
myAccount.withdraw(2000); // Insufficient funds or invalid withdrawal amount.
console.log(`Final Balance: $${myAccount.getBalance()}`); // Final Balance: $1300

// ------------------------------ Конец примера ------------------------------
// В этом примере свойство #balance является приватным и не может быть доступно напрямую из вне класса.
// Все взаимодействия с балансом происходят через методы deposit, withdraw и getBalance,
// что обеспечивает контроль над состоянием объекта.
