import UserTasks from "./../services/userServ"
import express, { RequestHandler } from "express"

const deleteUser: RequestHandler = (req, res) => {
  const id = req.params.id
  try {
    UserTasks.deleteUser(id)
    res.status(200).send("User deleted")
  } catch (e) {
    res.status(500).send("Error" + e)
  }
}

export default { deleteUser }
