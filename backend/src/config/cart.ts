
export const Cart = {
  init(oldCart){
    if(oldCart){
      this.items = oldCart.items
      this.totlal = oldCart.total
    } else {
      this.items = []
      this.total = {
        price: 0
      }
    };

    return this
  },

  addOne(article){
    let inCart = this.getCartItem(article.id)

    if(!inCart){
      inCart = {
        article: article,
        price: 0
      }
      this.items.push(inCart)
    };

    this.total.price += inCart.article.price
    
    return this
  },

  delete(articleId){
    let inCart = this.getCartItem(articleId)

    if(!inCart) return this

    if(this.items.length > 0){
      this.total.price -= inCart.article.price
    }

    this.items = this.item.filter(item => inCart.article.id != item.article.id)

    return this
  },
  getCartItem(articleId){
    return this.item.find(item => item.article.id == articleId)
  }
}