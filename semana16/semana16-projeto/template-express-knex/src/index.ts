import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { create } from "domain";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// endpoints aqui

async function createUser(
  id: number,
  name: string,
  nickname: string,
  email: string
): Promise<void> {
  await connection.raw(`
   INSERT INTO TodoListUser VALUES ( 
   ${id},
   "${name}",
   "${nickname}", 
   "${email}"
   );
   `);
  console.log("Sucesso");
}
//createUser(4, "Roger", "bog", "roger@bol.com");
app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  type user = {
    id: number;
    name: string;
    nickname: string;
    email: string;
  };

  try {
    const newUser: user = {
      id: Date.now(),
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    };

    if (!newUser.id || !newUser.name || !newUser.nickname || !newUser.email) {
      errorCode = 422;
      throw new Error("Algum campo está inválido. Preencha corretamente.");
    }

    res.status(200).send({ message: "Usuário inserido com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// ---------------------------------------------------- código servidor

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
