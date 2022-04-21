import * as UserTasks from "./../services/userServ"
import update from "../services/update"
import express, { RequestHandler } from "express"

const updateField: RequestHandler = async (req, res) => {
  try {
    const id = req.body.id
    const data = req.body.data

    await update(id, data)
    return res.status(200).send("User updated")
  } catch (e) {
    return res.status(500).send("Error" + e)
  }
}

export default { updateField }
