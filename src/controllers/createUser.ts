import UserTasks from "../services/userServ"
import { RequestHandler } from "express"

import axios from "axios"
//importing body parser
const hostname = "localhost"

const createUser: RequestHandler = async (req, res) => {
  let result: boolean = false

  const username = req.body.username
  const find = await axios
    .get(`${hostname}:6900/user/${username}`)
    .then((response) => {
      result = response.data !== null ? false : true
    })

  if (result) {
    const data = req.body
    try {
      await UserTasks.addUser(data)
      return res.status(201).send("User created")
    } catch (e) {
      return res.status(500).send("Error" + e)
    }
  } else {
    res.status(500).send("user already exists")
  }
}

export default { createUser }
