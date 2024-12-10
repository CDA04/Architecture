import { Person } from "./types/Person";
import { UserRepository } from "./users/userRepository";

export class Container {

    constructor(private repository: UserRepository) {}

    addUserAdulte(user: Person) {

        const users = this.repository.all()

        if( users.includes(user) ) throw new Error("user exists")

        // le et passif permet de vérifier que l'age existe ou pas
        if( user.age && user.age  > 18 ){
            this.repository.save(user)
        }

    }



}