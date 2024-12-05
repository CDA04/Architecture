import { UserRepository } from "../interfaces/UserRepository";
import { User } from "../entities/User";

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(id: string): User | null {
    return this.userRepository.findById(id);
  }
}
