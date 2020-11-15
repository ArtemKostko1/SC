function getPrimes(num) {
  //массив с отброщенными числами
  const seive = [];
  //массив с простыми числами
  const primes = [];

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

console.log(getPrimes(50));
