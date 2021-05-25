import { IArticleRepository } from "@modules/blog/repositories/IArticleRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
import { inject, injectable } from "tsyringe";

interface IRequest {
  article_id: string;
  image_file: string;
}

@injectable()
export class UploadImageUseCase {

  constructor(
    @inject("ArticleRepository")
    private articleRepository: IArticleRepository,
    @inject("LocalStorageProvider")
    private localStorageProvider: IStorageProvider,
  ){}

  async execute({article_id, image_file}: IRequest): Promise<void> {
    const article = await this.articleRepository.findById(article_id)

    if(article.image){
      await this.localStorageProvider.delete(article.image, "image")
    }

    await this.localStorageProvider.save(image_file, "image")

    article.image = image_file;

    await this.articleRepository.create(article)
  }

  
}