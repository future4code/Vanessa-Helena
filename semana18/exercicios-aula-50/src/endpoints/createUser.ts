import { Request, Response } from "express";
import insertUser from "../data/query";
import { generate } from "../service/idGenerator";

export default async function createUser(req: Request, res: Response) {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error('Preencha os campos "email" e "password"');
    }
    const id: string = generate();

    await insertUser(id, req.body.email, req.body.password);
    res.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
