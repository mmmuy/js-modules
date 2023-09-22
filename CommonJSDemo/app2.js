console.log("exports: ", exports);
console.log("module exports: ", module.exports);
console.log(exports == module.exports); // exports和module.exports默认指向同一个空对象
module.exports = { a: 1 };
console.log("exports: ", exports); // module.exports指向了新对象，exports不变
console.log("module exports: ", module.exports);
