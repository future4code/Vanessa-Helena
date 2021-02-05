import express from "express";
import { create, getPostsById } from "../postsController";

export const postsRouter = express.Router();

postsRouter.post('/create', create);
postsRouter.get('/:id', getPostsById);
