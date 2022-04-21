import User from "../models/userSchema"

const update = async (id: any, data: any) =>
  await User.findByIdAndUpdate(id, data)
export default update
