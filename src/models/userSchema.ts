import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  _id: String,
  fullname: String,
  email: String,
  created_at: { type: Date, default: Date.now },
  phoneNumber: String,
  password: String,
  musicList: {
    total: { type: Number, default: 0 },
    list: [
      {
        title: String,
        artist: String,
        //album: String,
        thumbNail: String,
        link: String,
        id: String,
        //type: String,
        duration: String,
      },
    ],
  },
})

export default mongoose.model("User", userSchema) || mongoose.model("User")
