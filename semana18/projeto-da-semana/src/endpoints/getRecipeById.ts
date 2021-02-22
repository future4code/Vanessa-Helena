import { Request, Response } from "express";
import selectRecipeById from "../data/selectRecipeById";

export default async function getRecipeById(req: Request, res: Response) {
  try {
    const token: string = req.headers.authorization as string;
    if (!token) {
      throw new Error("Token negado, envie um token válido!!");
    }

    const result = await selectRecipeById(req.params.id);
    if (!result) {
      throw new Error("Receita não encontrada :(");
    }

    res.status(200).send({
      id: result.id,
      title: result.title,
      description: result.description,
      creation: result.creation,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
      auth: req.headers.auth,
    });
  }
}
