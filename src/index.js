import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import "dotenv/config"
const { SERVER_PORT, DBUrl } = process.env
import volleyball from 'volleyball'
import expressValidator from 'express-validator'
import flash from 'connect-flash'
import session from 'express-session'
import { vinylRouter } from './routes/vinyls'
import { userRouter } from './routes/users'
import { User } from './models/user'
import mongoose from 'mongoose'
import path from 'path'
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
import bcrypt from 'bcryptjs'



const url = DBUrl
// const localUrl = 'mongodb://localhost/vinyls_db'
const options = {
  promiseLibrary: Promise,
  // useMongoClient: true
}

mongoose.connect(url, options)
let db=mongoose.connection
// check Db connection
mongoose.connection.on('connected', () =>
console.log('[MongoDB] is running on port 27017')
)

//check for Db errors
db.on('error', (err) => {
  console.log(err)
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// Set public folder
app.use(express.static(/*path.join(__dirname, */'public'));

//express session middleware
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Passport config
app.use(passport.initialize())
app.use(passport.session())

app.get('*', (req, res, next) => {
  res.locals.user = req.user || null
  next()
}) /*set une variable globale user que l'on pourra utiliser dans tous le projet*/
/*next() apl le prochain middleware*/

passport.serializeUser((user,done) => {
  done(null, user.id)
})
passport.deserializeUser((id,done) => {
  User.findById(id,(err,user) => {
    done(null,user)
  })
})

passport.use(new LocalStrategy(
  function(username, password, done){
    User.findOne({ username: username },/*ce qu'on veut comparer*/ function(err, user){
      if(err) { return done(err); }
      if(!user){
        return done(null, false, { message: 'No user found.' });
      }


      // Match password
      bcrypt.compare(password, user.password, function(err, isMatch) {
        if(err) throw err
        if(isMatch){
          return done(null, user)
        } else {
            return done(null, false, { message: 'Wrong password' });
        }
      })
    })
  }))


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/users', userRouter)
// app.use('/vinyls', vinylRouter)
app.use('/vinyls', vinylRouter)

app.get('/', (req, res) => {
  console.log('ça marche')
  res.render('home')
})

// app.get('/', (req, res) => {
//   let articles = [
//     {
//       id: 1,
//       title:'Article 1',
//       author: 'Nico',
//       body:'this is article one'
//     },
//     {
//       id: 2,
//       title:'Article 2',
//       author: 'jojo',
//       body:'this is article two'
//     },
//     {
//       id: 3,
//       title:'Article 3',
//       author: 'Bobo',
//       body:'this is article three'
//     },
//     {
//       id: 4,
//       title:'Article 4',
//       author: 'Jo',
//       body:'this is article four'
//     },
//   ]
//   res.render('home', /*dans le render on met le nom du fichier pug dans lequel on va rendre les données. On ajoute alors un objet qui contient la clé de ce que l'on renvoie dans pug et la valeur qui y fait référence*/
//    {
//     title: 'Articles', /*ici on appelera la clé title dans pug et pug affichera la valeur Article*/
//     articles:articles /*ici on appelera la clé articles dans pug et celle ci renverra la valeur articles qui est un array. Il faudra introduire dans pug un loop pour naviguer dans l'array*/
//   })
// })

// app.get('/friends', (req, res) => {
//   const friends = ["tony", "miranda", "jojo", "pierre", "basil"]
//   res.render('friends', {friends: friends});
// })
console.log(process.env.PORT)
app.listen( process.env.PORT, () => console.log(`[Express] is running on ${process.env.PORT}`))
