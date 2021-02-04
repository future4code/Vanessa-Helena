import { Request, Response } from "express"
import { businessLogin, businessSignup } from "../business/userBusiness";

export const signup = async (req: Request, res: Response) => {
  try {
    let message = "Success!";
    const { name, email, password } = req.body;
    const token = await businessSignup(
        name, 
        email, 
        password);
    res.status(201).send({ message, token });
  } catch (error) {
    res.statusCode = 400;
    let message = error.sqlMessage || error.message;

    res.send({ message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await businessLogin(email, password);

    res.send({
      message: "User logged in",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};