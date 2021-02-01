import { Request, Response } from "express";
import { businessLogin } from "../business/userBusiness";


// Pasta endpoints passou a ser controller

export const createUser = async (
    req: Request,
    res: Response
): Promise<void> => {

try {
    const { email, password } = req.body

    const token = await businessLogin(email, password)
    res.status(201).send({
        message: "Usuário criado!",
        token,
      });
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });

}

}


