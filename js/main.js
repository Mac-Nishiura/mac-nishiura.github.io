var h1 = document.getElementsByTagName('h1');
var changeText = function () {
  var p = document.createElement('p');
  var random = Math.random();
  p.innerHTML = random;
  h1[0].after(p); 
}
h1[0].addEventListener('click', changeText);
