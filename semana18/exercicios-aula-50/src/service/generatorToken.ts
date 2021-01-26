import * as jwt from "jsonwebtoken";

// gerarToken sign 

/*export const token: string = jwt.sign({id: "645321"}, "VANESSA", {expiresIn:"1min"});
console.log("Exemplo de token: ", token)

const verifiedToken = jwt.verify(token, "VANESSA");
console.log("Verifica token: ", verifiedToken)*/


const expiresIn = "1min";

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign({ id: input.id }, process.env.JWT_KEY as string, {
    expiresIn: (process.env.JWT_EXPIRE_TIME as string) || expiresIn,
  });
  return token;
};

export function getTokenData(token: string): AuthenticationData{
  const payload = jwt.verify(token, process.env.JWT_KEY!);

  return payload as AuthenticationData;
}

// Guardando informação no nosso token
type AuthenticationData = {
  id: string;
};
