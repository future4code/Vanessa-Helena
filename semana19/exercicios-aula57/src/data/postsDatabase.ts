import { Post } from "../business/entities/posts";
import { connection } from "./connection";

export const insertPosts = async (post: Post) => {
  await connection
    .insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      createdAt: post.createdAt,
      authorId: post.authorId,
    })
    .into("labook_posts");
};

export const selectPostsById = async (id: string) => {
    try {
        const result: any = await connection("labook_posts")
          .select("*")
          .where({ id });
    
        return {
            id: result[0].id,
            photo: result[0].photo,
            description: result[0].description,
            type: result[0].type,
            createdAt: result[0].created_at,
            authorId: result[0].author_id,
        };
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
      }
    };
    