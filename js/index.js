'use strict';

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
