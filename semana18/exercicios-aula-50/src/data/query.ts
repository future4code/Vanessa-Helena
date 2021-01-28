import { connection } from "../index";

export default async function insertUser(
    id: string,
    email: string,
    password: string
): Promise<any> {
    const result = await connection.raw(`
    INSERT INTO
    userTableName VALUES (
    "${id}",
   "${email}",
    "${password}"
    );
     `);
    return result[0];
}
