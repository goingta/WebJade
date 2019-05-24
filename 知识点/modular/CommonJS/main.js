let module1 = require("./module1");
let { foo } = require("./module2");

console.log("before：", module1.count); //0
module1.add();
console.log("after：", module1.count); //0
foo();
