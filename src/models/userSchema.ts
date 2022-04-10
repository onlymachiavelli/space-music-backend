import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phoneNumber: String,
  password: String,
  musicList: {
    total: Number,
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
