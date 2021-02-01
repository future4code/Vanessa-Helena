import { getAllUsers } from "../data/userDatabase";
import { authenticationData, user } from "./entities/user";
import { getTokenData } from "./services/authenticator";

export const businessAllUsers = async (token: string) => {
  
  const verifiedToken: authenticationData = getTokenData(token);

  if (!verifiedToken) {
    throw new Error("Unauthorized. Verification error");
  }

  const user: user = await getAllUsers(token);

  if (!user) {
    throw new Error("Nothing found :(");
  }

  return user;
};
