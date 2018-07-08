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


// //authenticate input
// UserSchema.statics.authenticate = function(username, password, callback){
//   User.findOne({username: username })
//     .exec(function (err, user) {
//       if(err){
//         console.log(err)
//         return callback(error)
//       }else if (!user){
//         var err = new Error('User not found')
//         err.status = 401
//         return callback(err)
//       }
//       bcrypt.compare(password, user.password, function(error, result) {
//         if(result === true){
//           return callback(null, user)
//         }else{
//           return callback()
//         }
//     })
// })
// }

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
