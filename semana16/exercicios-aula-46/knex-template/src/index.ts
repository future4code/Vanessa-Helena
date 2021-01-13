import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Pokemon, POKE_TYPES } from "./types";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors());

/*Configuração segura dos dados do banco*/

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

// ------------------------------------------------------

// Exercício 1 letra b)
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = '${name}'
   `);

  return result[0][0];
};

app.get("/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const myActor = await getActorByName(name);
    res.status(200).send({ actor: myActor });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});
// ----------------------------------------------------------------------------

// Exercício 1 letra c)

const countActorsByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
     SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
   `);
  // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
  // o valor no resultado!
  const count = result[0][0].count;
  return count;
};

app.get("/actor/search", async (req: Request, res: Response) => {
  try {
    const gender: string = req.query.gender as string;
    const quantGender = await countActorsByGender(gender);
    res.status(200).send(quantGender);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

const pokemons: Pokemon[] = [];

app.get("/pokemon/all", async (req: Request, res: Response) => {
  try {
    if (!pokemons.length) {
      res.statusCode = 404;
      throw new Error("No pokemons found");
    }

    res.status(200).send(pokemons);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.post("/pokemon/new", async (req: Request, res: Response) => {
  try {
    const { id, name, type } = req.body;

    const pokemon: Pokemon | undefined = pokemons.find(
      (pokemon) => pokemon.id === id
    );

    if (pokemon) {
      res.statusCode = 409;
      throw new Error("Id already exists");
    }

    if (!(type in POKE_TYPES)) {
      res.statusCode = 406;
      throw new Error("Invalid Pokemon types");
    }

    pokemons.push({ id, name, type });

    res.status(201).send("New Pokemon created!");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
