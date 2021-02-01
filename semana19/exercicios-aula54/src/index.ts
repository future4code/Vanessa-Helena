import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { createUser, getAllUsers, login } from "./controller/userController";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.put('/user/signup', createUser)
app.post('/user/login', login)
app.get('/users/all', getAllUsers)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
