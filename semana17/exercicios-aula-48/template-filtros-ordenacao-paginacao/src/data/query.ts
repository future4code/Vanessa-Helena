import { connection } from "../index";

export default async function getAllUsersByName(name: string): Promise<any> {
  const result = await connection.raw(`
   SELECT id, name, email, type 
   FROM aula48_exercicio,
   LIKE "%${name}%";

   `);
  console.log("RESPOSTA", result);
  return result[0];
  
}
