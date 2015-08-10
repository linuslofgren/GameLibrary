var rootSrc = "";
var functions = ['physics.js', 'functions.js', 'init.js'];
for (var i = 0; i < functions.length; i++) {
  var e = document.createElement('script');
  e.setAttribute('src', rootSrc + functions[i])
  document.head.appendChild(e);
}
//game.addPhysicsBody('a', 'a');
