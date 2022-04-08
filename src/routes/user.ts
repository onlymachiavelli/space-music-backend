import express from "express"
import userContr from "../controllers/userContr"

const userRoute = express.Router()

userRoute.route("/").post(userContr.createUser)

export default userRoute
