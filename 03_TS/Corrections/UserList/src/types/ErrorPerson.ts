export class ErrorPerson extends Error {
    
    // dans la classe Error le message a une visibilité public
    constructor(public message: string, protected _code: number) {
      super(message); 
      this._code = _code;
      // Fixe le prototype pour que l'instance soit reconnue comme une ErrorPerson
      Object.setPrototypeOf(this, ErrorPerson.prototype);
  
      // Ajoute un nom pour la classe d'erreur
      this.name = "ErrorPerson";
    }

    get code(): number {
        return this._code
    }

    set code(num : number) {
         this._code = num
    }
  }