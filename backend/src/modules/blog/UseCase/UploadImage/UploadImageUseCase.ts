import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
import { inject, injectable } from "tsyringe";

@injectable()
export class UploadImageUseCase {

  constructor(
    @inject("LocalStorage")
    private localStorageProvider: IStorageProvider,
  ){}

  
}