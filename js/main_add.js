'use strict'

let lang = 'ru';
if (lang === 'ru') {
  console.log('понедельник', 'вторник', 'среда', 'чтверг', 'пятница', 'суббота', 'воскресенье');
} else if (lang === 'en') {
  console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else{
  console.log('Выбрать корректное значение языка');
}

switch (lang) {
  case 'ru':
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
    break;
 case 'en':
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
    break;
  default:
    console.log('Выбрать корректное значение языка');
    break;
}

let arr = [
  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
];
lang = true ? arr[0] : arr[1];
console.log(lang);


let namePerson = 'Максим';
let result = namePerson === 'Артем' ? 'Директор' : 'Студент' && namePerson === 'Максим' ? 'Преподаватель' : 'Студент';
console.log(result);

console.log(namePerson === 'Артем' ? 'Директор' : 'Студент' && namePerson === 'Максим' ? 'Преподаватель' : 'Студент');