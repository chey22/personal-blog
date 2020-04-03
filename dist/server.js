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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\ndotenv.config();\r\nexports.default = {\r\n    mysql: {\r\n        host: process.env.DB_HOST,\r\n        // port: 3306,\r\n        user: process.env.DB_USER,\r\n        password: process.env.DB_PASS,\r\n        database: process.env.DB_SCHEMA\r\n    },\r\n    port: process.env.PORT\r\n};\r\n// export default {\r\n//   mysql: {\r\n//     host: \"localhost\",\r\n//     port: 3306,\r\n//     user: \"bloguser\",\r\n//     password: \"lolpassword!\",\r\n//     database: \"db_lab3_blog\"\r\n//   }\r\n// };\r\n\n\n//# sourceURL=webpack:///./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\r\n// may need to be right above export stmt\r\nvar blogs_1 = __webpack_require__(/*! ./queries/blogs */ \"./src/server/db/queries/blogs.ts\");\r\nvar tags_1 = __webpack_require__(/*! ./queries/tags */ \"./src/server/db/queries/tags.ts\");\r\nvar blogtags_1 = __webpack_require__(/*! ./queries/blogtags */ \"./src/server/db/queries/blogtags.ts\");\r\nvar pool = mysql.createPool(config_1.default.mysql);\r\n// !~SQL injection attack!~ - inserts the query below into the template literal and deletes the users table. DO NOT allow your users direct access to these values esp in plain text\r\n// const userid = '1; DROP TABLE users;'\r\n// console.log('SELECT * FROM users WHERE id = ${userid}');\r\nexports.Query = function (query, values) {\r\n    // or: (query:string, values?: Array<string | number>)\r\n    var sql = mysql.format(query, values);\r\n    console.log(sql);\r\n    return new Promise(function (resolve, reject) {\r\n        // pool.query(query, values, (err, results) -- this is poor practice bc it allows the user to have access to the variables query and values in plain text. Updated version below.\r\n        pool.query(sql, function (err, results) {\r\n            if (err) {\r\n                reject(err);\r\n            }\r\n            else {\r\n                resolve(results);\r\n            }\r\n        });\r\n    });\r\n};\r\n// Query('SELECT * FROM users WHERE id = ?', [1]);\r\n// OLD - landers version\r\n// export const Connection = mysql.createConnection(config.mysql);\r\n// Connection.connect(err => {\r\n//     if(err) console.log(err)\r\n// });\r\n// export const Query = (query: string, values?: Array<string | number>) => {\r\n//     // don't have to use connection.end since using a Promise\r\n//     return new Promise<Array<any>>((resolve, reject) => {\r\n//         Connection.query(query, values, (err, results) => {\r\n//             if(err) return reject(err);\r\n//             return resolve(results);\r\n//         });\r\n//     });\r\n// }\r\nexports.default = {\r\n    Blogs: blogs_1.default,\r\n    Tags: tags_1.default,\r\n    BlogTags: blogtags_1.default\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/queries/blogs.ts":
/*!****************************************!*\
  !*** ./src/server/db/queries/blogs.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/db/index.ts\");\r\n// import db from './db'\r\nvar all = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query('SELECT * FROM blogs')];\r\n    });\r\n}); };\r\nvar one = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query('SELECT * FROM blogs WHERE id = ?', [id])];\r\n    });\r\n}); };\r\n// POST a new Blog, with at least one tag\r\n// Hint: Your blog insert will result in an id response from mysql, use that to insert your blog id and tag id into your blogtags table!\r\nvar post = function (title, content, authorid) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"INSERT INTO blogs (title, content, authorid) VALUES(?,?,?)\", [title, content, Number(authorid)])];\r\n    });\r\n}); };\r\nvar put = function (id, title, content) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"UPDATE blogs SET title = ?, content = ? WHERE id = ?\", [title, content, id])];\r\n    });\r\n}); };\r\nvar del = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query('DELETE FROM blogs WHERE id = ?', [id])];\r\n    });\r\n}); };\r\n// export const blogTags = async (id:number) => Query('CALL spBlogTags(?)', [id]); // per Cat\r\nexports.default = {\r\n    all: all,\r\n    one: one,\r\n    post: post,\r\n    put: put,\r\n    del: del,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/blogs.ts?");

/***/ }),

/***/ "./src/server/db/queries/blogtags.ts":
/*!*******************************************!*\
  !*** ./src/server/db/queries/blogtags.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/db/index.ts\");\r\nvar all = function (blogid) {\r\n    return index_1.Query(\"SELECT tags.name FROM blogtags JOIN tags ON tags.id = blogtags.tagid WHERE blogid = ?\", [blogid]);\r\n    // (\"SELECT * FROM blogtags WHERE blogid = ?\", [blogid]);\r\n};\r\nvar insert = function (blogid, tagid) {\r\n    return index_1.Query('INSERT INTO blogtags (blogid, tagid) VALUE (?,?)', [blogid, tagid]);\r\n};\r\nexports.default = {\r\n    all: all,\r\n    insert: insert\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/blogtags.ts?");

/***/ }),

