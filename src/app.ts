import axios from "axios"
import express, { Request, Response, Application } from "express"
import Connect from "./utils/mongoConnect"
const app = express()
const backUpPort = 6900

Connect()
app.get("/", (req: Request, res: Response) => {
  res.status(200)

  res.send("test")
})

app.listen(backUpPort || process.env.PORT, () => {
  console.log(`Server is running on port ${backUpPort || process.env.PORT}`)
})
