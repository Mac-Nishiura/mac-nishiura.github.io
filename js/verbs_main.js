var english_verbs = ['WALK','RUN','EAT','DRINK','WRITE','READ','LISTEN','SPEAK','LOOK','SING','DANCE','SLEEP','WAKE UP','CLEAN','WASH','SWIM','KICK','THROW','HIT','LAUGH'];
var picture_verbs = ['Picture1.png','Picture2.png','Picture3.png','Picture4.png','Picture5.png','Picture6.png','Picture7.png','Picture8.png','Picture9.png','Picture10.png','Picture11.png','Picture12.png','Picture13.png','Picture14.png','Picture15.png','Picture16.png','Picture17.png','Picture18.png','Picture19.png','Picture20.png'];
var japanese_verbs = ['ARUKU','HASHIRU','TABERU','NOMU','KAKU','YOMU','KIKU','HANASU','MIRU','UTAU','ODORU','NERU','OKIRU','SOHJISURU','SENTAKUSURU','OYOGU','KERU','NAGERU','UTSU','WARAU'];
var h2 = document.getElementsByTagName('h2');

function changeJapanese(num) {
  r.innerHTML = japanese_verbs[num]; 
  h2[3].after(r);
  r.style.color = 'white';
  return;
}

function changeEnglish() {
  if (flag == 1) {
    rand = Math.floor(Math.random()*20);
    p.innerHTML = english_verbs[rand];
    q.src = `../photos2/${picture_verbs[rand]}`;
    q.width = 100; 
    h2[0].after(p);
    h2[1].after(q);
    setTimeout(changeJapanese(rand),5000);
  } else {
    p.innerHTML = english_verbs[i];
    q.src = `../photos2/${picture_verbs[i]}`;
    q.width = 100; 
    h2[0].after(p);
    h2[1].after(q);
    setTimeout(changeJapanese(i),5000);
    i++;
  }
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

function initialize() {
  flag = 1-flag;
  if (flag == 1) {
    practice.style.backgroundColor = "red";
  } else {
    practice.style.backgroundColor = "green";
  }
  return;
}

var i = 0;
var flag = 0;
var p = document.createElement('p');
var q = document.createElement('img');
var r = document.createElement('r');

let practice = document.getElementById('000');
let question = document.getElementById('btn');
let answer = document.getElementById('bbttnn');
let erase = document.getElementById('bbbtttnnn');
practice.style.backgroundColor = "green";

practice.addEventListener('click', initialize);
question.addEventListener('click', changeEnglish);
answer.addEventListener('click', answerJapanese); 
erase.addEventListener('click', removeText);

h2[0].addEventListener('click', changeEnglish);
h2[3].addEventListener('click', answerJapanese);
