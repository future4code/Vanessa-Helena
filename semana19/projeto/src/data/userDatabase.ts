import { connection } from "./connection";
import { user } from "../business/entities/user";

export class UserDatabase {
  static insertUsers(email: string): any {
    throw new Error("Method not implemented.");
  }

  tableName = "labook_users"
  insertUsers = async (user: user) => {
    await connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into(this.tableName);
  };
  getUserByEmail = async (email: string): Promise<user> => {
    try {
      const result: any = await connection(this.tableName)
        .select("*")
        .where({ email });

      return {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password,
      };
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
