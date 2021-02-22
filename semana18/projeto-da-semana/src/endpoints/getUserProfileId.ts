import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";

export default async function getUserProfileId (req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = await selectUserById(id);
  
      res.status(200).send(user)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };