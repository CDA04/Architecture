# Programmation orienté objet

### Plan du cours général

[plan du cours](../../01_ORGA/00_plan.md)

La programmation orientée objet (POO) en TypeScript repose sur l’utilisation de concepts tels que : 

- Les **classes**
- Les **objets**
- Les **propriétés**
- Les **méthodes**
- Les principes comme l’**encapsulation**
- L’**héritage**
- Le **polymorphisme**
- L’**abstraction**.

### 1. **Les concepts de base**
#### **Classes et objets**
- Une **classe** est une structure définissant les propriétés et les méthodes d’un objet.
- Un **objet** est une instance d’une classe.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

// Création d'un objet
const person1 = new Person("Alice", 25);
console.log(person1.greet()); // Output: Hello, my name is Alice
```

---

### 2. **Principes fondamentaux**
#### **Encapsulation**
- Cache certains détails internes d'une classe et expose uniquement ce qui est nécessaire via des **modificateurs d'accès** : 
  - `public` : accessible partout (par défaut).
  - `private` : accessible uniquement dans la classe.
  - `protected` : accessible dans la classe et ses sous-classes.

```typescript
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150
```

---

#### **Héritage**
- Une classe peut hériter des propriétés et des méthodes d’une autre classe via le mot-clé `extends`.
- Le principe de l'héritage une sous-classe est une sorte de ou est un, par exemple la classe Dog est un Aminal.

```typescript
class Animal {
    constructor(protected name : string, private age : number = 10){
        this.name = name
        this.age = age
    }

    public move(): string {
      return "I can move";
    }
  
    public showName():string {
  
        return this.name;
    }
  }

 class Dog extends Animal {
    public bark(): string {
        return "Woof!";
    }

    public changeName(name: string): void {
        this.name = name;
    }
}

const dog = new Dog();
console.log(dog.move()); // Output: I can move
console.log(dog.bark()); // Output: Woof!

console.log( dog.showName() )
dog.changeName( 'Felix' )
console.log( dog.showName() )

```

---

#### **Polymorphisme**
- Une méthode peut avoir plusieurs formes grâce à l’**héritage** ou l’**implémentation d’interfaces**.

```typescript
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const shapes: Shape[] = [new Shape(), new Circle(5)];
shapes.forEach(shape => console.log(shape.area())); // Output: 0, 78.54
```

---

#### **Abstraction**
- Utiliser des **interfaces** ou des classes abstraites pour définir un plan sans implémentation détaillée.

```typescript
abstract class Vehicle {
  abstract start(): string;
}

class Car extends Vehicle {
  start(): string {
    return "Car started";
  }
}

const myCar = new Car();
console.log(myCar.start()); // Output: Car started
```

---

### 3. **Avantages en TypeScript**
TypeScript enrichit la POO avec des fonctionnalités supplémentaires comme :
- **Génériques** pour rendre les classes ou méthodes réutilisables.
  ```ts
   type Pair<T> = { a : T }
  ``` 
- **Decorators** pour modifier dynamiquement le comportement.

Exemple avec une **interface** :
```typescript
interface IUser {
  name: string;
  age: number;
  getDetails(): string;
}

class User implements IUser {
  constructor(public name: string, public age: number) {}

  getDetails(): string {
    return `${this.name}, ${this.age} years old`;
  }
}

const user = new User("Bob", 30);
console.log(user.getDetails()); // Output: Bob, 30 years old
```

## Exercice 

Définir les comportements abstraits qu'une classe Storage doit implémenter ( faire le code métier ). Réfléchissez d'abord sur papier, puis essayer de créer l'interface définissant ces comportement.

```ts
interface IStorage {

}
```

---

### 4. **Concepts avancés**
- **Composition sur héritage** pour structurer les objets en combinant des fonctionnalités.
- **Modèles de conception** (Design Patterns) pour des solutions réutilisables.

Ce résumé couvre les bases et principes clés de la POO en TypeScript, utiles pour vos projets. 

### Plan du cours général

[plan du cours](../../01_ORGA/00_plan.md)
