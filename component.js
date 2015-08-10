;(function(self) {
  var components = [];
  self.getComponent = function(component) {
    return Math.random();
  }
  self.addComponent = function(component) {
    if(typeof component == 'object') {
      components.push(component);
    }
    else {
      console.log("Component must be of type object");
    }
  }
  return self;
})(window.game = window.game || {});
