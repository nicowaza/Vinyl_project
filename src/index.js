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

const port = process.env.PORT
console.log(port)


mongoose.Promise = global.Promise;

mongoose.connect((DBUrl), { useNewUrlParser: true})

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
console.log('Connecté a MongoDB !')
});


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


app.listen( port, () => console.log(`[Express] is running on ${port}`))
