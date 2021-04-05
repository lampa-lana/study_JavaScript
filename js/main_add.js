'use strict'

let lang = 'en';
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

let arr = {
  'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};

console.log(arr[lang]);
console.log((arr[lang]).join(', '));


let namePerson = 'Максим';
let result = namePerson === 'Артем' ? 'Директор' : 'Студент' && namePerson === 'Максим' ? 'Преподаватель' : 'Студент';
console.log(result);

console.log(namePerson === 'Артем' ? 'Директор' : 'Студент' && namePerson === 'Максим' ? 'Преподаватель' : 'Студент');