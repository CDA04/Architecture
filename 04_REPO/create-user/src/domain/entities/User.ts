export class User {
    constructor(
      private _id: string,
      private _name: string,
      private _email: string,
      private _age: number
    ) {}
  
    // Getters
    get id(): string {
      return this._id;
    }
  
    get name(): string {
      return this._name;
    }
  
    get email(): string {
      return this._email;
    }
  
    get age(): number {
      return this._age;
    }
  
    // Setters
    set name(name: string) {
      this._name = name;
    }
  
    set email(email: string) {
      this._email = email;
    }
  
    set age(age: number) {
      this._age = age;
    }
  }
  