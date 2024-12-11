import { Container } from "./Container";
import { Person } from "./types/Person";
import { UserRepository } from "./users/userRepository";

import { Dog } from "./entities/Dog"
// Animal est une classe abstraite et ne peut être instanciée, on peut définir dans cette classe des contrats, la logique métiers de ces contrats doivent être implémentés dans les sous-classe
import { Cat } from "./entities/Cat";
import { ErrorPerson } from "./types/ErrorPerson";
import { Product } from "./entities/Product";
import { StorageArray } from "./storage/StorageArray";

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

// 

try {
    const storageArray = new StorageArray();

    const products: Product[] = [
        new Product("Apple", 10),
        new Product("Banana", 5),
    ];

    // acheter des produits
    storageArray.setValue(products[0].name, 10 * products[0].price)
    storageArray.setValue(products[1].name, 20 * products[1].price)
    storageArray.setValue(products[0].name, 2 * products[0].price)

    // logique métier 
    let total : number = 0
    const productsCommand =  storageArray.all()
    for(const p of productsCommand){
        total += p.value
    }
    console.log(total)
    console.log(productsCommand)

    storageArray.restore('Banana')
    console.log(storageArray.all())

    // reset 
    storageArray.reset()
    console.log(storageArray.all())

} catch (error) {

}
