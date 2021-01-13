import express, { Request, Response } from "express";
import cors from "cors";
import { countries } from "./countries";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
  const resposta = countries.map((country) => {
    id: country.id;
    name: country.name;
  });

  if (resposta.length) {
    res.status(200).send(resposta);
  } else {
    res.status(404).send("Not found ");
  }
  const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
});
