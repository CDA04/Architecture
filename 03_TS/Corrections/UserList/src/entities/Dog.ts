import { Animal } from "./Animal";

export class Dog extends Animal {
    public bark(): string {
        return "Woof!";
    }

    public changeName(name: string): void {
        this.name = name;
    }

    public scream(): string {
        
        return "wooooooooooffff"
    }

}
