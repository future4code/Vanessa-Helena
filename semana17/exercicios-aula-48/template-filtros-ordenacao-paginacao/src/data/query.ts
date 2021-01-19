import { connection } from "../index";

export default async function getAllUsersByName(name: string): Promise<any> {
  const result = await connection.raw(`
  SELECT * FROM
  aula48_exercicio
  WHERE name LIKE "%${name}%";
   `);
  return result[0];
}

