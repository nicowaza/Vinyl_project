import express from 'express';
const vinylRouter = express.Router();
import { Vinyl } from '../models/vinyl'
import { User } from '../models/user'
import multer from 'multer'
import path from 'path'
import { userRouter } from './users'

import bodyParser from 'body-parser'
//création de l'espace de storage pour les files uploaded dans les formulaires add et edit
const storage = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, './public/uploads/')
  },
  filename : (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({
  storage: storage}) /*on récupère la variable storage qui défini l'espace de stockage*/

//on crée un Router pour toutes les routes ayant a trait aux vinyls

// vinylRouter.get('/', /*cette route '/' correspond à '/vinyls' puisqu'on se trouve déjà dans la route vinyls*/ (req,res) => {
//   // Vinyl.find({},(err,vinyls)=> {
// //   //   if (err) res.send(err)
// //   //     res.render("allvinyls")
// //   })
// // }
// Acces Control
function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next()
  } else {
    req.flash('danger', 'Please login')
    res.redirect('/users/login')
  }
}

//Add submit POST route
vinylRouter.post('/add_vinyls', ensureAuthenticated, upload.single('cover'), (req, res) => {
  console.log(req.body)
  console.log(req.file)

  let vinyl = new Vinyl()
  vinyl.title = req.body.title
  vinyl.artist = req.body.artist
  vinyl.release = req.body.release
  vinyl.format = req.body.format
  vinyl.description = req.body.description
  vinyl.author = req.user._id /*ici on inscrit l'id du user qui est logué dans le vinyl que l'ont enregistre dans la base de données*/
  if(req.file){
    vinyl.cover=req.file.filename
  }
    else{
      vinyl.cover="no cover"
    }

    //AUTRE METHODE
    // const datas = req.body
    // datas['cover'] = req.file

  vinyl.save( (err, vinyl) => {
  if(err){
    req.flash('danger', 'Oops something went wrong')
    res.redirect('/vinyls')
  } else {
    console.log(vinyl)
    req.flash('success', 'Vinyl added') /*on utilise le type success pour la couleur bootstrap et on écrit le message a afficher*/
    res.redirect('/vinyls')
  }
  })
})
// display add_vinyl route
vinylRouter.get('/add_vinyls', ensureAuthenticated, (req, res) => {

  res.render('add_vinyls');
})


// Single Item route client
vinylRouter.get('/:id', (req, res) => {
  Vinyl.findById(req.params.id, (err, vinyl) => {
    User.findById(vinyl.author, (err, user) => { /*on rapl ici le user par son Id pour pouvoir display le user.name comme celui ayant enregistré l'entrée (le vinyl) dans la base de données*/
      if(err){
        console.log(err)
      } else {
      res.render('vinyl', {
        vinyl:vinyl,
        author:user.username /*on associe l'author(celui qui a enregistrer l'entrée dans la base de donnée au username du user qui a fait l'entrée)*/
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
      return res.redirect('/vinyls') /*ici il faut placer un return devant le res.redirect sinon l'api plante cf comment part 11 traversy Node.js from scratch*/
    }
    res.render('edit_vinyl', {
      vinyl:vinyl
    });
  });
});

// Update Single Vinyl
vinylRouter.post('/edit/:id', upload.single('cover'), (req, res) => {

  let vinyl = req.body

if(req.file){
 vinyl.cover=req.file.filename
}
 else{
   vinyl.cover="no cover"
 }

  let query = {_id:req.params.id};

  Vinyl.update(query, vinyl, (err) => { /*ici on update le modèle du vinyl au lieu de sauver un objet*/
  if(err){
    console.log(err)
  } else {
    req.flash('success', 'Vinyl updated')
    res.redirect('/vinyls')
  }
  })
})

vinylRouter.post('/delete/:id', (req, res) => {

  Vinyl.remove({_id:req.params.id}, (err) => {
    if(err){
      console.log('ok')

    } else {
      req.flash('success', 'Vinyl deleted')
      res.redirect('/vinyls')
    }
    })
})
// User collection route
/*cette route est en fait /vinyls*/
vinylRouter.get('/', ensureAuthenticated, (req, res) => {
  Vinyl.find({}, (err, allVinyls) => {
    res.render('profil', {
      vinyls:allVinyls
    });
  })
})

// Access Control

export { vinylRouter }
