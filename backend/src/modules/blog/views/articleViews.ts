import { Article } from "../infra/typeorm/entities/Article"

export default {
  render(article: Article){
    return {
      id: article.id,
      title: article.title,
      body_text: article.body_text,
      user: {
        name: article.user.name,
        avatar: article.user.avatar_url(),
      },
      price: article.price,
      tags: article.tags.split(", "),
      image: article.image
    }
  },

  renderMany(article: Article[]){
    return article.map(article => this.render(article))
  }
}