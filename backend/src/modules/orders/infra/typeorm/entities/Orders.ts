import { Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"


export class Orders {

  @PrimaryColumn()
  id: string;

  @Column()
  seller_id: string;

  @Column()
  buyer_id: string;

  @Column()
  articles_id: string;

  @Column()
  price: number;

  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    if(this.id){
      this.id = uuid()
    }
  }

}