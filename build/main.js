require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcryptjs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcryptjs__);



const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const UserSchema = new Schema({
  name: { type: String },
  username: { type: String, index: true },
  email: { type: String },
  password: { type: String },
  avatar: { type: String }
});

// //authenticate input
// UserSchema.statics.authenticate = function(username, password, callback){
//   User.findOne({username: username })
//     .exec(function (err, user) {
//       if(err){
//         console.log(err)
//         return callback(error)
//       }else if (!user){
//         var err = new Error('User not found')
//         err.status = 401
//         return callback(err)
//       }
//       bcrypt.compare(password, user.password, function(error, result) {
//         if(result === true){
//           return callback(null, user)
//         }else{
//           return callback()
//         }
//     })
// })
// }

// Hashage bcrypt qui s'active avant le user save dans la route user
UserSchema.pre('save', function (next) {
  const user = this;
  __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default.a.genSalt(10, function (err, salt) {
    __WEBPACK_IMPORTED_MODULE_1_bcryptjs___default.a.hash(user.password, salt, (err, hash) => {
      if (err) {
        console.log(err);
      } else {
        user.password = hash;
        next();
      }
    });
  });
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("User", UserSchema);



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cloudinary");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_multer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_validator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcryptjs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_body_parser__);

const userRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();






const { check, validationResult } = __webpack_require__(19);



//création de l'espace de storage pour les files uploaded dans les formulaires add et edit
const storage = __WEBPACK_IMPORTED_MODULE_3_multer___default.a.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/users');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now() + __WEBPACK_IMPORTED_MODULE_4_path___default.a.extname(file.originalname));
  }
});

const upload = __WEBPACK_IMPORTED_MODULE_3_multer___default()({
  storage: storage });

// register process
userRouter.post("/register", upload.single('avatar'), (req, res, next) => {
  let user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */](req.body);

  if (req.file) {
    console.log('uploading');
    user.avatar = req.file.filename;
  } else {
    user.avatar = "no avatar";
  }

  user.save((err, user) => {
    if (err) {
      console.log(err);
      req.flash('danger', 'Oops something went wrong');
      res.redirect('/users/register');
    } else {
      console.log(user);
      req.session.userId = user._id;
      req.flash('success', `'User ${user.username} created'`); /*on utilise le type success pour la couleur bootstrap et on écrit le message a afficher*/
      res.redirect('/users/login');
    }
  });
});

userRouter.get("/register", (req, res) => {
  res.render('register', { title: 'Register' });
});

// login process
userRouter.post('/login', (req, res, next) => {
  __WEBPACK_IMPORTED_MODULE_5_passport___default.a.authenticate('local', {
    successRedirect: '/vinyls/user',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});
//   if (req.body.username && req.body.password) {
//     User.authenticate(req.body.username, req.body.password, function(err, user){
//       if (err || !user){
//         var err = new Error('Wrong username or password')
//         err.status = 401
//         return next(err)
//       }else {
//         req.session.userId = user._id
//         return res.redirect('/vinyls')
//       }
//     })
//
//   } else {
//        var err = new Error('Username and password required')
//        err.status = 401
//        req.flash('danger', 'Username and password required')
//        res.redirect('login')
//        console.log(err)
//      }
// })
userRouter.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

userRouter.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/users/login');
});



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv_config__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_validator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_flash__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_vinyls__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_users__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_user__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_path__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_bcryptjs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_bcryptjs__);

const { SERVER_PORT, DBUrl } = process.env;
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();











const passport = __webpack_require__(11);
const LocalStrategy = __webpack_require__(20).Strategy;


const url = DBUrl;
// const localUrl = 'mongodb://localhost/vinyls_db'
const options = {
  promiseLibrary: Promise
  // useMongoClient: true
};

