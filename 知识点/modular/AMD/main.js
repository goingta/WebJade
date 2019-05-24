requirejs.config({
  //   baseUrl: "js/lib",
  paths: {
    module1: "./module/module1",
    module2: "./module/module2"
  }
});

// Start the main app logic.
requirejs(["module2"], function(module2) {
  module2.show();
});
