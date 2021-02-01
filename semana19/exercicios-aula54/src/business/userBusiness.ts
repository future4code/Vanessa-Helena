import insertUser, { getUserByEmail } from "../data/userDatabase";
import { generateToken } from "../business/services/authenticator";
import { compare, hash } from "../business/services/hashManager";
import { generateId } from "../business/services/idGenerator";
import { user, USER_ROLES } from "./entities/user";

export const businessSignup = async (
  name: string,
  email: string,
  password: string,
  role: USER_ROLES
) => {
  if (!email || email.indexOf("@") === -1) {
    throw new Error("Email inválido!!");
  }

  if (!role) {
    throw new Error("Usuário inválido!!");
  }

  if (!name) {
    throw new Error('Preencha os campos "name", "email" e "password"');
  }

  const id: string = generateId();

  const cypherPassword = await hash(password);

  await insertUser(id, name, email, cypherPassword, role);

  const token: string = generateToken({
    id,
    role: role,
  });

  return token;
};

export const businessLogin = async (email: string, password: string) => {
  let message = "Usuário logado!";

  if (!email || !password) {
    message = "'email' e 'senha' são obrigatórios";
    throw new Error(message);
  }

  const user: user = await getUserByEmail(email);

  if (!user) {
    message = "Usuário não encontrado ou senha incorreta";
    throw new Error(message);
  }

  const passwordIsCorrect: boolean = await compare(password, user.password);

  if (!passwordIsCorrect) {
    message = "Usuário não encontrado ou senha incorreta";
    throw new Error("Usuário não encontrado ou senha incorreta");
  }

  const token: string = generateToken({
    id: user.id,
    role: user.role,
  });
  return token;
};
