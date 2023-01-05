"use strict";
alert("Добро пожаловать в игру!");
let UserName;
do {
  UserName = prompt("ваше имя");
} while (UserName <= null);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  let number;
  do {
    number = prompt("Сколько у тебя друзей?");
  } while (number <= null && number);
  alert("да ты крут!");
  let a = 3,
    b = number;
  alert(
    `Если у тебя будет 3 кг креветок то по ровну на каждого друга будет: ${
      a / b
    }`
  );
  alert(`при деление 3 на ${b} остаток будет : ${a % b}`);
  alert(`3 в степени ${b} будет:${a ** b}`);
}
function showCancel() {
  alert("Окей тогда увидемся");
}
ask(`${UserName} Я спрошу у тебя пару вопросов ты готов ?`, showOk, showCancel);
