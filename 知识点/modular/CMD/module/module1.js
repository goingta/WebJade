define(function(require, exports, module) {
  let msg = "module1";

  function foo() {
    console.log(msg);
  }

  exports.foo = foo;
});
