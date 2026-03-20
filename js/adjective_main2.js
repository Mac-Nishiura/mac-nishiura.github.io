var english_adjectives = ['Tasty','CHEERFUL','HAPPY','SAD','FUN','SLEEPY','BRIGT','DARK','FAST','SLOW','EARLY','LATE','STRONG','WEAK','SHALLOW','DEEP','FAT','SKINNY','GOOD AT','BAD','EASY','DIFFICULT','HOT','COLD','CLEAN','DIRTY','SAFE','DANGEROUS'];
var picture_adjectives = ['Picture23.jpg','Picture24.jpg','Picture25.jpg','Picture26.jpg','Picture27.jpg','Picture28.jpg','Picture29.jpg','Picture30.jpg','Picture31.jpg','Picture32.jpg','Picture33.jpg','Picture34.jpg','Picture35.jpg','Picture36.jpg','Picture37.jpg','Picture38.jpg','Picture39.jpg','Picture40.jpg','Picture41.jpg','Picture42.jpg','Picture43.jpg','Picture44.jpg','Picture45.jpg','Picture46.jpg','Picture47.jpg','Picture48.jpg','Picture49.jpg','Picture50.jpg'];
var japanese_adjectives = ['OISHII','AKARUI','URESHII','KANASHII','TANOSHII','NEMUI','AKARUI','KURAI','HAYAI','OSOI','HAYAI','OSOI','TSUYOI','YOWAI','ASAI','FUKAI','FUTOI','HOSOI','UMAI','HETANA','YASASHII','MUTSUKASHII','ATSUI','TSUMETAI','KIREINA','KITANAI','ANZENNA','KIKENNA'];
var h6 = document.getElementsByTagName('h6');

function changeJapanese(num) {
  var r = document.createElement('r');
  r.innerHTML = japanese_adjectives[num]; 
  h6[3].after(r);
  r.style.color = 'white';
  return;
}

function changeEnglish() {
  rand = Math.floor(Math.random()*22);
  var p = document.createElement('p');
  var q = document.createElement('img');
  p.innerHTML = english_adjectives[rand];
  q.src = `../photos/${picture_adjectives[rand]}`;
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
