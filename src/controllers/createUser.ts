import * as useTasks from "../services/userServ"
import express, { RequestHandler } from "express"
const createUser: RequestHandler = async (req, res) => {
  let result: boolean = false
  const id = "onlymachiavelli"
  const user = await useTasks.getUser(id)
  console.log(user)
  if (user !== null) {
    res.status(400).send("User already exists")
  } else {
    const data = req.body
    try {
      await useTasks.addUser(data)
      return res.status(201).send("User created")
    } catch (e) {
      //return res.status(500).send("Error" + e)
      res.status(400).send("User already exists")
    }
  }

  /*
    
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
    */
  //res.send(result)
}

export default { createUser }
