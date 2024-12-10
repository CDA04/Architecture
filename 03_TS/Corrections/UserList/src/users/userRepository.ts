import { Person } from "../types/Person";

export class UserRepository {

    constructor(private users: Person[]) { }

    save(user: Person): void {
        this.users.push(user)
    }

    all(): Person[]{
        return this.users
    }

}