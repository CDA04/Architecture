import { Request, Response } from "express";
import { GetUserUseCase } from "../../domain/usecases/GetUserUseCase";
import { UserRepositoryImpl } from "../database/UserRepositoryImpl";
import { UserService } from "../../domain/services/UserService";
import { UserWithAdulte } from "../../types/UserAdulte";

const userRepository = new UserRepositoryImpl();
const getUserUseCase = new GetUserUseCase(userRepository);

export const UserController = {
    getUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const user = getUserUseCase.execute(id);
            if (user) {
                // service 
                UserService.isAdult(user.age)
                res.status(200).json({
                    ...user,
                    adulte: UserService.isAdult(user.age)
                });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },
    getAllUsers: (req: Request, res: Response) => {
        try {
            const users = userRepository.getAll();
            const usersAdultes = []
            
            for (const user of users) {
                const UserWA = { ...user, adulte : UserService.isAdult(user.age)}
                usersAdultes.push(UserWA)
            }

            res.json(usersAdultes);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
};
