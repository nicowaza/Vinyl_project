import express from 'express';
const vinylRouter = express.Router();
import { Vinyl } from '../models/vinyl'
import { User } from '../models/user'
import multer from 'multer'
import cloudinary from 'cloudinary'
import path from 'path'
import { userRouter } from './users'

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
    // n'accepte que des files images
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

// multer upload setup
const upload = multer({
  storage: storage,
  fileFilter: imageFilter
}) /*on récupère la variable storage qui défini l'espace de stockage et on utilise la variable imageFilter pour ne prendre que des images en upload*/

// CLOUDINARY SETUP
cloudinary.config({
  cloud_name: 'nicowaza',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

//Access control
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next()
  } else {
    req.flash('danger', 'Please login')
    res.redirect('/users/login')
  }
}

//Add submit POST route
vinylRouter.post('/add_vinyls', ensureAuthenticated, upload.single('cover'), function(req, res, next){
  cloudinary.v2.uploader.upload(req.file.path,
    function(err,result) {
      if (err) console.log(err)
      let secUrl = result.secure_url

      let vinyl = new Vinyl()
      vinyl.title = req.body.title
      vinyl.artist = req.body.artist
      vinyl.release = req.body.release
      vinyl.format = req.body.format
      vinyl.description = req.body.description
      vinyl.author = req.user._id /*ici on inscrit l'id du user qui est logué dans le vinyl que l'ont enregistre dans la base de données*/
      vinyl.cover = secUrl
      vinyl.coverId= result.public_id


      vinyl.save((err, vinyl) => {
      if(err){
        req.flash('danger', 'Oops something went wrong')
        res.redirect('/add_vinyls')
      } else {
        console.log(vinyl)
        req.flash('success', `'${vinyl.title} added'`) /*on utilise le type success pour la couleur bootstrap et on écrit le message a afficher*/
        res.redirect('/vinyls/user')
      }
    })
  })
})

// display add_vinyl route
vinylRouter.get('/add_vinyls', ensureAuthenticated, (req, res) => {

  res.render('add_vinyls');
})

// Single Item route client
vinylRouter.get('/user/:id', (req, res) => {
  Vinyl.findById(req.params.id, (err, vinyl) => {
    User.findById(vinyl.author, (err, user) => { /*on rapl ici le user par son Id pour pouvoir display le user.name comme celui ayant enregistré l'entrée (le vinyl) dans la base de données*/
      if(err){
        console.log(err)
      } else {
      res.render('vinyl', {
        vinyl:vinyl,
        author:user.username /*on associe l'author(celui qui a enregistré l'entrée dans la base de donnée au username du user qui a fait l'entrée)*/
      });
      }
    })
  });
});

// Formulaire Edit
vinylRouter.get('/edit/:id', ensureAuthenticated, (req, res) => {
  Vinyl.findById(req.params.id, (err, vinyl) => {
    if(vinyl.author != req.user._id){
      req.flash('danger', 'Not Authorized')
      return res.redirect('/vinyls/user') /*ici il faut placer un return devant le res.redirect sinon l'api plante cf comment part 11 traversy Node.js from scratch*/
    }
    res.render('edit_vinyl', {
      vinyl:vinyl
    });
  });
});

// Update Single Vinyl
vinylRouter.post('/user/edit/:id', upload.single('cover'), function(req, res){
  Vinyl.findById(req.params.id, async function(err, vinyl){
    if(err){
      req.flash('danger', 'Something went wrong')
      res.redirect('/vinyls/user/edit/:id')
      console.log(err)
    } else {
      if(req.file){
        try{
          await cloudinary.v2.uploader.destroy(vinyl.coverId);
          let result = await cloudinary.v2.uploader.upload(req.file.path);
          let secUrl = result.secure_url
          vinyl.cover = secUrl
          vinyl.coverId= result.public_id
        } catch(err){
          req.flash('danger','Something went wrong')
          res.redirect('/vinyls/user/edit/:id')
          console.log(err)
      }
    }
            vinyl.title = req.body.title
            vinyl.artist = req.body.artist
            vinyl.release = req.body.release
            vinyl.format = req.body.format
            vinyl.description = req.body.description
            vinyl.save()
            req.flash('success', 'Vinyl updated')
            res.redirect('/vinyls/user')
          }
        })
    })

vinylRouter.post('/user/delete/:id', function(req, res){
  Vinyl.findById(req.params.id, async function(err, vinyl){
    if(err){
      req.flash('danger','Oops something went wrong')
      res.redirect('/vinyls/user/edit/:id')
    }
    try {
      await cloudinary.v2.uploader.destroy(vinyl.coverId);
      vinyl.remove()
      req.flash('success', 'Vinyl deleted')
      res.redirect('/vinyls/user')
    }catch(err){
      if(err){
        req.flash('danger','Oops something went wrong')
        res.redirect('/vinyls/user/edit/:id')
      }
    }
  })
})


// route User Collection
vinylRouter.get('/user', ensureAuthenticated, (req, res) => {
  Vinyl.find({author: req.user._id}, (err, userVinyls) => {
    console.log(userVinyls)
    res.render('profil', {
      vinyls:userVinyls
    });
  })
})

// route All Users Collections
vinylRouter.get('/', ensureAuthenticated, (req, res) => {
  Vinyl.find({}, (err, allVinyls) => {
    console.log(allVinyls)
    res.render('profil', {
      vinyls:allVinyls
    });
  })
})


export { vinylRouter }
