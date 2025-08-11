var english_verbs = ['WALK','RUN','EAT','DRINK','WRITE','READ','LISTEN','SPEAK','LOOK','SING','DANCE','SLEEP','WAKE UP','CLEAN','WASH','SWIM','KICK','THROW','HIT','LAUGH'];
var picture_verbs = ['Picture1.jpg','Picture2.jpg','Picture3.jpg','Picture4.jpg','Picture5.jpg','Picture6.jpg','Picture7.jpg','Picture8.jpg','Picture9.jpg','Picture10.jpg','Picture11.jpg','Picture12.jpg','Picture13.jpg','Picture14.jpg','Picture15.jpg','Picture16.jpg','Picture17.jpg','Picture18.jpg','Picture19.jpg','Picture20.jpg','Picture21.jpg','Picture22.jpg'];
var japanese_verbs = ['ARUKU','HASHIRU','TABERU','NOMU','KAKU','YOMU','KIKU','HANASU','MIRU','UTAU','ODORU','NERU','OKIRU','SOHJISURU','SENTAKUSURU','OYOGU','KERU','NAGERU','UTSU','WARAU'];
var h6 = document.getElementsByTagName('h6');

function changeJapanese(num) {
  var r = document.createElement('r');
  r.innerHTML = japanese_verbs[num]; 
  h6[3].after(r);
  r.style.color = 'white';
  return;
}

function changeEnglish() {
  rand = Math.floor(Math.random()*20);
  var p = document.createElement('p');
  var q = document.createElement('img');
  p.innerHTML = english_verbs[rand];
  q.src = `../photos/${picture_verbs[rand]}`;
  q.width = 100; 
  h6[0].after(p);
  h6[1].after(q);
  setTimeout(changeJapanese(rand),5000);
  return;
}

function answerJapanese() {
  const rrr = document.querySelector('r');
  rrr.style.color = 'blue';
  return;
}

function removeText() {
  const pp = document.querySelector('p');
  const qq = document.querySelector('img');
  const rr = document.querySelector('r');
  pp.remove();
  qq.remove();
  rr.remove();
  return;
}

let question = document.getElementById('btn');
let answer = document.getElementById('bbttnn');
let erase = document.getElementById('bbbtttnnn');
 

question.addEventListener('click', changeEnglish);
answer.addEventListener('click', answerJapanese); 
erase.addEventListener('click', removeText);

h6[0].addEventListener('click', changeEnglish);
h6[3].addEventListener('click', answerJapanese);
