let module1 = require("./js/module1");
let module2 = require("./js/module2");
let module3 = require("./js/module3");

module1();
console.log(module2.msg);
module2.foo();
module3.foo();
