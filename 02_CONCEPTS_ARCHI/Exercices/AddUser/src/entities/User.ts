

export class User{

    constructor(private _firsName : string, private _id : string){}

    get firsName(): string{
        return this._firsName 
    }

    get id(): string{
        return this._id 
    }

    set firsName(firsName : string){
         this._firsName = firsName
    }

    set id(id : string){
        this._id = id
   }
}