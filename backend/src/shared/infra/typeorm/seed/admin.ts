import { v4 as uuid } from "uuid";
import { hash } from 'bcrypt';

import createConnection from "../index"

async function create(){
   const connection = await createConnection();

   const id = uuid();

   const password = await hash('opa', 8)

   await connection.query(`
			  INSERT INTO users(
			     id,
					 name,
			     email,
			     password,
					 "isadmin",
			     created_at,
					 updated_at
			  ) VALUES (
			  '${id}', 'admin','admin@admin.com', '${password}', 'true', 'now', 'now')
			  `)
}

create().then(() => console.log("User admin Created")) 
