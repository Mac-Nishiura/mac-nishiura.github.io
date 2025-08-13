var english_nouns = ['TELEVISION','RADIO','BANANA','APPLE','BEER','COFFEE','EGG','MILK','CHICKEN','FISH','STEW','BARBECUE','LETTUCE','POTATO','SEA','MOUNTAIN','MOSQUITO','GECKO','REFRIGERATOR','WASHING MACHINE','DOG','CAT','CAR','SHIP'];
var picture_nouns = ['Picture1.png','Picture2.png','Picture3.png','Picture4.png','Picture5.png','Picture6.png','Picture7.png','Picture8.png','Picture9.png','Picture10.png','Picture11.png','Picture12.png','Picture13.png','Picture14.png','Picture15.png','Picture16.png','Picture17.png','Picture18.png','Picture19.png','Picture20.png','Picture21.png','Picture22.png','Picture23.png','Picture24.png'];
var japanese_nouns = ['TEREBI','RAJIO','BANANA','RINGO','BIIRU','KOHII','TAMAGO','GYUNYU','TORINIKU','SAKANA','SHICHU','BAHBEKYU','RETASU','JYAGAIMO','UMI','YAMA','KA','YAMORI','REIZOKO','SENTAKKI','INU','NEKO','KURUMA','FUNE'];
var h6 = document.getElementsByTagName('h6');

function changeJapanese(num) {
  var r = document.createElement('r');
  r.innerHTML = japanese_nouns[num]; 
  h6[3].after(r);
  r.style.color = 'white';
  return;
}

function changeEnglish() {
  rand = Math.floor(Math.random()*24);
  var p = document.createElement('p');
  var q = document.createElement('img');
  p.innerHTML = english_nouns[rand];
  q.src = `../photos3/${picture_nouns[rand]}`;
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
