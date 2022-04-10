import UserTasks from "../services/userServ"
import { RequestHandler } from "express"
const createUser: RequestHandler = async (req, res) => {
  const data = req.body || {
    fullname: "Alaa Barka",
    email: "tmakaveli643@gmail.com",
    phoneNumber: "54324884",
    password: "hello world",
    musicList: {
      total: 0,
      list: [],
    },
  }
  try {
    await UserTasks.addUser(data)
    return res.status(201).send("User created")
  } catch (e) {
    return res.status(500).send("Error" + e)
  }
}

export default { createUser }
