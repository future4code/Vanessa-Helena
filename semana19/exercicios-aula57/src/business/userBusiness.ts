import { connection } from "../data/connection";
import { generateId } from "./services/idGenerator";
import { generateToken } from "./services/authenticator";
import { selectUserByEmail } from "../data/userDatabase";
import { compare, hash } from "./services/hashManager";

export const businessSignup = async (
  name: string,
  email: string,
  password: string
) => {
  if (!name || !email || !password) {
    throw new Error('"name", "email" and "password" must be provided');
  }

  const id: string = generateId();

  const cypherPassword = await hash(password);

  await connection("labook_users").insert({
    id,
    name,
    email,
    password: cypherPassword
  });

  const token: string = generateToken({ id });
  return token;
};

export const businessLogin = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error('"email" and "password" must be provided');
  }

  const user: any = await selectUserByEmail(email);

  if (!user[0]) {
    throw new Error("Username not found or password incorrect");
  }

  const passwordIsCorrect: boolean = await compare(password, user.password);

  if (!passwordIsCorrect) {
  
    throw new Error("Username not found or password incorrect");
 
  }

  const token: string = generateToken({
    id: user.id,
  });
  return token;
};
