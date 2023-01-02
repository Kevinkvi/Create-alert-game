alert("Добро пожаловать в игру!");
let name = prompt('Как тебя зовут ?');
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  function showOk(){
frens= prompt('Сколько у тебя друзей?')
  };
  function showCancel(){
alert("Окей тогда увидемся");
  }
  ask(`${name} Я спрошу у тебя пару вопросов ты готов ?`,showOk,showCancel);
  alert('да ты крут!');
  let a=3 
  b=frens
  alert(`Если у тебя будет 3 кг креветок то по ровну на каждого друга будет:${a/b}`);
  alert("У этого числа тип данных : number");
  alert(`при делении 3 на ${b} остаток будет ${a%b}`);
  alert(`3 в степени ${b}будет ${a**b}`);