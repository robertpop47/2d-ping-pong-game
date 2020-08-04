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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: x, y, lives, drawBall, updateBallPosition, reverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"x\", function() { return x; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"y\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lives\", function() { return lives; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawBall\", function() { return drawBall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateBallPosition\", function() { return updateBallPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reverse\", function() { return reverse; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n/* harmony import */ var _paddle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paddle.js */ \"./src/paddle.js\");\n\n\n\nvar x = _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width / 2;\nvar y = _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height - 30;\nvar dx = 2;\nvar dy = -2;\nvar lives = 3;\nvar ballRadius = 10;\nvar drawBall = () => {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].beginPath();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].arc(x, y, ballRadius, 0, Math.PI * 2);\n  _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fillStyle = \"red\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].fill();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"ctx\"].closePath();\n};\nvar updateBallPosition = () => {\n  if (x + dx > _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width - ballRadius || x + dx < ballRadius) {\n    dx = -dx;\n  }\n\n  if (y + dy < ballRadius) {\n    dy = -dy;\n  } else if (y + dy > _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height - ballRadius) {\n    if (x > _paddle_js__WEBPACK_IMPORTED_MODULE_2__[\"paddleX\"] && x < _paddle_js__WEBPACK_IMPORTED_MODULE_2__[\"paddleX\"] + _paddle_js__WEBPACK_IMPORTED_MODULE_2__[\"paddleWidth\"]) {\n      dy = -dy;\n    } else {\n      lives--;\n      if (!lives) Object(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"gameOver\"])();else {\n        x = _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].width / 2;\n        y = _canvas_js__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"].height - 30;\n        dx = 2;\n        dy = -2;\n        Object(_paddle_js__WEBPACK_IMPORTED_MODULE_2__[\"initPaddleX\"])();\n      }\n    }\n  }\n\n  x += dx;\n  y += dy;\n};\nvar reverse = () => {\n  dy = -dy;\n};\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/bricks.js":
/*!***********************!*\
  !*** ./src/bricks.js ***!
  \***********************/
/*! exports provided: brickRowCount, brickColumnCount, score, drawBricks, collisionDetection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brickRowCount\", function() { return brickRowCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brickColumnCount\", function() { return brickColumnCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"score\", function() { return score; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawBricks\", function() { return drawBricks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collisionDetection\", function() { return collisionDetection; });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n/* harmony import */ var _ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball.js */ \"./src/ball.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nvar brickRowCount = 3;\nvar brickColumnCount = 5;\nvar brickWidth = 75;\nvar brickHeight = 20;\nvar brickPadding = 10;\nvar brickOffsetTop = 30;\nvar brickOffsetLeft = 30;\nvar score = 0;\nvar bricks = [];\n\nfor (var c = 0; c < brickColumnCount; c++) {\n  bricks[c] = [];\n\n  for (var r = 0; r < brickRowCount; r++) {\n    bricks[c][r] = {\n      x: 0,\n      y: 0,\n      status: 1\n    };\n  }\n}\n\nvar drawBricks = () => {\n  for (var c = 0; c < brickColumnCount; c++) {\n    for (var r = 0; r < brickRowCount; r++) {\n      if (bricks[c][r].status == 1) {\n        var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;\n        var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;\n        bricks[c][r].x = brickX;\n        bricks[c][r].y = brickY;\n        _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].rect(brickX, brickY, brickWidth, brickHeight);\n        _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#9370DB\";\n        _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n      }\n    }\n  }\n};\nvar collisionDetection = () => {\n  for (var c = 0; c < brickColumnCount; c++) {\n    for (var r = 0; r < brickRowCount; r++) {\n      var b = bricks[c][r];\n\n      if (b.status == 1) {\n        if (_ball_js__WEBPACK_IMPORTED_MODULE_1__[\"x\"] > b.x && _ball_js__WEBPACK_IMPORTED_MODULE_1__[\"x\"] < b.x + brickWidth && _ball_js__WEBPACK_IMPORTED_MODULE_1__[\"y\"] > b.y && _ball_js__WEBPACK_IMPORTED_MODULE_1__[\"y\"] < b.y + brickHeight) {\n          Object(_ball_js__WEBPACK_IMPORTED_MODULE_1__[\"reverse\"])();\n          b.status = 0;\n          score++;\n\n          if (score == brickRowCount * brickColumnCount) {\n            Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[\"win\"])();\n          }\n        }\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/bricks.js?");

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: canvas, ctx, clearCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearCanvas\", function() { return clearCanvas; });\nvar canvas = document.getElementById(\"myCanvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar clearCanvas = () => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n};\n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: win, gameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"win\", function() { return win; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOver\", function() { return gameOver; });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n/* harmony import */ var _ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball.js */ \"./src/ball.js\");\n/* harmony import */ var _paddle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paddle.js */ \"./src/paddle.js\");\n/* harmony import */ var _bricks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bricks.js */ \"./src/bricks.js\");\n\n\n\n\nvar restart = document.querySelector('#restart');\n\nfunction drawScore() {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].font = \"16px Arial\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#000000\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText(\"Score: \" + _bricks_js__WEBPACK_IMPORTED_MODULE_3__[\"score\"], 8, 20);\n}\n\nfunction drawLives() {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].font = \"16px Arial\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#000000\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText(\"Lives: \" + _ball_js__WEBPACK_IMPORTED_MODULE_1__[\"lives\"], _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width - 65, 20);\n}\n\nfunction draw() {\n  Object(_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"clearCanvas\"])();\n  Object(_bricks_js__WEBPACK_IMPORTED_MODULE_3__[\"drawBricks\"])();\n  Object(_ball_js__WEBPACK_IMPORTED_MODULE_1__[\"drawBall\"])();\n  Object(_paddle_js__WEBPACK_IMPORTED_MODULE_2__[\"drawPaddle\"])();\n  drawScore();\n  drawLives();\n  Object(_bricks_js__WEBPACK_IMPORTED_MODULE_3__[\"collisionDetection\"])();\n  Object(_ball_js__WEBPACK_IMPORTED_MODULE_1__[\"updateBallPosition\"])();\n  Object(_paddle_js__WEBPACK_IMPORTED_MODULE_2__[\"updatePaddlePosition\"])();\n}\n\nvar interval = setInterval(draw, 10);\nvar win = () => {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].font = \"24px Arial\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#000000\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText(\"YOU WIN, CONGRATULATIONS!\", 60, 180);\n  clearInterval(interval);\n  restart.style.display = 'block';\n};\nvar gameOver = () => {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].font = \"24px Arial\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#000000\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillText(\"GAME OVER!\", 160, 180);\n  clearInterval(interval);\n  restart.style.display = 'block';\n};\n\nvar restartGame = () => {\n  document.location.reload();\n  restart.style.display = 'none';\n};\n\nrestart.addEventListener('click', restartGame);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! exports provided: paddleWidth, paddleX, initPaddleX, drawPaddle, updatePaddlePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paddleWidth\", function() { return paddleWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paddleX\", function() { return paddleX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPaddleX\", function() { return initPaddleX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPaddle\", function() { return drawPaddle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePaddlePosition\", function() { return updatePaddlePosition; });\n/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\n\nvar paddleHeight = 10;\nvar paddleWidth = 75;\nvar paddleX = (_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width - paddleWidth) / 2;\nvar initPaddleX = () => {\n  paddleX = (_canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width - paddleWidth) / 2;\n};\nvar rightPressed = false;\nvar leftPressed = false;\n\nvar keyDownHandler = e => {\n  if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n    rightPressed = true;\n  } else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n    leftPressed = true;\n  }\n};\n\nvar keyUpHandler = e => {\n  if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n    rightPressed = false;\n  } else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n    leftPressed = false;\n  }\n};\n\nfunction mouseMoveHandler(e) {\n  var relativeX = e.clientX - _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].offsetLeft;\n\n  if (relativeX > 0 && relativeX < _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width) {\n    paddleX = relativeX - paddleWidth / 2;\n  }\n}\n\nvar drawPaddle = () => {\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].rect(paddleX, _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].height - paddleHeight, paddleWidth, paddleHeight);\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = \"#483D8B\";\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n  _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n};\nvar updatePaddlePosition = () => {\n  if (rightPressed && paddleX < _canvas_js__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].width - paddleWidth) {\n    paddleX += 7;\n  } else if (leftPressed && paddleX > 0) {\n    paddleX -= 7;\n  }\n};\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\ndocument.addEventListener(\"mousemove\", mouseMoveHandler, false);\n\n//# sourceURL=webpack:///./src/paddle.js?");

/***/ })

/******/ });