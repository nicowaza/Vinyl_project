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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv_config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_validator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_flash__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_connect_flash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_connect_flash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_express_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_express_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_vinyls__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_users__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_path__);

const { SERVER_PORT, DBUrl } = process.env;
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();











const url = DBUrl;
const options = {
  promiseLibrary: Promise
  // useMongoClient: true
};

__WEBPACK_IMPORTED_MODULE_9_mongoose___default.a.connect(url, options);
let db = __WEBPACK_IMPORTED_MODULE_9_mongoose___default.a.connection;
// check Db connection
__WEBPACK_IMPORTED_MODULE_9_mongoose___default.a.connection.on('connected', () => console.log('[MongoDB] is running on port 27017'));

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
  saveUninitialized: true
}));

//express messages middleware
app.use(__webpack_require__(4)());
app.use(function (req, res, next) {
  res.locals.messages = __webpack_require__(16)(req, res);
  next();
});

app.set('views', __WEBPACK_IMPORTED_MODULE_10_path___default.a.join(__dirname, 'views'));
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

app.listen(SERVER_PORT, () => console.log(`[Express] is running on ${SERVER_PORT}`));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vinylRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_vinyl__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_body_parser__);

const vinylRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();





//création de l'espace de storage pour les files uploaded dans les formulaires add et edit
const storage = __WEBPACK_IMPORTED_MODULE_2_multer___default.a.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now() + __WEBPACK_IMPORTED_MODULE_3_path___default.a.extname(file.originalname));
  }
});

const upload = __WEBPACK_IMPORTED_MODULE_2_multer___default()({
  storage: storage }); /*on récupère la variable storage qui défini l'espace de stockage*/

//on crée un Router pour toutes les routes ayant a trait aux vinyls

// vinylRouter.get('/', /*cette route '/' correspond à '/vinyls' puisqu'on se trouve déjà dans la route vinyls*/ (req,res) => {
//   // Vinyl.find({},(err,vinyls)=> {
// //   //   if (err) res.send(err)
// //   //     res.render("allvinyls")
// //   })
// // }

//Add submit POST route
vinylRouter.post('/add_vinyls', upload.single('cover'), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  let vinyl = new __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */](req.body);
  // title: req.body.title,
  // artist: req.body.artist,
  // release: req.body.release,
  // format : req.body.format,
  // description: req.body.description,
  // cover: req.file.filename


  if (req.file) {
    vinyl.cover = req.file.filename;
  } else {
    vinyl.cover = "no cover";
  }

  vinyl.save((err, vinyl) => {
    if (err) {
      req.flash('danger', 'Oops something went wrong');
      res.redirect('/vinyls');
    } else {
      req.flash('success', 'Vinyl added'); /*on utilise le type success pour la couleur bootstrap et on écrit le message a afficher*/
      res.redirect('/vinyls');
    }
  });
});
// display add_vinyl route
vinylRouter.get('/add_vinyls', (req, res) => {

  res.render('add_vinyls');
});

// User collection route
/*cette route est en fait /vinyls*/
vinylRouter.get('/', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].find({}, (err, allVinyls) => {
    res.render('profil', {
      vinyls: allVinyls
    });
  });
});

// Single Item route
vinylRouter.get('/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].findById(req.params.id, (err, vinyl) => {
    if (err) {
      console.log(err);
    } else {
      res.render('vinyl', {
        vinyl: vinyl
      });
    }
  });
});

// Formulaire Edit
vinylRouter.get('/edit/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].findById(req.params.id, (err, vinyl) => {
    res.render('edit_vinyl', {
      vinyl: vinyl
    });
  });
});

// Update Single Vinyl
vinylRouter.post('/edit/:id', upload.single('cover'), (req, res) => {

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
      res.redirect('/vinyls');
    }
  });
});

vinylRouter.delete('/edit/:id', (req, res) => {

  __WEBPACK_IMPORTED_MODULE_1__models_vinyl__["a" /* Vinyl */].remove({ _id: req.params.id }, err => {
    if (err) {
      console.log(err);
    } else {
      req.flash('success', 'Vinyl deleted');
      res.redirect('/profil');
    }
  });
});



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vinyl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const VinylSchema = new Schema({
  title: { type: String, index: true },
  artist: { type: String, index: true },
  release: { type: String },
  format: { type: String },
  description: { type: String },
  cover: { type: String }

});

const Vinyl = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("Vinyl", VinylSchema);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_multer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_multer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);

const userRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();






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

userRouter.post("/register", upload.single('avatar'), (req, res) => {
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
      req.flash('success', 'User created'); /*on utilise le type success pour la couleur bootstrap et on écrit le message a afficher*/
      res.redirect('/users/login');
    }
  });
});

userRouter.get("/register", (req, res) => {
  res.render('register', { title: 'Register' });
});
userRouter.get("/login", (req, res) => {
  res.render('login', { title: 'Login' });
});



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, index: true },
  username: { type: String, required: true, index: true },
  email: { type: String, required: true, index: true },
  password: { type: String, required: true, index: true },
  avatar: { type: String, index: true }
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("User", UserSchema);



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express-messages");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map