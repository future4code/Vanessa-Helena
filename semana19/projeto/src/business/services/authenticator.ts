import * as jwt from "jsonwebtoken";
import { authenticationData } from "../entities/user";

export function generateToken(payload: authenticationData): string {
  return jwt.sign(payload, process.env.JWT_KEY as string, {
  });
}

export function getTokenData(token: string): authenticationData {
  return jwt.verify(token, process.env.JWT_KEY as string) as authenticationData;
}
