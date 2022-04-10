import express from "express"
import createUser from "../controllers/createUser"
import deleteUser from "../controllers/deleteUser"

const userRoute = express.Router()

userRoute.route("/create").post(createUser.createUser)

userRoute.route("/delete").delete(deleteUser.deleteUser)

export default userRoute
