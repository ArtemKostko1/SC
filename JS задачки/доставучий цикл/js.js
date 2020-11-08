let number;

do{
  number = prompt("Введите число больше 100 и меньше 200", "");
} while((number < 100 || number > 200) && number);
