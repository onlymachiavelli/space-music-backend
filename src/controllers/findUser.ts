import { RequestHandler } from "express"
import * as useTasks from "../services/userServ"

const finduser: RequestHandler = async (req, res) => {
  const id = req.params.id

  const user = await useTasks.getUser(id)
  if (user) {
    res.status(200).send(user)
  } else {
    res.status(404).send("User not found")
  }
}

export default { finduser }
