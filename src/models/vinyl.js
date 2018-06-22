import mongoose from 'mongoose'

const Schema = mongoose.Schema

const VinylSchema = new Schema({
  title       : {type: String, index: true},
  artist      : {type: String, index: true},
  release     : {type: String},
  format      : {type: String},
  description : {type: String},
  cover       : {type: String}

})

const Vinyl = mongoose.model("Vinyl", VinylSchema)

export{ Vinyl }
