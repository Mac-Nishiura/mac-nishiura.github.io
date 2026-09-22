var changeText = function () {
    // Arraies to store the numbers of occurences of 1～6
    let count = [0, 0, 0, 0, 0, 0];

    // To roll a die 6,000,000 times
    for (let i = 0; i < 6000000; i++) {

        // To get a random integer from 1 to 6
        let dice = Math.floor(Math.random() * 6) + 1;

        // 1 increment for the array of the occured number
        count[dice - 1]++;
    }

    // To describe on the HTML
    let result = "";

    for (let i = 0; i < 6; i++) {
        result += (i + 1) + " → " + count[i] + " times<br>";
    }

    document.getElementById("result").innerHTML = result;
  return
}



let start = document.getElementById('btn');


start.addEventListener('click', changeText);
