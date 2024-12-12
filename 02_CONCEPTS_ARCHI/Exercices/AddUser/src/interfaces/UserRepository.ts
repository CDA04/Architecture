import { User } from "../entities/User";

// PORT => rentrer dans la logique métier
export interface UserRepository {
    save(user : User):void;
}