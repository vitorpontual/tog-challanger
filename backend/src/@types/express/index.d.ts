declare namespace Express {
  export interface Request {
    user: {
      id: string;
    },
    cart: {
      items: [],
      total: {
        price: number
      }
    }
  }
}