import express, { Express, Request, Response } from "express";
import getAllUsersByName from "../data/query"
const app: Express = express();
app.use(express.json());

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name as string
    const myUser = await getAllUsersByName(name)
    res.status(200).send(myUser)
    } catch (error) {
       console.log(error)
       res.send(error.message)
    }
 }
 


