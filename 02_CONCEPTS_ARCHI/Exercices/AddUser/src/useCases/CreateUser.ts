import { User } from "../entities/User";
import { UserRepository } from "../interfaces/UserRepository";

export class CreateUser{

    constructor(private userRepository : UserRepository){}

    addUser(user: User):void{
        // logique métier du useCase
        this.userRepository.save(user)
    }
}