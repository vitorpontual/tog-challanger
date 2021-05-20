import { container } from "tsyringe";
import { LocalStorageProvider } from "./implementations/StorageProvider";
import { IStorageProvider } from "./IStorageProvider";

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  LocalStorageProvider
)