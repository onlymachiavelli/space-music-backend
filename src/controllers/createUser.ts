import UserTasks from "../services/userServ"
import { RequestHandler } from "express"
//importing body parser
const createUser: RequestHandler = async (req, res) => {
  const data = req.body
  try {
    await UserTasks.addUser(data)
    return res.status(201).send("User created")
  } catch (e) {
    return res.status(500).send("Error" + e)
  }
}

export default { createUser }
