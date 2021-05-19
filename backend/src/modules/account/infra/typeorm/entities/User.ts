import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid} from "uuid";


@Entity("users")
export class User{
   
   @PrimaryColumn()
   id?: string;

   @Column()
   email: string;

   @Exclude()
   @Column()
   password: string;

   @CreateDateColumn()
   created_at: Date;

   constructor(){
      if(!this.id){
         this.id = uuid()
      }
   }

   
}
