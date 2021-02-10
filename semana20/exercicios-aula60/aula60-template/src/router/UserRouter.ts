import express from "express";
import userController from "../controller/UserController";
//linha responsável por criar um módulo de rotas no express
export const userRouter = express.Router();

userRouter.get("/users/profile/:id", userController.getUserById);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
