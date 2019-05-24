define(["module1"], function(module1) {
  function show() {
    console.log("module2");
    module1.foo();
  }

  return { show: show };
});
