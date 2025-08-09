var english_adjectives = ['HIGH','LOW','THICK','THIN','BIG','SMALL','MUCH','LITTLE','NEW','OLD'];
var picture_adjectives = ['Picture1.jpg','Picture2.jpg','Picture3.jpg','Picture4.jpg','Picture5.jpg','Picture6.jpg','Picture7.jpg','Picture8.jpg','Picture9.jpg','Picture10.jpg'];
var japanese_adjectives = ['TAKAI','HIKUI','ATSUI','USUI','OHKII','CHIISAI','OHI','SUKUNAI','ATARASHII','FURUI'];
var h6 = document.getElementsByTagName('h6');

var changeEnglish = function() {
  var rand = Math.floor(Math.random()*10);
  var p = document.createElement('p');
  p.innerHTML = english_adjectives[rand]; 
  h6[0].after(p);
  return rand;
}
function changeJapanese(num) {
  var q = document.createElement('q');
  q.innerHTML = japanese_adjectives[num]; 
  h6[2].after(q);
  return;
}
var removeText = function () {
  const pp = document.querySelector('p');
  const qq = document.querySelector('q');
  pp.remove();
  qq.remove();
  return;
}

let question = document.getElementById('btn');
let answer = document.getElementById('bbttnn');
let erase = document.getElementById('bbbtttnnn')
 

question.addEventListener('click', changeEnglish());
answer.addEventListner('click', changeJapanese(changeEnglish());
erase.addEventListener('click', removeText());

h6[0].addEventListener('click', changeEnglish());
h6[1].addEventListener('click', changeJapanese(changeEnglish());
h6[2].addEventListener('click', removeText());
