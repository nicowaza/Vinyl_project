import express from 'express'
const userRouter = express.Router()
import mongoose from 'mongoose'
import { User } from '../models/user'
import multer from 'multer'
import path from 'path'

import bodyParser from 'body-parser'
//création de l'espace de storage pour les files uploaded dans les formulaires add et edit
const storage = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, './public/uploads/users')
  },
  filename : (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage})

userRouter.post("/register", upload.single('avatar'), (req, res) => {
  let user = new User(req.body)
  if(req.file){
    console.log('uploading')
    user.avatar=req.file.filename
  }
    else{
      user.avatar="no avatar"
    }

  user.save((err, user) => {
  if(err){
    console.log(err)
    req.flash('danger', 'Oops something went wrong')
    res.redirect('/users/register')
  } else {
    console.log(user)
    req.flash('success', 'User created') /*on utilise le type success pour la couleur bootstrap et on écrit le message a afficher*/
    res.redirect('/users/login')
  }
  })
})

userRouter.get("/register", (req, res) => {
  res.render('register', {title:'Register'})
})
userRouter.get("/login", (req, res) => {
  res.render('login', {title: 'Login'})
})

export { userRouter }
