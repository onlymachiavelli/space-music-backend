import mongoose from "mongoose"

const connect = async () => {
  const uri: string = process.env.MONGO_URI || ""

  await mongoose.connect(uri)
}

export default connect
