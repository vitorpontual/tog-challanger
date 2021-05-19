import { container } from "tsyringe";
import IHashProvider from "./IHashProvider";
import HashProvider from "./implementations/HashProvider";

container.registerSingleton<IHashProvider>(
  "HashProvider",
  HashProvider
)