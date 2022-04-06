import Mongoose from "mongoose"
import "dotenv/config"
const Connect = async () => {
  const uri: any = process.env.MONGO_URI
  const options: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
  const res = await Mongoose.connect(uri, options)
    .then(() => {
      console.log("MongoDB Connected")
    })
    .catch((err: any) => {
      console.log(err)
    })
}

export default Connect
