import { User } from "../entities/User";

export interface UserRepository {
  findById(id: string): User | null;
  save(user: User): void;
  getAll(): User[];
}
