export abstract class Animal {
    constructor(protected name : string){
        this.name = name
    }

    public move(): string {
      return "I can move";
    }

    // contrat que toutes les sous-classes doivent implémenter
    public abstract scream(): string  
  
    public showName():string {
  
        return this.name;
    }
  }