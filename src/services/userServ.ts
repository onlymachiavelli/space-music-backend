import User from "../models/userSchema"

export const addUser = async (data: any) => await User.create(data)

export const getUser = async (id: any) => User.findById(id).lean()

export const deleteUser = async (id: any) => await User.findByIdAndDelete(id)
export const getAllUsers = async () => await User.find().lean()
