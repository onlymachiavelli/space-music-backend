import * as UserTasks from "./../services/userServ"

import express, { RequestHandler } from "express"

const updateField: RequestHandler = async (req, res) => {
  try {
    const id = "onlymachiavelli"
    const data = {
      fullname: "sidek alaa",
    }

    await UserTasks.update(id, data)
    return res.status(200).send("User updated")
  } catch (e) {
    return res.status(500).send("Error" + e)
  }
}

export default { updateField }
