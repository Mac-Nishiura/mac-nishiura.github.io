var h2 = document.getElementsByTagName('h2');

var changeText = function () {
  var p = document.createElement('p');
  var q = document.createElement('q');
  var random_1 = Math.floor(Math.random()*9+1);
  var random_2 = Math.floor(Math.random()*9+1);
  /*var random_3 = Math.floor(Math.random()*3);*/
  p.innerHTML = random_1+" X "+random_2;
  q.innerHTML = random_1*random_2; 
  h2[0].after(p);
  h2[1].after(q);
  q.style.color = "white";
  return
}

var answerText = function () {
  const qqq = document.querySelector('q');
  qqq.style.color = "red";
  return
}

var removeText = function () {
  const pp = document.querySelector('p');
  const qq = document.querySelector('q');
  pp.remove();
  qq.remove()
}

let question = document.getElementById('btn');
let answer = document.getElementById('bbbtttnnn');
let erase = document.getElementById('bbttnn');

question.addEventListener('click', changeText);
answer.addEventListener('click', answerText);
erase.addEventListener('click', removeText);

h2[0].addEventListener('click', changeText);
h2[1].addEventListener('click', removeText);
