import { Request, Response } from "express";
import { businessAllUsers } from "../business/bringBusiness";
import { businessLogin, businessSignup } from "../business/userBusiness";

// Pasta endpoints passou a ser controller

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password, role } = req.body;

    const token = await businessSignup(name, email, password, role);
    res.status(201).send({
      message: "Usuário criado!",
      token,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const token = await businessLogin(email, password);
    res.status(201).send({
      message: "Logado com sucesso!",
      token,
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
    console.log(error.sqlMessage || error.message);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const token: string = req.headers.authorization!;

    let getUsers = await businessAllUsers(token);

    res.status(200).send(getUsers);
  } catch (error) {
    res.status(400).send({ message: error.message });
    console.log(error.sqlMessage || error.message);
  }
};