__WEBPACK_IMPORTED_MODULE_10_mongoose___default.a.connect(process.env.url /*|| 'mongodb://localhost/vinyls_db'*/, options);
let db = __WEBPACK_IMPORTED_MODULE_10_mongoose___default.a.connection;
// check Db connect;'ion
__WEBPACK_IMPORTED_MODULE_10_mongoose___default.a.connection.on('connected', () => console.log('[MongoDB] is running on port 27017'));

//check for Db errors
db.on('error', err => {
  console.log(err);
});

app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: true }));

// Set public folder
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static( /*path.join(__dirname, */'public'));

//express session middleware
app.set('trust proxy', 1); // trust first proxy
app.use(__WEBPACK_IMPORTED_MODULE_6_express_session___default()({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}));

//express messages middleware
app.use(__webpack_require__(7)());
app.use(function (req, res, next) {
  res.locals.messages = __webpack_require__(21)(req, res);
  next();
});

// Passport config
app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req, res, next) => {
  res.locals.user = req.user || null;
  next();
}); /*set une variable globale user que l'on pourra utiliser dans tous le projet*/
/*next() apl le prochain middleware*/

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  __WEBPACK_IMPORTED_MODULE_9__models_user__["a" /* User */].findById(id, (err, user) => {
    done(null, user);
  });
});

passport.use(new LocalStrategy(function (username, password, done) {
  __WEBPACK_IMPORTED_MODULE_9__models_user__["a" /* User */].findOne({ username: username }, /*ce qu'on veut comparer*/function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'No user found.' });
    }

    // Match password
    __WEBPACK_IMPORTED_MODULE_12_bcryptjs___default.a.compare(password, user.password, function (err, isMatch) {
      if (err) throw err;
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Wrong password' });
      }
    });
  });
}));

app.set('views', __WEBPACK_IMPORTED_MODULE_11_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/users', __WEBPACK_IMPORTED_MODULE_8__routes_users__["a" /* userRouter */]);
// app.use('/vinyls', vinylRouter)
app.use('/vinyls', __WEBPACK_IMPORTED_MODULE_7__routes_vinyls__["a" /* vinylRouter */]);

app.get('/', (req, res) => {
  console.log('ça marche');
  res.render('home');
});

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
console.log(process.env.PORT);
app.listen(process.env.PORT /*|| SERVER_PORT*/, () => console.log(`[Express] is running on mLab`));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vinylRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vinyl__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_multer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cloudinary__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cloudinary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cloudinary__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_body_parser__);

const vinylRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();








//création de l'espace de storage pour les files uploaded dans les formulaires add et edit

//MULTER SET UP
// storage
const storage = __WEBPACK_IMPORTED_MODULE_3_multer___default.a.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// filtre
const imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

// multer upload setup
const upload = __WEBPACK_IMPORTED_MODULE_3_multer___default()({
  storage: storage,
  fileFilter: imageFilter
}); /*on récupère la variable storage qui défini l'espace de stockage et on utilise la variable imageFilter pour ne prendre que des images en upload*/

//on crée un Router pour toutes les routes ayant a trait aux vinyls

// vinylRouter.get('/', /*cette route '/' correspond à '/vinyls' puisqu'on se trouve déjà dans la route vinyls*/ (req,res) => {
//   // Vinyl.find({},(err,vinyls)=> {
// //   //   if (err) res.send(err)
// //   //     res.render("allvinyls")
// //   })
// // }
// Acces Control
// CLOUDINARY SETUP
__WEBPACK_IMPORTED_MODULE_4_cloudinary___default.a.config({
  cloud_name: 'nicowaza',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('danger', 'Please login');
    res.redirect('/users/login');
  }
}

