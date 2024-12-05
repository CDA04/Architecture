import { User } from "../domain/entities/User";

export type UserWithAdulte = User & {
    adulte: boolean;
};
