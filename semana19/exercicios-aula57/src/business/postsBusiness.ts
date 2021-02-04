import { insertPosts, selectPostsById } from "../data/postsDatabase";
import { authenticationData } from "./entities/user";
import { getTokenData } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import  { POST_TYPES, Post }  from "./entities/posts"

export const businessCreatePosts = async (
  photo: string,
  description: string,
  type: POST_TYPES,
  createdAt: Date,
  authorId: string,
  token: string

) => {
  if (!photo || !description || !type || !createdAt || !authorId) {
    throw new Error(
      '"photo", "description", "type", "createdAt" "e", "authorId" são obrigatórios'
    );
  }

  //const createdAt = moment().format("YYYY-MM-DD")

  const id: string = generateId();

  const authenticationData: authenticationData = getTokenData(token);

  await insertPosts({
    id,
    photo,
    description,
    type,
    createdAt,
    authorId,
  });
};

export const businessGetPostsById = async (id: string) => {
  const result = await selectPostsById(id);
  if (!result) {
    throw new Error("Post not found :(");
  }

  const post: Post = {
    id: result.id,
    photo: result.photo,
    description: result.description,
    type: result.type,
    createdAt: result.createdAt,
    authorId: result.authorId,
    
  };
  return post;
};


