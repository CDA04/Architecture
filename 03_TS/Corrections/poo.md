### Exercice 1 : Créer une classe `Person` avec des propriétés et des méthodes simples

**Enoncé** : Créez une classe `Person` avec les propriétés `firstName`, `lastName`, et `age`. Ajoutez une méthode `greet()` qui affiche un message de salutation comme "Hello, my name is {firstName} {lastName}, and I am {age} years old."

**Correction** :

```typescript
class Person {
    constructor(
        private firstName: string,
        private lastName: string,
        private age: number
    ) {}

    greet(): void {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`);
    }
}

const person = new Person("John", "Doe", 30);
person.greet();
```

### Exercice 2 : Héritage avec `Employee` et `Manager`

**Enoncé** : Créez une classe `Employee` avec une méthode `work()` qui affiche "I am working". Créez une classe `Manager` qui hérite de `Employee` et ajoute une méthode `manage()` qui affiche "I am managing the team". Instanciez un `Manager` et appelez à la fois `work()` et `manage()`.

**Correction** :

```typescript
class Employee {
    work(): void {
        console.log("I am working");
    }
}

class Manager extends Employee {
    manage(): void {
        console.log("I am managing the team");
    }
}

const manager = new Manager();
manager.work();  // Appelle la méthode héritée
manager.manage();  // Appelle la méthode spécifique à Manager
```

### Exercice 3 : Encapsulation avec `BankAccount`

**Enoncé** : Créez une classe `BankAccount` avec une propriété `balance`. Ajoutez des méthodes `deposit(amount)` et `withdraw(amount)` pour créditer et débiter l'argent, respectivement. Assurez-vous que le solde ne puisse pas être modifié directement (utilisez des getters et setters).

**Correction** :

```typescript
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

### Exercice 4 : Utilisation de l'interface `Vehicle`

**Enoncé** : Créez une interface `Vehicle` qui définit la méthode `startEngine()`. Créez deux classes `Car` et `Bike` qui implémentent cette interface. Chaque classe devra afficher un message spécifique lorsqu'on appelle la méthode `startEngine()`.

**Correction** :

```typescript
interface Vehicle {
    startEngine(): void;
}

class Car implements Vehicle {
    startEngine(): void {
        console.log("Car engine started");
    }
}

class Bike implements Vehicle {
    startEngine(): void {
        console.log("Bike engine started");
    }
}

const car = new Car();
car.startEngine();

const bike = new Bike();
bike.startEngine();
```

### Exercice 5 : Interface et polymorphisme avec `Shape`

**Enoncé** : Créez une interface `Shape` avec une méthode `area()`. 

Créez deux classes `Circle` et `Rectangle` qui implémentent cette interface. Chaque classe doit calculer l'aire de la forme correspondante. Utilisez du polymorphisme pour afficher l'aire de chaque forme.



**Correction** :

```typescript
interface Shape {
    area(): number;
}

class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
console.log(`Circle area: ${circle.area()}`);

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${rectangle.area()}`);
```
