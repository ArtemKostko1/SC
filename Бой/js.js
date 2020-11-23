function createTable(num) {
  let array = [];
  let table = document.getElementById("table");
  table.innerHTML = "";
  for (let i = 2; i <= num; i++) {
    array.push(i);
    let div = document.createElement("div");
    div.classList.add("number");
    div.innerHTML = i;
    table.appendChild(div);
  }
}

function getPrimes(num) {
  //массив с отброщенными числами
  const seive = [];
  //массив с простыми числами
  const primes = [];
  if (num === 2) {
    div.classList.add("");
  }
  for (let i = 2; i <= num; i++) {
    //если числа i нет в массиве seive, то заполняем его в массив primes
    if (!seive[i]) {
      primes.push(i);

      //отбрасываем все числа кратные i в массив seive
      for (let j = i * i; j <= num; j += i) {
        seive[j] = true;
      }
    }
  }

  return primes;
}

let button = document.getElementById("btn");
button.addEventListener("click", () => {
  createTable(prompt("Введите кол-во чисел", ""));
});

button.addEventListener("click", () => {
  const numbersList = document.querySelectorAll(".number");
  numbersList.forEach((item, index) => {
    setTimeout(() => {
      getPrimes(+item.innerHTML, item);
    }, index * 200);
  });
});
