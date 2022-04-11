import "dotenv/config"
import { json } from "body-parser"

import express from "express"
import connect from "./utils/mongoConnect"
import userRoute from "./routes/user"
const cors = require("cors")

const app = express()
app.use(cors())
app.use(json())
app.use("/user", userRoute)

connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  })
  .catch((e) => {
    console.log(e)
  })
