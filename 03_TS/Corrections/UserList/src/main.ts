import { Container } from "./Container";
import { Person } from "./types/Person";
import { UserRepository } from "./users/userRepository";

import { Dog } from "./entities/Dog"
// Animal est une classe abstraite et ne peut être instanciée, on peut définir dans cette classe des contrats, la logique métiers de ces contrats doivent être implémentés dans les sous-classe
import { Cat } from "./entities/Cat";
import { ErrorPerson } from "./types/ErrorPerson";

const users: Person[] = []
// logique métier sur les données
const repository = new UserRepository(users)
// logique métier algo 
const container = new Container(repository)

try {
    const dog = new Dog('no name')
    const cat = new Cat('no name')

    console.log(dog.showName())
    dog.changeName('Felix')
    console.log(dog.showName())

    // scream
    console.log(dog.scream())
    console.log(cat.scream())

    // test avec les users
    const user1: Person = { id: 1, name: "John Doe", age: 17 };
    const user2: Person = { id: 2, name: "Jane Doe", age: 21 };

    container.addUserAdulte(user1)
    container.addUserAdulte(user2)

    container.addUserAdulte(user2)

} catch (error) {
    if (error instanceof ErrorPerson)
        console.log('error', error.message, error.code)
} finally {

    console.log("premier bloc de code ")
}
