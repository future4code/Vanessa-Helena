import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { generate } from "./service/idGenerator";
import createUser from "./endpoints/createUser";

console.log("id gerado: ", generate());

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// endpoints

app.post("/users", createUser);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
