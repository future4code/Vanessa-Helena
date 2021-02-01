import { USER_ROLES } from "../business/entities/user";
import { connection } from "./connection";

export default async function insertUser(
  id: string,
  name: string,
  email: string,
  password: string,
  role: USER_ROLES
) {
  await connection
    .insert({
      id,
      name,
      email,
      password,
      role,
    })
    .into("User_Arq");
}

export async function getUserByEmail(email: string): Promise<any> {
  try {
    
    const result = await connection("User_Arq").select("*").where({ email });
    return {
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
      password: result[0].password,
      role: result[0].role
    };
 
  } catch (error) {
    throw new Error(error.slqMessage || error.message);
    
  }
}