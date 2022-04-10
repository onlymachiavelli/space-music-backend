import express from "express"
import createUser from "../controllers/createUser"
import deleteUser from "../controllers/deleteUser"

const userRoute = express.Router()

userRoute.post("/", createUser.createUser)

userRoute.delete("/:id", deleteUser.deleteUser)

export default userRoute
