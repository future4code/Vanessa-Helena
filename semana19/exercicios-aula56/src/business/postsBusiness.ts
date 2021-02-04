import { insertPosts } from "../data/postsDatabase"
import { authenticationData } from "./entities/user"
import { getTokenData } from "./services/authenticator"
import { generateId } from "./services/idGenerator"

export const businessCreatePosts = async (
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
  ) => {

    if (
        !photo ||
        !description ||
        !type ||
        !createdAt ||
        !authorId
     ) {
        throw new Error('"photo", "description", "type", "createdAt" "e", "authorId" são obrigatórios')
     }
  
    const id: string = generateId()
   //const token: authenticationData = getTokenData(token)

      await insertPosts({
        id,
        photo,
        description,
        type,
        createdAt,
        authorId
     })
  }
  