/***/ "./src/server/db/queries/tags.ts":
/*!***************************************!*\
  !*** ./src/server/db/queries/tags.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/db/index.ts\");\r\nvar tAll = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"SELECT * from tags\")];\r\n    });\r\n}); };\r\nvar tOne = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, index_1.Query(\"SELECT * FROM tags WHERE id = ?\", [id])];\r\n    });\r\n}); };\r\nexports.default = {\r\n    tAll: tAll,\r\n    tOne: tOne\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/queries/tags.ts?");

/***/ }),

/***/ "./src/server/routes/blogs.ts":
/*!************************************!*\
  !*** ./src/server/routes/blogs.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\n// BLOGS ROUTES\r\n// get all blogs = GET /api/blogs\r\nrouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var blogs, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Blogs.all()];\r\n            case 1:\r\n                blogs = _a.sent();\r\n                res.json(blogs);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// get one blog based on its unique id\r\nrouter.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var blogs, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Blogs.one(parseInt(req.params.id, 10))];\r\n            case 1:\r\n                blogs = _a.sent();\r\n                res.json(blogs); // 0 index bc it comes first in the response\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// post a new blog\r\n// POST a new Blog, with at least one tag\r\n// Hint: Your blog insert will result in an id response from mysql, use that to insert your blog id and tag id into your blogtags table!\r\nrouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var title, content, authorid, tagid, result, e_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                title = req.body.title;\r\n                content = req.body.content;\r\n                authorid = parseInt(req.body.authorid, 10);\r\n                tagid = parseInt(req.body.tagid, 10);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 4, , 5]);\r\n                return [4 /*yield*/, db_1.default.Blogs.post(title, content, authorid)];\r\n            case 2:\r\n                result = _a.sent();\r\n                return [4 /*yield*/, db_1.default.BlogTags.insert(result.insertId, tagid)];\r\n            case 3:\r\n                _a.sent();\r\n                res.json(result.insertId);\r\n                return [3 /*break*/, 5];\r\n            case 4:\r\n                e_3 = _a.sent();\r\n                console.log(e_3);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 5];\r\n            case 5: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// edit an existing blog\r\nrouter.put('/:id?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, title, content, _a, _b, e_4;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                id = parseInt(req.params.id, 10);\r\n                title = req.body.title;\r\n                content = req.body.content;\r\n                _c.label = 1;\r\n            case 1:\r\n                _c.trys.push([1, 3, , 4]);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, db_1.default.Blogs.put(id, title, content)];\r\n            case 2:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_4 = _c.sent();\r\n                console.log(e_4);\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// delete an existing blog\r\nrouter.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, _a, _b, e_5;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                id = parseInt(req.params.id, 10);\r\n                _c.label = 1;\r\n            case 1:\r\n                _c.trys.push([1, 3, , 4]);\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, db_1.default.Blogs.del(id)];\r\n            case 2:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_5 = _c.sent();\r\n                console.log(e_5);\r\n                res.sendStatus(500).json('delete failed');\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/blogs.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar blogs_1 = __webpack_require__(/*! ./blogs */ \"./src/server/routes/blogs.ts\");\r\n// import db from '../db'; // who knows\r\nvar router = express.Router();\r\nrouter.use('/blogs', blogs_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/server/config/index.ts\");\r\nvar app = express();\r\n// MIDDLEWARES\r\n// // cors middleware\r\n// app.use(cors());\r\n// static middleware\r\napp.use(express.static('public'));\r\n// this is the body parser middleware that parses the JSON content that's posted to the API so that we can use the JSON content like a JS object\r\napp.use(express.json());\r\n// middleware router from apiRouter out of routes in index.js\r\napp.use('/api', routes_1.default); // or app.use(apiRouter); ?\r\n// wildcard GET - for using React on front end of a single page app (meaning only one index.html file and one app.js file for all views). Nuance for working in full stack environment where server and the site are running on the same location\r\napp.get('*', function (req, res) { return res.sendFile(path.join(__dirname, '../public/index.html')); });\r\n// in case you tried to make a GET request to a pURL that you haven't coded a route for yet, aka a route that doesn't match inside apiRouter\r\n// also suited for headless CMS i.e. Wordpress, Stripe, Squarespace where you can build your own create-react-app and use their service\r\napp.listen(parseInt(config_1.default.port), function () { return console.log(\"Server listening on port: \" + config_1.default.port); });\r\n// or use: const port = process.env.PORT || 3000;\r\n// // testing\r\n// import './db' // Luke does not use, but Chase does?\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });