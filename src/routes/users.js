import express from 'express'
const userRouter = express.Router()
import mongoose from 'mongoose'
import { User } from '../models/user'
import multer from 'multer'
import cloudinary from 'cloudinary'
import path from 'path'
import passport from 'passport'
import expressValidator from 'express-validator'
const { check, validationResult } = require('express-validator/check');
import bcrypt from 'bcryptjs'


import bodyParser from 'body-parser'
//MULTER SET UP
// storage
const storage = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, './public/uploads/')
  },
  filename : (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

// filtre
const imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

// multer upload setup
const upload = multer({
  storage: storage,
  fileFilter: imageFilter
})

// CLOUDINARY SETUP
cloudinary.config({
  cloud_name: 'nicowaza',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// register process
userRouter.post("/register", upload.single('avatar'), function(req, res, next){ cloudinary.v2.uploader.upload(req.file.path,
  function(err,result) {
    if (err) console.log(err)

    let secUrl = result.secure_url
    let user = new User()
    user.name = req.body.name
    user.username = req.body.username
    user.email = req.body.email
    user.password = req.body.password
    user.avatar= secUrl
    user.avatarId= result.public_id


    user.save(function(err, user){
        if(err){
          console.log(err)
          req.flash('danger', 'Oops something went wrong')
          res.redirect('/users/register')
        } else {
          console.log(user)
          req.session.userId = user._id
          req.flash('success', `'User ${user.username} created'`) /*on utilise le type success pour la couleur bootstrap et on écrit le message a afficher*/
          res.redirect('/users/login')
        }
      })
    })
  })

userRouter.get("/register", (req, res) => {
  res.render('register', {title:'Register'})
})

// login process
userRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/vinyls/user',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next)
})

userRouter.get('/login', (req, res) => {
  res.render('login', {title: 'Login'})
})

userRouter.get('/logout', (req, res) => {
  req.logout()
  req.flash('success', 'You are logged out')
  res.redirect('/users/login')
});


export { userRouter }
