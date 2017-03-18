/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const axios = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"axios\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function load(article) {
	  axios.get('http://localhost:3000/select').then(function (response) {
	    console.log("load");
	    article.$data.items = response.data;
	  }).catch(function (error) {
	    console.log(error);
	  });
	}
	
	let article = new Vue({
	  el: '#article',
	  data: {
	    items: null
	  }
	});
	
	function getUserName(article) {
	  axios.get('http://localhost:3000/ge').then(function (response) {
	    console.log("load");
	    article.$data.items = response.data;
	  }).catch(function (error) {
	    console.log(error);
	  });
	}
	
	let postArticle = new Vue({
	  el: '#input-form',
	  data: {
	    name: 'Vue.js',
	    subject: "",
	    contents: ""
	  },
	  // `methods` オブジェクトの下にメソッドを定義する
	  methods: {
	    insert: function () {
	      var url = 'http://localhost:3000/insert?subject=' + this.subject + '&contents=' + this.contents;
	      axios.get(url).then(function () {
	        console.log("post");
	        load(article);
	      }).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }
	});
	
	load(article);

/***/ }
/******/ ]);