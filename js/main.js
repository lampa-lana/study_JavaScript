'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// доход за месяц спросить у пользователя  “Ваш месячный доход?”
// и результат сохраняем в переменную money
let money, 
    start = function () {
       do {
         money = prompt('Ваш ежемесячный доход?');
      } while (!isNumber(money));
      // confirm('Подтвердите, что Ваш ежемесячный доход ' +  money);
  
    };
    start();

    //объект содержит все переменные
let appData = {
  income: {},  /* дополнительные доходы */
  addIncome: [],  /* дополнительные доходы */
  expenses: {},  /* дополнительные расходы */
  addExpenses: [],  /* возможные расходы */
  deposit: false,
  mission: 200000,  /* цель накопить */
  period: 12,  /* период попытки */
  budget: +money, /* принимает значение money */
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {    /* метод с функцией справшивать у пользователя что либо */
    /* Спросить у пользователя “Перечислите возможные расходы за рассчитываемый
 период через запятую” сохранить в переменную addExpenses */
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммунальные Платежи, Расходы на Транспорт, Мобильный Телефон, Интернет');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
   for (let i = 0; i < 2; i++) {
            appData.expenses[prompt('Введите обязательную статью расходов?')] = (() => {
                let sum = 0;
                do {
                    sum = prompt('Во сколько это обойдется?');
                } while (!isNumber(sum));
                return +sum;
            })();
           
        }
   },
  getExpensesMonth: function () { /* считаем сумму всех обязательных расходов и сохраняем результат */
     appData.expensesMonth = 0;
      for (let key in appData.expenses) {
       appData.expensesMonth  += appData.expenses[key];
        
      }
    },
    
  
  getBudget: function () { /* getAccumulatedMonth переименовать в getBudget. Этот метод будет высчитывать значения свойств budgetMonth и budgetDay */
    
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
      
  },
  getTargetMonth: function () {
     if ((appData.mission /  appData.budgetMonth) > 0) {
      return ('Срок достижения цели: ' + Math.floor(appData.mission /  appData.budgetMonth) + ' месяц  (-ев, а)');
    } else {
      return ('Цель не будет достигнута');
    }
  
  },
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600 && appData.budgetDay <= 1199) {
      return ('У вас средний уровень дохода');
    } else if (appData.budgetDay >= 0 && appData.budgetDay <= 599) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay < 0) {
      return ('Что-то пошло не так');
    }
  }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();



console.log('Расходы за месяц: ' + appData.expensesMonth + ' руб.');
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

/* Используя цикл for in для объекта (appData), вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести все свойства и значения) */
console.log('Наша программа включает в себя данные: ');
for (const key in appData) {
 console.log(key, appData[key]);
};