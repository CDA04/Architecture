import { Animal } from "./Animal";

export class Cat extends Animal {
   

    public changeName(name: string): void {
        this.name = name;
    }

    public scream(): string {
        
        return "miaaaoouuuuuuuu"
    }

}
