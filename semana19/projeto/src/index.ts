/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "./controller/routes/userRouter"
import { postsRouter } from "./controller/routes/postsRouter"

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** ENDPOINTS ******************************/

app.use("/user", userRouter)
app.use("/posts", postsRouter)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})