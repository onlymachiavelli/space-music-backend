import UserTasks from "../services/userServ"
import { RequestHandler } from "express"
const createUser: RequestHandler = async (req, res) => {
  try {
    await UserTasks.addUser(req.body)
    return res.status(201).send("User created" + req.body)
  } catch (e) {
    return res.status(500).send("Error" + e)
  }
}

export default { createUser }
