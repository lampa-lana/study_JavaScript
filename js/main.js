// строгий режим
'use strict'

// доход за месяц
let money = 800;
// доп.доход
let income = 'Фриланс';
// доп. расход
let addExpenses = 'Коммунальные Платежи, Расходы на Транспорт, Мобильный Телефон, Интернет';
let deposit = true;
// цель накопить
let mission = 500;
//  период попытки
let period = 12;

// тип данных 
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

// длина строки addExpenses
console.log(addExpenses.length);
// период для накопления
console.log('Период равен ' + period + ' месяцев');
// цель 
console.log('Цель заработать ' + mission + ' рублей');
// расходы в нижгем регистре и разбитые на массив
console.log((addExpenses.toLowerCase()), (addExpenses.split(', ')));

// бюджет на день
let budgetDay;
budgetDay = money / 30;
// 

// спросить у пользователя  “Ваш месячный доход?”и результат сохраняем в переменную money
money = +prompt('Ваш ежемесячный доход?');


/* Спросить у пользователя “Перечислите возможные расходы за рассчитываемый
период через запятую” сохранить в переменную addExpenses */
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');


/* Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить
 данные в переменной deposit (булево значение true/false) */
deposit = confirm('Есть ли у вас депозит в банке?');


// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');


let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');


/* Вычислить бюджет на месяц, учитывая обязательные расходы, 
сохранить в новую переменную budgetMonth и вывести результат в консоль */
let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц:',(budgetMonth));

/* зная budgetMonth, посчитать за сколько месяцев будет
 достигнута цель mission, вывести в консоль, округляя в большую сторону 
 */

console.log('Цель будет достигнута за',(Math.ceil(mission / budgetMonth)), ' месяцев(-а)');
 
/* Поправить budgetDay учитывая бюджет на месяц,
 а не месячный доход. Вывести в консоль  округлив в меньшую сторону  */

budgetDay = budgetMonth / 30;
console.log('Бюджет на день:',(Math.floor(budgetDay)));

// условия проверки на уровень дохода

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay <= 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay <= 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0){
   console.log('Что то пошло не так');
}







