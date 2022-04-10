import { RequestHandler } from "express"
import useTasks from "../services/userServ"

const finduser: RequestHandler = async (req, res) => {
  const id = req.params.id

  await useTasks.getUser(id, (err: any, res: any) => {
    if (err) {
      res.status(500).send("Error sending req" + err)
    }
    res.status(200).json(res)
  })
}

export default { finduser }
