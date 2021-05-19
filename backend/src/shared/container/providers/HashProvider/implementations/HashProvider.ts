import { compare, hash } from "bcrypt";
import IHashProvider from "../IHashProvider";

export default class HashProvider implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed)
  }
}