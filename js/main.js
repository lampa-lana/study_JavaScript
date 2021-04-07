'use strict'

// доход за месяц спросить у пользователя  “Ваш месячный доход?”
// и результат сохраняем в переменную money
let money = +prompt('Ваш ежемесячный доход?', 50000);

// доп.доход
let income = 'Фриланс';

// булево значение true/false
let deposit = confirm('Есть ли у вас депозит в банке?');

// доп. расход 
let addExpenses = 'Коммунальные Платежи, Расходы на Транспорт, Мобильный Телефон, Интернет';

// цель накопить
let mission = 200000;

//  период попытки
let period = 12;

// бюджет на день
let budgetDay;

/* Спросить у пользователя “Перечислите возможные расходы за рассчитываемый
период через запятую” сохранить в переменную addExpenses */
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
  'Коммунальные Платежи, Расходы на Транспорт, Мобильный Телефон, Интернет');

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные
let expenses1 = prompt('Введите обязательную статью расходов?', 'Аренда');
let amount1 = +prompt('Во сколько это обойдется?', 15000);
let expenses2 = prompt('Введите обязательную статью расходов?', 'Электроэнергя');
let amount2 = +prompt('Во сколько это обойдется?', 5000);

// function exspression for typeof
const showTypeOf = function (data) {
  console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Объявить функцию getExpensesMonth. 
// Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth(amount1, amount2) {
  return amount1 + amount2;
};
getExpensesMonth(amount1, amount2);


//  Объявить функцию getAccumulatedMonth. 
// Функция возвращает Накопления за месяц(Доходы минус расходы)
function getAccumulatedMonth(money, amount1, amount2) {
  return money - amount1 - amount2;
};
getAccumulatedMonth(money, amount1, amount2);

// Объявить переменную 
// accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

// Объявить функцию getTargetMonth. Подсчитывает за какой 
// период будет достигнута цель, зная результат месячного
// накопления(accumulatedMonth) и возвращает результат
function getTargetMonth(accumulatedMonth, mission) {
  return Math.ceil(mission / accumulatedMonth);
};
getTargetMonth(accumulatedMonth, mission);

// budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
budgetDay = accumulatedMonth / 30;


// условия проверки на уровень дохода
let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600 && budgetDay <= 1199) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay >= 0 && budgetDay <= 599) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0) {
    return ('Что-то пошло не так');
  }
};

console.log('Расходы за месяц: ' + getExpensesMonth(amount1, amount2) + ' руб.');
console.log((addExpenses.toLowerCase()), (addExpenses.split(', ')));
console.log('Срок достижения цели: ' + getTargetMonth(accumulatedMonth, mission) + ' месяц(-ев, а)');
console.log('Бюджет на 1 день: ' + budgetDay + ' руб.');
console.log(getStatusIncome());

