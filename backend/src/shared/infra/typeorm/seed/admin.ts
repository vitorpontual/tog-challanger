import { v4 as uuid } from "uuid";
import { hash } from 'bcrypt';

import createConnection from "../index"

async function create(){
   const connection = await createConnection();

   const id = uuid();

   const password = await hash('admin', 8)

   await connection.query(`
			  INSERT INTO users(
			     id,
			     email,
			     password,
			     created_at
			  ) VALUES (
			  '${id}', 'admin', '${password}', 'now')
			  `)
}

create().then(() => console.log("User admin Created")) 
