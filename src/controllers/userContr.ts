import UserTasks from "./../services/userServ"
import { RequestHandler } from "express"
const createUser: RequestHandler = async (req, res) => {
  const data = {
    name: "Alaa",
    email: "tmakaveli643@gmail.com",

    password: "fck you",
  }
  try {
    await UserTasks.addUser(data)
    return res.status(201).send("User created")
  } catch (e) {
    console.log(e)
    return res.status(500).send("Error")
  }
}

export default { createUser }
