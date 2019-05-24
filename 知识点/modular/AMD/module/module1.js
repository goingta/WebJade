define(function(require, factory) {
  let msg = "module1";
  function foo() {
    console.log(msg);
  }

  return { foo: foo };
});
