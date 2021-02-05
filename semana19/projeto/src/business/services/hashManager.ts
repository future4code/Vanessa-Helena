import * as bcrypt from "bcryptjs";

export class HashManager {
  private cost: number = Number(process.env.BCRYPT_COST)

  hash: (text: string) => Promise<string> = async (
    plainText: string
  ): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(plainText, salt);
  };
  compare: (plainText: string, cypherText: string) => Promise<boolean> = async (
    plainText: string,
    cypherText: string
  ): Promise<boolean> => {
    return bcrypt.compare(plainText, cypherText);
  };
}
