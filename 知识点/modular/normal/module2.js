(function(window, module1) {
  var msg = "module2";
  function callModule1() {
    module1.foo();
  }

  function foo() {
    callModule1();
    console.log(msg);
  }
  window.module2 = {
    foo: foo
  };
})(window, module1);
