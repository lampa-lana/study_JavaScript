'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isString = (str, control = false) => {
    const pattern = control ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
    return pattern.test(str);
};

const getCalcInputOn = document.getElementById('start');
console.log(' Кнопка рассчитать ', getCalcInputOn);

const getCalcInputOff = document.getElementById('cancel');
console.log(' Кнопка рассчитать ',  getCalcInputOff);


const getBtnPlus = document.getElementsByTagName('button')[0];
console.log(' Кнопка + ',  getBtnPlus);

const getBtnPlus2 = document.getElementsByTagName('button')[1];
console.log(' Кнопка + ', getBtnPlus2);



const getCheckBox = document.querySelector('#deposit-check');
console.log(' Чекбокс ',  getCheckBox);



const addExpenses = document.querySelectorAll('.additional_income-item');
console.log('Поля для ввода возможных доходов ', addExpenses);



const getBudgetDay = document.getElementsByClassName('.budget_day-value');
console.log('Поле: дневной бюджет ', getBudgetDay);

const getExpensesMonth = document.getElementsByClassName('.expenses_month-value');
console.log('Поле: расходы за месяц ', getExpensesMonth);

const getAddIncome = document.getElementsByClassName('.additional_income-value');
console.log('Поле: возможные доходы ', getAddIncome);

const getAddExpenses = document.getElementsByClassName('.additional_expenses-value');
console.log('Поле: возможные расходы ', getAddExpenses);

const getSaveIncomePeriod = document.getElementsByClassName('.income_period-value');
console.log('Поле: возможные накопления за период ', getSaveIncomePeriod);

const getTargetMonth = document.getElementsByClassName('.target_month-value');
console.log('Поле: срок достижения цели в месяцах  ', getTargetMonth);


const getBudgetMonth = document.querySelector('.budget_month-value');
console.log('Поле: доход за месяц  ', getBudgetMonth);


const getSalaryAmount = document.querySelector('.salary-amount');
console.log('Поле: месячный доход *  ', getSalaryAmount);

const getIncomeTitle = document.querySelector('div.income-items > .income-title');
console.log('Поле: наименование дополнительного дохода   ', getIncomeTitle);

const getIncomeAmount  = document.querySelector('.income-amount');
console.log('Поле: сумма дополнительного дохода   ', getIncomeAmount);

const getExpensesTitle = document.querySelector('div.expenses-items > .expenses-title');
console.log('Поле: наименование возможного расхода   ', getExpensesTitle);

const getExpensesAmount  = document.querySelector('.expenses-amount');
console.log('Поле: сумма возможного расхода   ', getExpensesAmount);

const getAddExpensesItem  = document.querySelector('.additional_expenses-item');
console.log('Поле: возможных расхода   ', getAddExpensesItem);

const getTargetAmount  = document.querySelector('.target-amount');
console.log('Поле: депозит  ', getTargetAmount);

const getPeriodSelect  = document.querySelector('.period-select');
console.log('Поле: депозит  ', getPeriodSelect);


// доход за месяц спросить у пользователя  “Ваш месячный доход?”
// и результат сохраняем в переменную money
let money, 
    start = function () {
       do {
         money = prompt('Ваш ежемесячный доход?', 60000);
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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 200000,  /* цель накопить */
  period: 12,  /* период попытки */
  budget: +money, /* принимает значение money */
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {    /* метод с функцией справшивать у пользователя что либо */
    /* Спросить у пользователя “Перечислите возможные расходы за рассчитываемый
 период через запятую” сохранить в переменную addExpenses */
    if (confirm('Есть ли у вас дополнительный заработок?')) {

      let itemIncome = '';
      do {
        itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
      } while (!isString(itemIncome));
      
      let cashIncome = 0;
      do {
       cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
      } while (!isNumber(cashIncome));
      
      appData.income[itemIncome] = +cashIncome;
    } 
    

    let addExpenses = '';
    do {
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммунальные Платежи, Расходы на Транспорт, Мобильный Телефон, Интернет');
    } while (!isString(addExpenses, true));
    
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      let exp = '';
      do {
        exp = prompt('Введите обязательную статью расходов?', ' кино');
      } while (!isString(exp));
            appData.expenses[exp] = (() => {
                let sum = 0;
                do {
                    sum = prompt('Во сколько это обойдется?', 2500);
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
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentDeposit = 0;
      do {
         appData.percentDeposit = prompt('Какой годовой процент?', 10);
      } while (!isNumber(appData.percentDeposit));
        
      appData.moneyDeposit = 0;
      do {
        appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(appData.moneyDeposit));
     
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();




console.log('Расходы за месяц: ' + appData.expensesMonth + ' руб.');
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

/* Используя цикл for in для объекта (appData), вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести все свойства и значения) */
/* console.log('Наша программа включает в себя данные: ');
for (const key in appData) {
  console.log(key, appData[key]);
};
 */
console.log(appData.addExpenses.map(word => word[0].toUpperCase() + word.slice(1)).join(',  '));

