import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Exclude, Expose } from "class-transformer";
import { v4 as uuid} from "uuid";


@Entity("users")
export class User{
   
   @PrimaryColumn()
   id?: string;

   @Column()
   name: string;

   @Column()
   email: string;

   @Exclude()
   @Column()
   password: string;

   @Exclude()
   @Column()
   isadmin: boolean;

   @Column()
   avatar: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;

   @Expose({name: "avatar_url"})
   avatar_url(): string {
      return `${process.env.APP_API_URL}/avatar/${this.avatar}`
   }

   constructor(){
      if(!this.id){
         this.id = uuid()
      }
   }

   
}
