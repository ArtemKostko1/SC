let k = prompt("Сколько орешков нужно болочке для пропитания зимой?", "");
let n = prompt("Сколько шишек собрала болочка?", "");
let m = prompt("Сколько орешков в одной шишке?", "");

result = (n * m >= k);

if(result == true){
  alert("Белочке хватит орешков");
}
else{
  alert("Белочке НЕ хватит орешков");
}