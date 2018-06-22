import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name      : { type: String, required: true, index: true },
  username  : { type: String, required: true, index: true },
  email     : { type: String, required: true, index: true },
  password  : { type: String, required: true, index: true },
  avatar    : { type: String, index: true}
})

const User = mongoose.model("User", UserSchema)

export{ User }
