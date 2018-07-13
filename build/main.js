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
  avatarId: { type: String },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cloudinary__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cloudinary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cloudinary__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express_validator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_express_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_express_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bcryptjs__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_body_parser__);

const userRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();







const { check, validationResult } = __webpack_require__(19);



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
});

// CLOUDINARY SETUP
__WEBPACK_IMPORTED_MODULE_4_cloudinary___default.a.config({
  cloud_name: 'nicowaza',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// register process
userRouter.post("/register", upload.single('avatar'), function (req, res, next) {
  __WEBPACK_IMPORTED_MODULE_4_cloudinary___default.a.v2.uploader.upload(req.file.path, function (err, result) {
    if (err) console.log(err);

    let secUrl = result.secure_url;
    let user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.avatar = secUrl;
    user.avatarId = result.public_id;

    user.save(function (err, user) {
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
});

userRouter.get("/register", (req, res) => {
  res.render('register', { title: 'Register' });
});

// login process
userRouter.post('/login', (req, res, next) => {
  __WEBPACK_IMPORTED_MODULE_6_passport___default.a.authenticate('local', {
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


const url = 'mongodb://NicolasD:foxylady1480!@ds227570.mlab.com:27570/vinyl';
const localUrl = 'mongodb://localhost/vinyls_db';
const options = {
  promiseLibrary: Promise
  // useMongoClient: true
};

__WEBPACK_IMPORTED_MODULE_10_mongoose___default.a.connect(url || localUrl, options);
let db = __WEBPACK_IMPORTED_MODULE_10_mongoose___default.a.connection;
// check Db connection
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
app.listen(process.env.PORT || SERVER_PORT, () => console.log(`[Express] is running on ${process.env.PORT}`));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_simplonco_Bureau_Projets_Exos_Udemy_Node_Express_Vinylapalooza_node_modules_babel_runtime_regenerator__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_simplonco_Bureau_Projets_Exos_Udemy_Node_Express_Vinylapalooza_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_simplonco_Bureau_Projets_Exos_Udemy_Node_Express_Vinylapalooza_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_vinyl__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_multer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cloudinary__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cloudinary___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cloudinary__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_body_parser__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


const vinylRouter = __WEBPACK_IMPORTED_MODULE_1_express___default.a.Router();








//création de l'espace de storage pour les files uploaded dans les formulaires add et edit


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('danger', 'Please login');
    res.redirect('/users/login');
  }
}
//MULTER SET UP
// storage
const storage = __WEBPACK_IMPORTED_MODULE_4_multer___default.a.diskStorage({
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
const upload = __WEBPACK_IMPORTED_MODULE_4_multer___default()({
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
__WEBPACK_IMPORTED_MODULE_5_cloudinary___default.a.config({
  cloud_name: 'nicowaza',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//Add submit POST route
vinylRouter.post('/add_vinyls', ensureAuthenticated, upload.single('cover'), function (req, res, next) {
  __WEBPACK_IMPORTED_MODULE_5_cloudinary___default.a.v2.uploader.upload(req.file.path, function (err, result) {
    if (err) console.log(err);
    let secUrl = result.secure_url;

    let vinyl = new __WEBPACK_IMPORTED_MODULE_2__models_vinyl__["a" /* Vinyl */]();
    vinyl.title = req.body.title;
    vinyl.artist = req.body.artist;
    vinyl.release = req.body.release;
    vinyl.format = req.body.format;
    vinyl.description = req.body.description;
    vinyl.author = req.user._id; /*ici on inscrit l'id du user qui est logué dans le vinyl que l'ont enregistre dans la base de données*/
    vinyl.cover = secUrl;
    vinyl.coverId = result.public_id;

    console.log(req.body);
    console.log(req.file.path);
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
});
// display add_vinyl route
vinylRouter.get('/add_vinyls', ensureAuthenticated, (req, res) => {

  res.render('add_vinyls');
});

// Single Item route client
vinylRouter.get('/user/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_2__models_vinyl__["a" /* Vinyl */].findById(req.params.id, (err, vinyl) => {
    __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */].findById(vinyl.author, (err, user) => {
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
  __WEBPACK_IMPORTED_MODULE_2__models_vinyl__["a" /* Vinyl */].findById(req.params.id, (err, vinyl) => {
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
vinylRouter.post('/user/edit/:id', upload.single('cover'), function (req, res) {
  __WEBPACK_IMPORTED_MODULE_2__models_vinyl__["a" /* Vinyl */].findById(req.params.id, (() => {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_simplonco_Bureau_Projets_Exos_Udemy_Node_Express_Vinylapalooza_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(err, vinyl) {
      var result, secUrl;
      return __WEBPACK_IMPORTED_MODULE_0__home_simplonco_Bureau_Projets_Exos_Udemy_Node_Express_Vinylapalooza_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!err) {
              _context.next = 6;
              break;
            }

            req.flash('danger', 'Something went wrong');
            res.redirect('/vinyls/user/edit/:id');
            console.log(err);
            _context.next = 31;
            break;

          case 6:
            if (!req.file) {
              _context.next = 23;
              break;
            }

            _context.prev = 7;
            _context.next = 10;
            return __WEBPACK_IMPORTED_MODULE_5_cloudinary___default.a.v2.uploader.destroy(vinyl.coverId);

          case 10:
            _context.next = 12;
            return __WEBPACK_IMPORTED_MODULE_5_cloudinary___default.a.v2.uploader.upload(req.file.path);

          case 12:
            result = _context.sent;
            secUrl = result.secure_url;

            vinyl.cover = secUrl;
            vinyl.coverId = result.public_id;
            _context.next = 23;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](7);

            req.flash('danger', 'Something went wrong');
            res.redirect('/vinyls/user/edit/:id');
            console.log(_context.t0);

          case 23:
            vinyl.title = req.body.title;
            vinyl.artist = req.body.artist;
            vinyl.release = req.body.release;
            vinyl.format = req.body.format;
            vinyl.description = req.body.description;
            vinyl.save();
            req.flash('success', 'Vinyl updated');
            res.redirect('/vinyls/user');

          case 31:
          case 'end':
            return _context.stop();
        }
      }, _callee, this, [[7, 18]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })());
});

//   let vinyl = req.body
//
//
//
//   let query = {_id:req.params.id};
//
//   Vinyl.update(query, vinyl, (err) => { /*ici on update le modèle du vinyl au lieu de sauver un objet*/
//   if(err){
//     console.log(err)
//   } else {
//     req.flash('success', 'Vinyl updated')
//     res.redirect('/vinyls/user')
//   }
//   })
// })

vinylRouter.post('/user/delete/:id', (req, res) => {

  __WEBPACK_IMPORTED_MODULE_2__models_vinyl__["a" /* Vinyl */].remove({ _id: req.params.id }, err => {
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
  __WEBPACK_IMPORTED_MODULE_2__models_vinyl__["a" /* Vinyl */].find({ author: req.user._id }, (err, userVinyls) => {
    console.log(userVinyls);
    res.render('profil', {
      vinyls: userVinyls
    });
  });
});

// route All Users Collections
// route User Collection
vinylRouter.get('/', ensureAuthenticated, (req, res) => {
  __WEBPACK_IMPORTED_MODULE_2__models_vinyl__["a" /* Vinyl */].find({}, (err, allVinyls) => {
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
  coverId: { type: String },
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(24);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ })
/******/ ]);
//# sourceMappingURL=main.map