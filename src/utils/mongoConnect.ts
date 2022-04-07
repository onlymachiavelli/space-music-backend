import mongoose from "mongoose"

const connect = async () => {
  const uri: string = process.env.MONGO_URI || ""

  console.log(uri)

  await mongoose.connect(uri)
}

export default connect
