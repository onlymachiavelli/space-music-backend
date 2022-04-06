import express from "express"

const app = express()
const backUpPort = 6900

app.get("/", (req, res) => {
  res.send("hello world")
})

app.listen(backUpPort || process.env.PORT, () => {
  console.log(`Server is running on port ${backUpPort || process.env.PORT}`)
})
