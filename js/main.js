'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
// доход за месяц спросить у пользователя  “Ваш месячный доход?”
// и результат сохраняем в переменную money
let money,
  // доп.доход
   income = 'Фриланс',
  // булево значение true/false
   deposit = confirm('Есть ли у вас депозит в банке?'),
  // доп. расход 
  addExpenses,
  // цель накопить
   mission = 200000,
  //  период попытки
   period = 12;
// бюджет на день
    // budgetDay;
let start = function () {
   do {
     money = prompt('Ваш ежемесячный доход?');
   } while (!isNumber(money));
      // confirm('Подтвердите, что Ваш ежемесячный доход ' +  money);
  
};
start();

/* Спросить у пользователя “Перечислите возможные расходы за рассчитываемый
период через запятую” сохранить в переменную addExpenses */
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
  'Коммунальные Платежи, Расходы на Транспорт, Мобильный Телефон, Интернет');

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные
/* let expenses1 = prompt('Введите обязательную статью расходов?', 'Аренда'),
    amount1 = +prompt('Во сколько это обойдется?', 15000),
    expenses2 = prompt('Введите обязательную статью расходов?', 'Электроэнергя'),
    amount2 = +prompt('Во сколько это обойдется?', 5000); */
let expenses = [];
// function exspression for typeof
const showTypeOf = function (data) {
  console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Объявить функцию getExpensesMonth. 
// Функция возвращает сумму всех обязательных расходов за месяц
let getExpensesMonth = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    
      expenses[i] = prompt('Введите обязательную статью расходов?');
      sum += +prompt('Во сколько это обойдется?');
        while (!isNumber(sum)) {
          sum += prompt('Во сколько это обойдется?');
        }
      }
         
  console.log(expenses);
   return sum;
};

let expensesAmount = getExpensesMonth();


//  Объявить функцию getAccumulatedMonth. 
// Функция возвращает Накопления за месяц(Доходы минус расходы)
function getAccumulatedMonth(money, expensesAmount) {
  return money - expensesAmount;
};
getAccumulatedMonth(money, expensesAmount);

// Объявить переменную 
// accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

// Объявить функцию getTargetMonth. Подсчитывает за какой 
// период будет достигнута цель, зная результат месячного
// накопления(accumulatedMonth) и возвращает результат
// Если getTargetMonth возвращает нам отрицательное значение, то вместо 
// “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
function getTargetMonth(accumulatedMonth, mission) {
  if ((mission / accumulatedMonth) > 0) {
    return('Срок достижения цели: ' + Math.floor(mission / accumulatedMonth) + ' месяц(-ев, а)');
  } else {
    return ('Цель не будет достигнута');
  }
   
};
getTargetMonth(accumulatedMonth, mission);

// Если getTargetMonth возвращает нам отрицательное значение, то вместо 
// “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
/* if (getTargetMonth(accumulatedMonth, mission) > 0) {
  console.log('Срок достижения цели: ' + getTargetMonth(accumulatedMonth, mission) + ' месяц(-ев, а)');
} else {
  console.log('Цель не будет достигнута');
};
 */
// budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
let budgetDay = accumulatedMonth / 30;



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

console.log('Расходы за месяц: ' + expensesAmount + ' руб.');
console.log(addExpenses.toLowerCase().split(', '));
console.log((expenses.toString()).toLowerCase().split(', '));
console.log(getTargetMonth(accumulatedMonth, mission));
console.log('Бюджет на 1 день: ' + Math.floor(budgetDay) + ' руб.');
console.log(getStatusIncome());

