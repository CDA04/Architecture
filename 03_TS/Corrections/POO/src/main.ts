

// Exercice 1

class Person {

    constructor(private _firstName: string, private _lastName: string, private _age: number) { }

    get firstName(): string {
        return this._firstName
    }

    get lastName(): string {
        return this._lastName
    }

    get age(): number {
        return this._age
    }

    set firstName(firstName: string) {
        if (firstName.length <= 0)
            throw new Error('bad fistName')

        this._firstName = firstName
    }

    set lastName(lastName: string) {
        if (lastName.length <= 0)
            throw new Error('bad lastName')

        this._lastName = lastName
    }

    set age(age: number) {
        if (age <= 0 || age > 120)
            throw new Error('bad age')

        this._age = age
    }

    greet(): string {

        return `Hello, my name is ${this.firstName} ${this.lastName}, and I am ${this.age} years old`
    }
}

try {
    const p = new Person('alan', 'lu', 19)
    p.age = -10
    console.log(p.greet())
} catch (error: any) {
    console.log(error.message)
}

// Exercice 2
class Employee {
    constructor(protected firstName: string) { }
    work(): string {
        return "I am working";
    }
}

// dans la sous-classe on a accès à proriété et méthode public et protected
class Manager extends Employee {
    manage(): string {
        return `I am ${this.firstName} managing the team`;
    }
}

const manager = new Manager('Alan');
console.log(manager.work());  // Appelle la méthode héritée
console.log(manager.manage());  // Appelle la méthode spécifique à Manager

// Exercice 3
class BankAccount {
    // initialise le compte 
    private balance: number = 0;


    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        // error first 
        if (amount <= 0) throw new Error('Amount must be greater than 0')

        this.balance += amount
    }

    withdraw(amount: number): void {
        // error first 
        if (this.balance < amount) throw new Error('Amount must be less than balance')

        this.balance -= amount
    }
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());

// Exercice 4
interface Vehicule{
    startEngine(): string ;
}

class Car implements Vehicule{

    startEngine(): string {

        return "start engine car"
    }
}

class Bike implements Vehicule{

    startEngine(): string {

        return "start super bike "
    }
}

const car = new Car
const bike = new Bike

console.log( car.startEngine())
console.log( bike.startEngine())