import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateHash } from "../service/hashManager";
import { generate } from "../service/idGenerator";


console.log("id gerado: ", generate());


export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password
        ) {
          throw new Error('Preencha os campos "name","nickname" "email" e password')
        }

        const id: string = generate();

        const cypherPassword:string = await generateHash(req.body.password)
        console.log(cypherPassword)
        await insertUser(
            
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword,
            

        );

        res
            .status(200)
            .send('Usuário criado com sucesso!')

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}