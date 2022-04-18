import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String,
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
  albums: {
    total: { type: Number, default: 0 },
    list: [
      [
        {
          title: { type: String, required: true },
          artist: { type: String, required: true },
          thumbNail: { type: String, required: true },
          link: { type: String, required: true },
          id: { type: String, required: true },
          //type: { type: String, required: true },
          duration: { type: String, required: true },
        },
      ],
    ],
  },
})

export default mongoose.model("User", userSchema) || mongoose.model("User")
