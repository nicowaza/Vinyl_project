import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name      : { type: String },
  username  : { type: String, index: true },
  email     : { type: String },
  password  : { type: String },
  avatarId  : { type: String },
  avatar    : { type: String }
})


// Hashage bcrypt qui s'active avant le user save dans la route user
UserSchema.pre('save', function(next) {
  const user = this
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err){
        console.log(err)
      }
      else{
        user.password = hash
          next()
      }
    })
  })
})


const User = mongoose.model("User", UserSchema)

export{ User }
