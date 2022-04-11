import * as UserTasks from "./../services/userServ"
import express, { RequestHandler } from "express"

const deleteUser: RequestHandler = async (req, res) => {
  const id = req.params.id
  try {
    await UserTasks.deleteUser(id)
    res.status(200).send("User deleted")
  } catch (e) {
    res.status(500).send("Error" + e)
  }
}

export default { deleteUser }
