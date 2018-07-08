import mongoose from 'mongoose'

const Schema = mongoose.Schema

const VinylSchema = new Schema({
  title       : {type: String},
  artist      : {type: String, index: true},
  release     : {type: String},
  format      : {type: String},
  description : {type: String},
  coverId     : {type: String},
  cover       : {type: String},
  author      : {type: String}

})

const Vinyl = mongoose.model("Vinyl", VinylSchema)

export{ Vinyl }
