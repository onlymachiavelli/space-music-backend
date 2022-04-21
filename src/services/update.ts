import User from "../models/userSchema"

const Update = async (id: any, data: any) =>
  await User.findByIdAndUpdate(id, data)
export default Update
