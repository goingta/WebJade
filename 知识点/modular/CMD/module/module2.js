define(function(require, exports, module) {
  function show() {
    console.log("module2");
    let module1 = require("./module1");
    module1.foo();
  }
  module.exports = {
    show: show
  };
});
