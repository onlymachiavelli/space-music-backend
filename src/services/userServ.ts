import User from "../models/userSchema"

const addUser = async (data: any) => await User.create(data)

const getUser = async (id: any) => await User.findById(id).lean()

const deleteUser = async (id: any) => await User.findByIdAndDelete(id)
const getAllUsers = async () => await User.find().lean()

export default { addUser, getUser, deleteUser, getAllUsers }
