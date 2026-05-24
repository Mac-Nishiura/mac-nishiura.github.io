var english_adjectives = ['Tasty','CHEERFUL','HAPPY','SAD','FUN','SLEEPY','BRIGT','DARK','FAST','SLOW','EARLY','LATE','STRONG','WEAK','SHALLOW','DEEP','FAT','SKINNY','GOOD AT','BAD AT','EASY','DIFFICULT','HOT','COLD','CLEAN','DIRTY','SAFE','DANGEROUS'];
var picture_adjectives = ['Picture23.jpg','Picture24.jpg','Picture25.jpg','Picture26.jpg','Picture27.jpg','Picture28.jpg','Picture29.jpg','Picture30.jpg','Picture31.jpg','Picture32.jpg','Picture33.jpg','Picture34.jpg','Picture35.jpg','Picture36.jpg','Picture37.jpg','Picture38.jpg','Picture39.jpg','Picture40.jpg','Picture41.jpg','Picture42.jpg','Picture43.jpg','Picture44.jpg','Picture45.jpg','Picture46.jpg','Picture47.jpg','Picture48.jpg','Picture49.jpg','Picture50.jpg'];
var japanese_adjectives = ['OISHII','AKARUI','URESHII','KANASHII','TANOSHII','NEMUI','AKARUI','KURAI','HAYAI','OSOI','HAYAI','OSOI','TSUYOI','YOWAI','ASAI','FUKAI','FUTOI','HOSOI','UMAI','HETANA','YASASHII','MUTSUKASHII','ATSUI','TSUMETAI','KIREINA','KITANAI','ANZENNA','KIKENNA'];
var h1 = document.getElementsByTagName('h1');

function changeJapanese(num) {
  r.innerHTML = japanese_adjectives[num]; 
  h1[3].after(r);
  r.style.color = 'white';
  return;
}

function changeEnglish() {
  if (flag == 1) {
    rand = Math.floor(Math.random()*28);
    p.innerHTML = english_adjectives[rand];
    q.src = `../photo/${picture_adjectives[rand]}`;
    q.width = 100; 
    h1[0].after(p);
    h1[1].after(q);
    setTimeout(changeJapanese(rand),5000);
  } else {
    p.innerHTML = english_adjectives[i];
    q.src = `../photo/${picture_adjectives[i]}`;
    q.width = 100; 
    h1[0].after(p);
    h1[1].after(q);
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

h1[0].addEventListener('click', changeEnglish);
h1[3].addEventListener('click', answerJapanese);
