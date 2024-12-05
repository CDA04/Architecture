import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/interfaces/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  private users: User[] = [
    new User("1", "Alice", "alice@example.com", 25),
    new User("2", "Bob", "bob@example.com", 30)
  ];

  findById(id: string): User | null {
    return this.users.find(user => user.id === id) || null;
  }

  save(user: User): void {
    this.users.push(user);
  }

  getAll(): User[] {
    return this.users;
  }
}
