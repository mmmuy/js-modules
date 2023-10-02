(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let module1 = require("./js/module1");
let module2 = require("./js/module2");
let module3 = require("./js/module3");

module1();
console.log(module2.msg);
module2.foo();
module3.foo();

},{"./js/module1":2,"./js/module2":3,"./js/module3":4}],2:[function(require,module,exports){
module.exports = function () {
  console.log("this is module1");
};

},{}],3:[function(require,module,exports){
module.exports = {
  msg: "module2",
  foo() {
    console.log("this is module2");
  }
};

},{}],4:[function(require,module,exports){
exports.msg = "module3";

exports.foo = function () {
  console.log("this is module3");
};

},{}]},{},[1]);
