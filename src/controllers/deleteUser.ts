import UserTasks from "./../services/userServ"
import express, { RequestHandler } from "express"

const deleteUser: RequestHandler = (req, res) => {
  const id = "62522a538c7d38e9ab7243dd"
  try {
    UserTasks.deleteUser(id)
    res.status(410).send("User deleted")
  } catch (e) {
    res.status(500).send("Error" + e)
  }
}

export default { deleteUser }
