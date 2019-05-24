(function(window) {
  var msg = "module1";
  function foo() {
    console.log(msg);
  }
  window.module1 = {
    foo: foo
  };
})(window);
