let lang = 'ru';
if (lang === 'ru') {
  console.log('понедельник', 'вторник', 'среда', 'чтверг', 'пятница', 'суббота', 'воскресенье');
} else if (lang === 'en') {
  console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else{
  console.log('Выбрать корректное значение языка');
};

switch (lang) {
  case 'ru':
    console.log('понедельник', 'вторник', 'среда', 'чтверг', 'пятница', 'суббота', 'воскресенье');
    break;
 case 'en':
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
    break;
  default:
    console.log('Выбрать корректное значение языка');
    break;
};

let namePerson = 'Светлана';
let result = namePerson === 'Артем' ? 'Директор' : 'Студент' && namePerson === 'Максим' ? 'Преподаватель' : 'Студент';
console.log(result);