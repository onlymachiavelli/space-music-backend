import "dotenv/config"
import express from "express"
import connect from "./utils/mongoConnect"
const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

connect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`)
    })
  })
  .catch((e) => {
    console.log(e)
  })
