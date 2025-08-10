var english_adjectives = ['HIGH','LOW','THICK','THIN','BIG','SMALL','MUCH','LITTLE','NEW','OLD'];
var picture_adjectives = ['Picture1.jpg','Picture2.jpg','Picture3.jpg','Picture4.jpg','Picture5.jpg','Picture6.jpg','Picture7.jpg','Picture8.jpg','Picture9.jpg','Picture10.jpg'];
var japanese_adjectives = ['TAKAI','HIKUI','ATSUI','USUI','OHKII','CHIISAI','OHI','SUKUNAI','ATARASHII','FURUI'];
var h6 = document.getElementsByTagName('h6');

function changeJapanese(num) {
  var r = document.createElement('r');
  r.innerHTML = `<font color="WHITE">${japanese_adjectives[num]}</font>`; 
  h6[3].after(r);
  return;
}

function changeEnglish() {
  rand = Math.floor(Math.random()*10);
  var p = document.createElement('p');
  var q = document.createElement('img');
  p.innerHTML = english_adjectives[rand];
  q.src = `../photos/${picture_adjectives[rand]}`;
  q.width = 80; 
  h6[0].after(p);
  h6[1].after(q);
  setTimeout(changeJapanese(rand),5000);
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

let erase = document.getElementById('bbbtttnnn');
 

question.addEventListener('click', changeEnglish);

erase.addEventListener('click', removeText);

h6[0].addEventListener('click', changeEnglish);

