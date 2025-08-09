english_adjectives = {"HIGH","LOW","THICK","THIN","BIG","SMALL","MUCH","LITTLE","NEW","OLD"}
picture_adjectives = {"picture1.jpg","picture2.jpg","picture3.jpg","picture4.jpg","picture5.jpg","picture6.jpg","picture7.jpg","picture8.jpg","picture9.jpg","picture10.jpg"}
japanese_adjectives = {"TAKAI","HIKUI","ATSUI","USUI","OHKII","CHIISAI","OHI","SUKUNAI","ATARASHII","FURUI"}
var h6 = document.getElementsByTagName('h6');
var changeEnglish = function() {
  var random = Math.floor(Math.random()*10)+1
  var p = document.createElement('p');
  p.innerHTML = english_adjectives[random]; 
  h6[0].after(p);
  return random
}
function changeJapanese(num) {
  var q = document.createElement('q');
  q.innerHTML = japanese_adjectives[num]; 
  h6[1].after(q);
  return
}
var removeText = function () {
  const pp = document.querySelector('p');
  const qq = document.querySelector('q');
  pp.remove();
  qq.remove()
}

let question = document.getElementById('btn');
let answer = document.getElementById('bbttnn');
let erase = document.getElementById('bbbtttnnn')

rand = 

question.addEventListener('click', changeEnglish);
answer.addEventListner('click', changeJapanese(random));
erase.addEventListener('click', removeText);

h6[0].addEventListener('click', changeEnglish);
h6[1].addEventListener('click', changeJapanese(i));
h6[2].addEventListener('click', removeText);
