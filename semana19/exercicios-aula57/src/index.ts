/**************************** IMPORTS ******************************/
import express, { Express } from "express"
import cors from "cors"
import { login, signup } from "./controller/userController"
import { create } from "domain"
import { getPostsById } from "./controller/postsController"



/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())


/**************************** ENDPOINTS ******************************/

app.post('/users/signup', signup)
app.post('/users/login', login)
app.post('/posts/create', create)
app.get('/posts/:id', getPostsById)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})