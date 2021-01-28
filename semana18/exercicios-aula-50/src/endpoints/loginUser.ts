import { Request, Response } from "express";
import insertUser from "../data/query";
import { generateToken } from "../service/generatorToken";
import { generate } from "../service/idGenerator";


export default async function createUser(req: Request, res: Response) {
    try {
      
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
  
      const id: string = generate()
        await insertUser(
            id,
            req.body.email,
            req.body.password
        )
        const token = generateToken({id})
        res
            .status(200)
            .send({ token })
    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }
}