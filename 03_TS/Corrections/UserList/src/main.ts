import { Container } from "./Container";
import { Person } from "./types/Person";
import { UserRepository } from "./users/userRepository";

const users: Person[] = []
// logique métier sur les données
const repository = new UserRepository(users)
// logique métier algo 
const container = new Container(repository)

try {
    const user1: Person = { id: 1, name: "John Doe", age: 17 };
    const user2: Person = { id: 2, name: "Jane Doe", age: 21 };

    container.addUserAdulte(user1)
    container.addUserAdulte(user2)

    container.addUserAdulte(user2)

} catch (error) {
    console.log('error', error)
}