//Add submit POST route
vinylRouter.post('/add_vinyls', ensureAuthenticated, upload.single('cover'), (req, res) => {
  __WEBPACK_IMPORTED_MODULE_4_cloudinary___default.a.uploader.upload(req.file.path, function (result) {
    console.log(req.body);
    console.log(req.file);

    let vinyl = new __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */]();
    vinyl.title = req.body.title;
    vinyl.artist = req.body.artist;
    vinyl.release = req.body.release;
    vinyl.format = req.body.format;
    vinyl.description = req.body.description;
    vinyl.author = req.user._id; /*ici on inscrit l'id du user qui est logué dans le vinyl que l'ont enregistre dans la base de données*/
    if (req.file) {
      vinyl.cover = result.secure_url;
    } else {
      vinyl.cover = "no cover";
    }
  });
  //AUTRE METHODE
  // const datas = req.body
  // datas['cover'] = req.file

  vinyl.save((err, vinyl) => {
    if (err) {
      req.flash('danger', 'Oops something went wrong');
      res.redirect('/add_vinyls');
    } else {
      console.log(vinyl);
      req.flash('success', `'${vinyl.title} added'`); /*on utilise le type success pour la couleur bootstrap et on écrit le message a afficher*/
      res.redirect('/vinyls/user');
    }
  });
});
// display add_vinyl route
vinylRouter.get('/add_vinyls', ensureAuthenticated, (req, res) => {

  res.render('add_vinyls');
});

// Single Item route client
vinylRouter.get('/user/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].findById(req.params.id, (err, vinyl) => {
    __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */].findById(vinyl.author, (err, user) => {
      /*on rapl ici le user par son Id pour pouvoir display le user.name comme celui ayant enregistré l'entrée (le vinyl) dans la base de données*/
      if (err) {
        console.log(err);
      } else {
        res.render('vinyl', {
          vinyl: vinyl,
          author: user.username /*on associe l'author(celui qui a enregistrer l'entrée dans la base de donnée au username du user qui a fait l'entrée)*/
        });
      }
    });
  });
});

// Formulaire Edit
vinylRouter.get('/edit/:id', ensureAuthenticated, (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].findById(req.params.id, (err, vinyl) => {
    if (vinyl.author != req.user._id) {
      req.flash('danger', 'Not Authorized');
      return res.redirect('/vinyls/user'); /*ici il faut placer un return devant le res.redirect sinon l'api plante cf comment part 11 traversy Node.js from scratch*/
    }
    res.render('edit_vinyl', {
      vinyl: vinyl
    });
  });
});

// Update Single Vinyl
vinylRouter.post('/user/edit/:id', upload.single('cover'), (req, res) => {

  let vinyl = req.body;

  if (req.file) {
    vinyl.cover = req.file.filename;
  } else {
    vinyl.cover = "no cover";
  }

  let query = { _id: req.params.id };

  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].update(query, vinyl, err => {
    /*ici on update le modèle du vinyl au lieu de sauver un objet*/
    if (err) {
      console.log(err);
    } else {
      req.flash('success', 'Vinyl updated');
      res.redirect('/vinyls/user');
    }
  });
});

vinylRouter.post('/user/delete/:id', (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].remove({ _id: req.params.id }, err => {
    if (err) {
      console.log('ok');
    } else {
      req.flash('success', 'Vinyl deleted');
      res.redirect('/vinyls/user');
    }
  });
});

// route User Collection
vinylRouter.get('/user', ensureAuthenticated, (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].find({ author: req.user._id }, (err, userVinyls) => {
    console.log(userVinyls);
    res.render('profil', {
      vinyls: userVinyls
    });
  });
});

// route All Users Collections
// route User Collection
vinylRouter.get('/', ensureAuthenticated, (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].find({}, (err, allVinyls) => {
    console.log(allVinyls);
    res.render('profil', {
      vinyls: allVinyls
    });
  });
});

// Access Control



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vinyl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const VinylSchema = new Schema({
  title: { type: String },
  artist: { type: String, index: true },
  release: { type: String },
  format: { type: String },
  description: { type: String },
  cover: { type: String },
  author: { type: String }

});

const Vinyl = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("Vinyl", VinylSchema);



/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express-validator/check");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express-messages");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map