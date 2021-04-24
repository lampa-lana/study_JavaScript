'use strict';
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isString = (str, control = false) => {
    const pattern = control ? /^[, а-яА-ЯёЁa-zA-Z]+$/ : /^[ а-яА-ЯёЁa-zA-Z]+$/;
    return pattern.test(str);
};

const start = document.getElementById('start');
/* console.log(' Кнопка рассчитать ', start); */

const getCalcInputOff = document.getElementById('cancel');
/* console.log(' Кнопка рассчитать ',  getCalcInputOff); */


const getBtnPlus = document.getElementsByTagName('button');
/* console.log(' Кнопки + ',  getBtnPlus);
 */
const incomePlus = getBtnPlus[0];
/* console.log(' Кнопка + ', incomePlus); */

const expensesPlus = getBtnPlus[1];
/* console.log(' Кнопка + ', expensesPlus); */



const depositCheck = document.querySelector('#deposit-check');
/* console.log(' Чекбокс ',  getCheckBox); */



const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
/* console.log('Поля для ввода возможных доходов ', additionalIncomeItem); */



const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
/* console.log('Поле: дневной бюджет ', budgetDayValue); */

const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
/* console.log('Поле: расходы за месяц ', expensesMonthValue); */

const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
/* console.log('Поле: возможные доходы ', additionalIncomeValue); */

const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
/* console.log('Поле: возможные расходы ', additionalExpensesValue); */

const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
/* console.log('Поле: возможные накопления за период ', incomePeriodValued); */

const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
/* console.log('Поле: срок достижения цели в месяцах  ', targetMonthValue); */


const budgetMonthValue = document.querySelector('.budget_month-value');
/* console.log('Поле: доход за месяц  ', budgetMonthValue);
 */

const salaryAmount = document.querySelector('.salary-amount');
/* console.log('Поле: месячный доход *  ', salaryAmount); */

const getExpensesTitle = document.querySelector('div.expenses-items > .expenses-title');
/* console.log('Поле: наименование возможного расхода   ', getExpensesTitle); */

const getExpensesAmount  = document.querySelector('.expenses-amount');
/* console.log('Поле: сумма возможного расхода   ', getExpensesAmount); */

const additionalExpensesItem  = document.querySelector('.additional_expenses-item');
/* console.log('Поле: возможных расхода   ', additionalExpensesItem); */

const targetAmount  = document.querySelector('.target-amount');
/* console.log('Поле: депозит  ', targetAmount); */

const periodSelect  = document.querySelector('.period-select');
/* console.log('Поле: период  ', periodSelect); */

let incomeItems = document.querySelectorAll('.income-items');

let expensesItems = document.querySelectorAll('.expenses-items');


    

    //объект содержит все переменные
let appData = {
  income: {},  /* дополнительные доходы */
  incomeMonth: 0,
  addIncome: [],  /* дополнительные доходы */
  expenses: {},  /* дополнительные расходы */
  addExpenses: [],  /* возможные расходы */
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0, /* принимает значение money */
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {
  /*   if (getSalaryAmount.value === '') {
      alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
      return;
    } */
    appData.budget = +salaryAmount.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getIncomeMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    /*   appData.getTargetMonth();
      appData.getStatusIncome();
      appData.getInfoDeposit(); */
    appData.showResult();
      
     
  
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcSavedMoney();

  },
  addExpensesBlock: function () {
    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
   
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  addIncomeBlock: function () {
   
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
   
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = +cashIncome;
     
      }
    });
 
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(', ');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },
   
  getExpensesMonth: function () { /* считаем сумму всех обязательных расходов и сохраняем результат */
    appData.expensesMonth = 0;
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
        
    }
  },
  getIncomeMonth: function () {
    appData.incomeMonth = 0;
    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
        
    }
  },
  getBudget: function () { /* getAccumulatedMonth переименовать в getBudget. Этот метод будет высчитывать значения свойств budgetMonth и budgetDay */
    
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
      
  },
  getTargetMonth: function () {
    return targetAmount.value / budgetMonthValue.value;
    
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
    return appData.budgetMonth * periodSelect.value;
  },
  calcRange: function eventFunc(event) {
    document.querySelector('.period-amount').textContent = event.target.value;
  },
  stopStart: function () {   
  start.disabled = !isNumber(salaryAmount.value);
     
  }

   
};
appData.stopStart();
start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.calcRange);
salaryAmount.addEventListener('input', appData.stopStart);


