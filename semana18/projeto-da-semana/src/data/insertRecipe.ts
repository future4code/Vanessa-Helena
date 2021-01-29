import { connection } from "../index";

export default async function insertRecipe(
    id: string,
    title: string,
    description: string,
    creation: Date,
    user_id: string

) {
    await connection.insert({
        id,
        title,
        description,
        creation,
        user_id
    }).into('recipes')
}