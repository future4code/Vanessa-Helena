/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import cors from "cors"
import { businessSignup } from "./business/userBusiness"



/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())



/**************************** ENDPOINTS ******************************/

app.post('/users/signup', businessSignup)


async (req: Request, res: Response) => {
   try {
      let message = "Success!"
      const { name, email, password } = req.body

      

      res.status(201).send({ message, token })

   } catch (error) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message

      res.send({ message })
   }
})

app.post('/users/login', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 406
         message = '"email" and "password" must be provided'
         throw new Error(message)
      }

     
      if (!result[0]) {
         res.statusCode = 401
         message = "Invalid credentials"
         throw new Error(message)
      }

      
      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
         res.statusCode = 401
         message = "Invalid credentials"
         throw new Error(message)
      }

      const token: string = generateToken({
         id: user.id
      })

      res.status(200).send({ message, token })

   
})

app.post('/posts/create', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { photo, description, type } = req.body

      const token: string = req.headers.authorization as string


      res.status(201).send({ message })

   } 
      res.statusCode = 400

      res.send({ message })
   }
})

app.get('/posts/:id', async (req: Request, res: Response) => {
   try {
      let message = "Success!"

      const { id } = req.params


      if (!queryResult[0]) {
         res.statusCode = 404
         message = "Post not found"
         throw new Error(message)
      }

      const post: Post = {
         id: queryResult[0].id,
         photo: queryResult[0].photo,
         description: queryResult[0].description,
         type: queryResult[0].type,
         createdAt: queryResult[0].created_at,
         authorId: queryResult[0].author_id,
      }

      res.status(200).send({ message, post })


      res.send({ message })
   }
})

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})