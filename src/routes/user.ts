import express from "express"
import createUser from "../controllers/createUser"
import deleteUser from "../controllers/deleteUser"
import getUser from "../controllers/findUser"
import bodyParser from "body-parser"
const userRoute = express.Router()

userRoute.delete("/:id", deleteUser.deleteUser)

userRoute.get("/:id", getUser.finduser)
export default userRoute

userRoute.post("/", createUser.createUser)
