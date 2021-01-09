import express, { Express, Request, Response } from "express";
import cors from "cors";
import { conta } from "./contas";
const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/usuarios/criar", (req: Request, res: Response) => {
  try {
    const { nome, cpf, dataNascimentoAsString } = req.body; // dia/mes/ano
    // A data por padrão vem no formato americano, então precisamos passar
    // passar para a forma que somos acostumados usando o split.
    const [dia, mes, ano] = dataNascimentoAsString.split("/");
    const dataNascimento: Date = new Date(`${dia}-${mes}-${ano}`);
    // validar as entradas da req
    const idade: number = Date.now() - dataNascimento.getTime() // Vem em milisegundos daí tem que ir convertendo
    const idadeEmAnos: number = idade / 1000 / 60 / 60 / 24 / 365

    if (idadeEmAnos < 18) {
        res.statusCode = 406
        throw new Error("Idade deve ser maior que 18 anos")
    }
    // consultar ou alteração a base de dados
    
    
    conta.push({
      nome,
      cpf,
      dataNascimento,
      saldo: 0,
      extratoBancario: [],
    });
    // validar os resultados da consulta
    if (cpf != conta) {
      res.statusCode = 406
      throw new Error("Não pode existir dois clientes com o mesmo cpf!!")
    }
    // enviar a resposta
    res.status(201).send("Conta criada com sucesso!!");
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

app.get("/usuarios/pegar", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
      if(!conta.length){
          res.statusCode = 404
          throw new Error("Nenhuma conta encontrada")
      }
    res.status(200).send(conta);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// ---------------------------------------------------- código servidor

import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
