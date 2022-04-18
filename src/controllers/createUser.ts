import * as useTasks from "../services/userServ"
import express, { RequestHandler } from "express"
import bcrypt from "bcrypt"
const createUser: RequestHandler = async (req, res) => {
  const id = "onlymachiavelli"
  const user = await useTasks.getUser(id)
  console.log(user)
  if (user !== null) {
    res.status(400).send("User already exists")
  } else {
    let data = req.body
    try {
      data.password = await bcrypt.hash(data.password, process.env.SALT || "")

      await useTasks.addUser(data)
      return res.status(201).send("User created")
    } catch (e) {
      //return res.status(500).send("Error" + e)
      res.status(400).send("User already exists")
    }
  }
}

export default { createUser }
