import * as bcrypt from "bcryptjs";

import dotenv from "dotenv";

dotenv.config();

export async function generateHash(plainText: string): Promise<string> {
  const cost: number = Number(process.env.BCRYPT_COST);
  const salt: string = await bcrypt.genSalt(cost);

  const cypherText: string = await bcrypt.hash(plainText, salt);
  return cypherText;
}

export function compare(
  plainText: string,
  cyberText: string
):boolean {
  return bcrypt.compareSync(plainText, cyberText);
}
