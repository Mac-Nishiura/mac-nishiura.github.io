var h1 = document.getElementsByTagName('h1');
var changeText = function () {
  var p = document.createElement('p');
  var q = document.createElement('q');
  var random_1 = Math.random();
  var random_2 = Math.random();
  p.innerHTML = random_1+"+"+random_2;
  q.innerHTML = random_1+random_2
  h1[0].after(p);
  h1[1].after(q)
}
h1[0].addEventListener('click', changeText);
