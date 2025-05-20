var h1 = document.getElementsByTagName('h1');
var changeText = function () {
  var p = document.createElement('p');
  var q = document.createElement('q');
  var random_1 = Math.floor(Math.random()*10);
  var random_2 = Math.floor(Math.random()*10);
  var random_3 = Math.floor(Math.random()*3);
  p.innerHTML = random_1+" X "+random_2;
  q.innerHTML = random_1*random_2+random_3; 
  h1[0].after(p);
  h1[1].after(q);
}
var removeText = function () {
  var pp = document.getElementsByTagName('p');
  var qq = document.getElementsByTagName('q');
  pp.remove();
  qq.remove();
}
h1[0].addEventListener('click', changeText);
h1[1].addEventListener('click', removeText);
