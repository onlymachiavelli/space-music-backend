import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  date: { type: Date, default: Date.now },
  password: String,
})

export default mongoose.model("User", userSchema) || mongoose.model("User")
