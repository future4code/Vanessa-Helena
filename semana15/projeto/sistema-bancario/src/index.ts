import express, { Express, Request, Response } from 'express';
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());

//para adicionar usuário
export type user = {
    
    id: number,
    nome: string,
    cpf: number,
    dataNascimento: number
    saldo: number,
    //extratoBancario?: transacoes[]
}
//pra adicionar informações do extrato
//export type transacoes = {
    //valor: number,
    //data: number,
    //descricao?: string 
//}
//array contas
export let accounts: user[] = [
    {
    id: 1,
      nome: "Dory",
      cpf: 12345678911,
      dataNascimento: 655527600000,
      saldo: 1000,
      //extratoBancario: [
          //{
           // valor: 200,
           // data: 1610124445801
         // }
      //]
    },
    {
        id: 2,
        nome: "Alice",
        cpf: 12345678958,
        dataNascimento: 536983200000,
        saldo: 4000,
        //extratoBancario: [
            //{
             // valor: 800,
             // data: 1610124445801
           // }
        //]
      }
]

app.post("/users", (req: Request, res: Response)=> {

    let errorCode: number = 400;

    try {

        const reqBody: user = {
            id: Date.now(),
            nome: req.body.nome,
            cpf: req.body.cpf,
            dataNascimento: req.body.dataNascimento,
            saldo: req.body.saldo,
            //extratoBancario: req.body.extratoBancario
            
        }

        if(!reqBody.nome || !reqBody.cpf || !reqBody.dataNascimento || !reqBody.saldo){
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        accounts.push(reqBody);
    
        res.status(200).send({message: "Usuário inserido com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
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