### Exercice 1 : Créer une classe `Person` avec des propriétés et des méthodes simples

**Enoncé** : Créez une classe `Person` avec les propriétés `firstName`, `lastName`, et `age`. Ajoutez une méthode `greet()` qui affiche un message de salutation comme "Hello, my name is {firstName} {lastName}, and I am {age} years old."

```ts
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
} catch (error : any) {
    console.log(error.message)
}
```

---

### Exercice 2 : Héritage avec `Employee` et `Manager`

**Enoncé** : Créez une classe `Employee` avec une méthode `work()` qui affiche "I am working". Créez une classe `Manager` qui hérite de `Employee` et ajoute une méthode `manage()` qui affiche "I am managing the team". Instanciez un `Manager` et appelez à la fois `work()` et `manage()`.

---

```ts
class Employee {
    constructor(protected firstName : string){}
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
```


### Exercice 3 : Encapsulation avec `BankAccount`

**Enoncé** : Créez une classe `BankAccount` avec une propriété `balance`. Ajoutez des méthodes `deposit(amount)` et `withdraw(amount)` pour créditer et débiter l'argent, respectivement. Assurez-vous que le solde ne puisse pas être modifié directement (utilisez des getters et setters).

```ts
class BankAccount {
    private balance: number = 0;

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}, new balance: ${this.balance}`);
        } else {
            console.log("Amount must be greater than 0");
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}, new balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds or invalid amount");
        }
    }
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());
```

---


### Exercice 4 : Utilisation de l'interface `Vehicle`

**Enoncé** : Créez une interface `Vehicle` qui définit la méthode `startEngine()`. Créez deux classes `Car` et `Bike` qui implémentent cette interface. Chaque classe devra afficher un message spécifique lorsqu'on appelle la méthode `startEngine()`.

```ts
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
```

---


### Exercice 5 : Interface et polymorphisme avec `Shape`

**Enoncé** : Créez une interface `Shape` avec une méthode `area()`. Créez deux classes `Circle` et `Rectangle` qui implémentent cette interface. Chaque classe doit calculer l'aire de la forme correspondante. Utilisez du polymorphisme pour afficher l'aire de chaque forme.

```ts
interface Shape {
    area(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
        // PI*R^2
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    area(): number {

        return this.width * this.height;
    }
}

class Square implements Shape {
    constructor(private side: number) {}

    area(): number {
        
        return this.side * this.side;
    }
}

const circle = new Circle(5);
console.log(`Circle area: ${circle.area()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${rectangle.area()}`);

const square = new Side(2);
console.log(`Rectangle area: ${square.area()}`);
```

---