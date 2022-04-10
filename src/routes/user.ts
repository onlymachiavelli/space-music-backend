import express from "express"
import createUser from "../controllers/createUser"
import deleteUser from "../controllers/deleteUser"
import getUser from "../controllers/findUser"
//importing bodyparser
import bodyParser from "body-parser"
const userRoute = express.Router()

userRoute.post("/", bodyParser.json(), () => {
  if (true) {
    createUser.createUser
  }
})

userRoute.delete("/:id", deleteUser.deleteUser)

userRoute.get("/:id", getUser.finduser)
export default userRoute
