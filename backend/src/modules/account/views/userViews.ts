import { User } from "../infra/typeorm/entities/User"

export default {
  render(user: User){
    return {
      id: user.id,
      name: user.name,
      avatar: user.avatar_url(),
      email: user.email
    }
    
      
  },
  renderMany(user: User[]){
    return user.map(user => this.render(user))
  }
}