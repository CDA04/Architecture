import { Product } from "./entities/Product";
import { IStorage } from "./interfaces/IStorage";
import { ErrorPerson } from "./types/ErrorPerson";
import { Person } from "./types/Person";
import { UserRepository } from "./users/userRepository";

export class Container {

    constructor(
        private repository: UserRepository) {}

    addUserAdulte(user: Person) {

        const users = this.repository.all()

        // TODO on doit extends la classe Error pour la typer avec notre ErrorPerson
        if( users.includes(user) ) throw new ErrorPerson("user exists", 1)

        // le et passif permet de vérifier que l'age existe ou pas
        if( user.age && user.age  > 18 ){
            this.repository.save(user)
        }

    }

    priceTTC(){

    }

    resetCart(){

    }

    restoreCart(name: string){
        
    }

}