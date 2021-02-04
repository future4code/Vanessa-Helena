import { Request, Response } from "express";
import {
  businessCreatePosts,
  businessGetPostsById,
} from "../business/postsBusiness";

export const create = async (
    req: Request, 
    res: Response
) => {
  try {
    let message = "Success!";

    const { photo, description, type, createdAt, authorId } = req.body;

    const token: string = req.headers.authorization as string;
   
    await businessCreatePosts(photo, description, type, createdAt, authorId, token);

    res.status(201).send({ message });
  } catch (error) {
    res.statusMessage = error.message;
    res.status(500).end();
  } 
  
};



export const getPostsById = async (req: Request, res: Response) => {
  try {
    let message = "Success!";

    const { id } = req.params;

    const post = await businessGetPostsById(id);
    res.status(200).send({ message, post });

    res.send({ message });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
