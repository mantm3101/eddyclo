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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /home/maanx/Projects/eddyclo/Themes/EddyClo/resources/js/index.js: Unexpected token (13:4)\n\n\u001b[0m \u001b[90m 11 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39mrender(\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mStrictMode\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mProvider\u001b[39m store\u001b[33m=\u001b[39m{store}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mRouter\u001b[39m history\u001b[33m=\u001b[39m{navigator}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33mApp\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Parser._raise (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:745:17)\n    at Parser.raiseWithData (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:738:17)\n    at Parser.raise (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:732:17)\n    at Parser.unexpected (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:8806:16)\n    at Parser.parseExprAtom (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:10129:20)\n    at Parser.parseExprSubscripts (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9655:23)\n    at Parser.parseMaybeUnary (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9635:21)\n    at Parser.parseExprOps (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9505:23)\n    at Parser.parseMaybeConditional (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9478:23)\n    at Parser.parseMaybeAssign (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9433:21)\n    at Parser.parseExprListItem (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:10791:18)\n    at Parser.parseCallExpressionArguments (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9849:22)\n    at Parser.parseSubscript (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9749:31)\n    at Parser.parseSubscripts (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9678:19)\n    at Parser.parseExprSubscripts (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9661:17)\n    at Parser.parseMaybeUnary (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9635:21)\n    at Parser.parseExprOps (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9505:23)\n    at Parser.parseMaybeConditional (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9478:23)\n    at Parser.parseMaybeAssign (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9433:21)\n    at Parser.parseExpression (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:9385:23)\n    at Parser.parseStatementContent (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:11284:23)\n    at Parser.parseStatement (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:11155:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:11730:25)\n    at Parser.parseBlockBody (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:11716:10)\n    at Parser.parseTopLevel (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:11086:10)\n    at Parser.parse (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:12767:10)\n    at parse (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/parser/lib/index.js:12820:38)\n    at parser (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/maanx/Projects/eddyclo/Themes/EddyClo/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);