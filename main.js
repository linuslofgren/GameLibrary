;
var rootSrc = "";
var scripts = ['physics.js', 'functions.js', 'init.js', 'object.js', 'component.js'];
for (var i = 0; i < scripts.length; i++) {
  var e = document.createElement('script');
  e.setAttribute('src', rootSrc + scripts[i]);
  document.head.appendChild(e);
}
