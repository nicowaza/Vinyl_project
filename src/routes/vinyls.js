import express from 'express';
const vinylRouter = express.Router();
import { Vinyl } from '../models/vinyl'
import multer from 'multer'
import path from 'path'

import bodyParser from 'body-parser'
//création de l'espace de storage pour les files uploaded dans les formulaires add et edit
const storage = multer.diskStorage({
  destination : (req, file, cb) => {
    cb(null, './public/uploads/')
  },
  filename : (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
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

//Add submit POST route
vinylRouter.post('/add_vinyls', upload.single('cover'), (req, res) => {
  console.log(req.body)
  console.log(req.file)

  let vinyl = new Vinyl(req.body)
    // title: req.body.title,
    // artist: req.body.artist,
    // release: req.body.release,
    // format : req.body.format,
    // description: req.body.description,
    // cover: req.file.filename


  if(req.file){
    vinyl.cover=req.file.filename
  }
    else{
      vinyl.cover="no cover"
    }

  vinyl.save( (err, vinyl) => {
  if(err){
    req.flash('danger', 'Oops something went wrong')
    res.redirect('/vinyls')
  } else {
    req.flash('success', 'Vinyl added') /*on utilise le type success pour la couleur bootstrap et on écrit le message a afficher*/
    res.redirect('/vinyls')
  }
  })
})
// display add_vinyl route
vinylRouter.get('/add_vinyls', (req, res) => {

  res.render('add_vinyls');
})


// User collection route
/*cette route est en fait /vinyls*/
vinylRouter.get('/', (req, res) => {
  Vinyl.find({}, (err, allVinyls) => {
    res.render('profil', {
      vinyls:allVinyls
    });
  })
})

// Single Item route
vinylRouter.get('/:id', (req, res) => {
  Vinyl.findById(req.params.id, (err, vinyl) => {
    if(err){
      console.log(err)
    } else {
    res.render('vinyl', {
      vinyl:vinyl
    });
    }
  });
});

// Formulaire Edit
vinylRouter.get('/edit/:id', (req, res) => {
  Vinyl.findById(req.params.id, (err, vinyl) => {
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

vinylRouter.delete('/edit/:id', (req, res) => {

  Vinyl.remove({_id:req.params.id}, (err) => {
    if(err){
      console.log(err)
    } else {
      req.flash('success', 'Vinyl deleted')
      res.redirect('/profil')
    }
    })
})


export { vinylRouter }
