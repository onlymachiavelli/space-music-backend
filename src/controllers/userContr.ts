import UserTasks from "./../services/userServ"
import { RequestHandler } from "express"
const createUser: RequestHandler = async (req, res) => {
  const data = {
    name: "Alaa",
    email: "tmakaveli643@gmail.com",

    password: "fck you",
  }
  await UserTasks.addUser(data)

  return res.send("User created")
}

export default { createUser }
