'use strict'

let arrRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let arrEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let lang = 'en';
if (lang === 'ru') {
  console.log(arrRu.join(', '));
} else if (lang === 'en') {
  console.log(arrEn.join(', '));
} else{
  console.log('Выбрать корректное значение языка');
}

switch (lang) {
  case 'ru':
    console.log(arrRu.join(', '));
    break;
 case 'en':
    console.log(arrEn.join(', '));
    break;
  default:
    console.log('Выбрать корректное значение языка');
    break;
}

let arr = {
  'ru': arrRu,
  'en': arrEn,
};

console.log((arr[lang]).join(', '));


let namePerson = 'Максим';
let result = namePerson === 'Артем' ? 'Директор' : 'Студент' && namePerson === 'Максим' ? 'Преподаватель' : 'Студент';
console.log(result);

console.log(namePerson === 'Артем' ? 'Директор' : 'Студент' && namePerson === 'Максим' ? 'Преподаватель' : 'Студент');