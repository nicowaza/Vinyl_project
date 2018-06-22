import express from 'express'
const { SERVER_PORT, DBUrl } = process.env
const app = express()
import bodyParser from 'body-parser'
import "dotenv/config"
import volleyball from 'volleyball'
import expressValidator from 'express-validator'
import flash from 'connect-flash'
import session from 'express-session'
import { vinylRouter } from './routes/vinyls'
import { userRouter } from './routes/users'
import mongoose from 'mongoose'
import path from 'path'



const url = DBUrl
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
}))

//express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


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

app.listen(SERVER_PORT, () => console.log(`[Express] is running on ${SERVER_PORT}`))
