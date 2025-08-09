var english_adjectives = ['HIGH','LOW','THICK','THIN','BIG','SMALL','MUCH','LITTLE','NEW','OLD'];
var picture_adjectives = ['Picture1.jpg','Picture2.jpg','Picture3.jpg','Picture4.jpg','Picture5.jpg','Picture6.jpg','Picture7.jpg','Picture8.jpg','Picture9.jpg','Picture10.jpg'];
var japanese_adjectives = ['TAKAI','HIKUI','ATSUI','USUI','OHKII','CHIISAI','OHI','SUKUNAI','ATARASHII','FURUI'];
var h6 = document.getElementsByTagName('h6');

var changeEnglish = function() {
  var ran = Math.floor(Math.random()*10);
  var p = document.createElement('p');
  p.innerHTML = english_adjectives[ran]; 
  h6[0].after(p);
  return ran;
}
var changePicture = function() {
  var rand = Math.floor(Math.random()*10);
  var q = document.createElement('q');
  q.innerHTML = `<img src=./photos/${picture_adjectives[rand]}>`; 
  h6[1].after(q);
  return rand;
}
var changeJapanese = function() {
  var rando = Math.floor(Math.random()*10);
  var r = document.createElement('r');
  r.innerHTML = japanese_adjectives[rando]; 
  h6[2].after(r);
  return rando;
}
var removeText = function () {
  const pp = document.querySelector('p');
  const qq = document.querySelector('q');
  const rr = document.querySelector('r');
  pp.remove();
  qq.remove();
  rr.remove();
  return;
}

let question = document.getElementById('btn');
let answer = document.getElementById('bbttnn');
let erase = document.getElementById('bbbtttnnn');
 

question.addEventListener('click', changeEnglish, changePicture);
answer.addEventListener('click', changeJapanese);
erase.addEventListener('click', removeText);

h6[0].addEventListener('click', changeEnglish);
h6[1].sddEventListener('click', changePicture);
h6[2].addEventListener('click', changeJapanese);

