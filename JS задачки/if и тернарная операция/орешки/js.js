let result;
let a = prompt("Введите значение a", "");
let b = prompt("Введите значение b", "");

let choice = prompt("Каким способом вы хотите выполнить проверку условия? \n1) if \n2) тернарная операция");

switch(choice){
  case '1':

    if(a>b){
      alert("a больше b");
    } 
    if(a<b){
      alert("b больше a");
    }
    if(a===b){
      alert("a и b равны");
    }

    alert("Проверка условия была выполнена с помощью if");
    break;


    case '2':

    alert((a > b) ? "a больше b" : ((a < b) ? "b больше a" : "a и b равны"));

    alert("Проверка условия была выполнена с помощью тернарного оператора");
    break;

    default:
      alert("Введите 1 или 2");
}
