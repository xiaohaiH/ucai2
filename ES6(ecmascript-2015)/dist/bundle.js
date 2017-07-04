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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// let ab = "123";
// for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1);
// };


// ///赋值
// let [a, b, ...c] = [1]
// console.log(a, b, c);

///解构
// let { username1, username2 } = { username1: 1, username2: 2 };
// console.log(username1, username2);

///函数体赋值
// function add([a, b]) {
//     return a + b;
// }
// console.log(add([1, 2]))
// let { length: len } = "world";
// console.log(length) ///0
// console.log(len) ///5
//     // console.log(add([1, 2]))
// let { length } = "world";
// console.log(length); ///5


// ///函数默认值.  
// function add2(a, b = "hei") {
//     console.log(a, b)
// };
// add2(1) ///1,hei.代表b没给值则使用hei


// /// 函数length属性,当形参赋予默认值后,该形参的长度会失真. 
// console.log((function(a) {}).length); ///.长度为一.
// console.log((function(a, b) {}).length); ///.长度为二.
// console.log((function(a, b, c = 1) {}).length); ///.长度为二.

// const fn = (a, b, c) => (a, b, c); ///这个是定义多个形参.
// console.log(fn(1))
/*  */ ///未实验
// const fn2 = (a, b) => {
//     console.log(this)
//     for (let i; i < a; i++) {
//         console.log(i);
//     };
// };
// console.log(fn2(10, 20));

/*  */

///this指向,this指向定义时所在的对象,而不是使用时所在的对象.
// function Fn3() {
//     setTimeout(() => {
//         console.log(this)
//     }, 2000)
// };
// var timer = new Fn3();


/*  */
/// ``反引号代表格式化内容.

/*  */
/* ${变量名};  ///这个是用来变量插值的.*/
// var flag = true;
// let username = "姓名";
// let html = `<ul>
//                 <li class="${flag ? 'show' : 'hide'}"><span>${username}</span></li>
//             </ul>`;
// console.log(html);

/* 构造函数 */
///ES6中return起作用.

// class People {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };
//     hello(a, b) {
//         return a + b;
//     };
// }
// let newPeople = new People("小海", 10);
// console.log(newPeople);
// console.log(newPeople.hello(1, 2)); ///调用People构造函数里的函数.

/// class通过extends来继承.
// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

///例： .
// class People2 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         return this;
//     };
// }
// class Xiaohai extends People2 {
//     constructor(name, age) {
//         super(name, age);
//         this.name = "流星";
//         this.age = "22";
//         return this;
//     }
// }
// const xiao = new Xiaohai();
// console.log(xiao);

/* Promise */
///异步操作 ： 三种状态(Pending):进行中，(Resolved|Fulfilled)，已完成，(Rejected)已失败.
///状态一旦改变，状态就凝固了,不会在发生改变.

///缺点：  建立则会立即执行,无法中途取消  如果不设置回调函数,会抛出错误异常  .


/* assign:合并对象 */
var obj1 = { a: 1 };
var obj2 = { a: 2, b: 2 };
var obj3 = { c: 2 };
Object.assign(obj1, obj2, obj3);
console.log(obj2);

/***/ })
/******/ ]);