import * as useTasks from "../services/userServ"
import express, { RequestHandler } from "express"
import bcrypt from "bcrypt"
const createUser: RequestHandler = async (req, res) => {
  const id = req.body._id
  const user = await useTasks.getUser(id)

  if (user !== null) {
    res.status(400).send("User already exists")
  } else {
    let data = req.body

    const hash = await bcrypt.hash(
      data.password,
      Number(process.env.SALT) || 10
    )
    data.password = hash

    try {
      console.log(data)
      await useTasks.addUser(data)

      return res.status(201).send("User created")
    } catch (e) {
      //return res.status(500).send("Error" + e)
      res.status(400).send("User already exists")
    }
  }
}

export default { createUser }
