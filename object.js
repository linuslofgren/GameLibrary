;(function(self) {
  var objects = [];
  function stdObj() {
    var components = ['renderer']
    this.addComponent = function(component) {
      this[component] = self.getComponent(component);
    }
    this.removeComponent = function(component) {
      for(var i = 0; i < components.length(); i++){
        if(components[i] == component){
          components.splice(i-1,1);
        }
      }
    }
  }
  self.createObject = function(type, setingsObj) {
    var obj = new stdObj();
    self.objects.push(obj);
    return obj;
  }
  return self;
})(window.game = window.game || {});
