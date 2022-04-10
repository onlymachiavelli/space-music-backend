import express from "express"
import createUser from "../controllers/createUser"
import deleteUser from "../controllers/deleteUser"
//importing bodyparser
import bodyParser from "body-parser"
const userRoute = express.Router()

userRoute.post("/", bodyParser.json(), createUser.createUser)

userRoute.delete("/:id", deleteUser.deleteUser)

export default userRoute
