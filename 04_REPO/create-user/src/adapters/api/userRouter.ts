import express from "express";
import { UserController } from "../controllers/UserController";

const userRouter = express.Router();

userRouter.get("/users", UserController.getAllUsers);
userRouter.get("/user/:id", UserController.getUser);

export default userRouter;
