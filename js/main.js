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

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' фунтов стерлингов');
console.log((addExpenses.toLowerCase()), (addExpenses.split(', ')));

let budgetDay;
budgetDay = money / 30;
console.log(budgetDay);
