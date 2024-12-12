import { User } from "./entities/User";
import { UserRepository } from "./interfaces/UserRepository";
import { CreateUser } from "./useCases/CreateUser";


// on a un repository qui dépendant de l'INFRASTRUCTURE  ADAPTATER
class UserRepositoryImp implements UserRepository{
    
    // système de persistance dans un tableau 
    private users : User[] = []

    save(user : User){
        // sauve garde
        this.users.push( user )
    }
}

class UserRepositoryImpMap implements UserRepository{
    
    // système de persistance dans un tableau 
    private users = new Map<string, User>()

    save(user : User){
        // sauve garde
        this.users.set( user.id , user)
    }
}

const userRepository = new UserRepositoryImp 
const createUser = new CreateUser(userRepository)
const alan  = new User('Alan', "1")
createUser.addUser(alan)
console.log(userRepository)

// 
const userRepositoryMap = new UserRepositoryImpMap 
const createUserMap = new CreateUser(userRepositoryMap)
const alice  = new User('Alice', "1")
createUserMap.addUser(alan)
console.log(createUserMap)