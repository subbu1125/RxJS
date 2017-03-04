/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));

var _jquery2 = _interopRequireDefault(_jquery);

var _Rx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"rxjs/Rx\""); e.code = 'MODULE_NOT_FOUND';; throw e; }()));

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const numbers = ['2','5','7','1'];

// const numberStream$ = Rx.Observable.from(numbers);

// numberStream$.subscribe(
//   v => {
//     console.log(v);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("complete");
//   }
// );

// const posts = [
//   { "title": "hello", "id":123 },
//   { "title": "hello", "id":123 },
//   { "title": "hello", "id":123 }
// ];

// const postStream$ = Rx.Observable.from(posts);

// postStream$.subscribe(
//   posts => {
//     console.log(posts);
//     $('#post').append('<li><h3>'+posts.title+'</h3><br><p>'+posts.id+'</p></li>')
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("completed");
//   }
// );

// const myPromise = new Promise((reslove, reject) => {
//   console.log("Creating Promise");
//   setTimeout(() => {
//     resolve('Hello from promise');
//   }, 3000);
// });

// myPromise.then((result) => {
//   console.log(result);
// });

// const source$ = Rx.Observable.fromPromise(myPromise);
// source$.subscribe(x => console.log(x));

// function getUser(username) {
//   return $.ajax({
//     url: 'http://api.github.com/users/'+username,
//     dataType: 'jsonp'
//   }).promise();
// }

// const source$ = Rx.Observable.fromEvent($('#input'), 'keyup');
// source$.subscribe(e => {
//   Rx.Observable.fromPromise(getUser('subbu1125'))
//     .subscribe(x => {
//       console.log(x);
//       $('#name').text(x.data.name);
//       $('#blog').text(x.data.email);
//       $('#repos').text(x.data.bio);
//     });
// });

// const timeStream$ = Rx.Observable.interval(100)
//                         .take(5);

// timeStream$.subscribe(
//   v => {
//     console.log(v);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("completed");
//   }
// );
// const timeStream$ = Rx.Observable.timer(5000, 1000)
//                         .take(5);

// timeStream$.subscribe(
//   v => {
//     console.log(v);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("completed");
//   }
// );

var timeStream$ = _Rx2.default.Observable.range(5000, 1000);

timeStream$.subscribe(function (v) {
  console.log(v);
}, function (err) {
  console.log(err);
}, function (complete) {
  console.log("completed");
});

/***/ })
/******/ ]);