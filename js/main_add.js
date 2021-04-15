'use strict';

const week = ['Понедельник ', ' Вторник ',  ' Среда ',  ' Черверг ', ' Пятница ',  ' Суббота ',  ' Воскресенье '];/*  массив */

const currentDay = new Date().getDay()-1; /* конструктор new Date() и getDay() -опредееление дн недели */


for (let i = 0; i < week.length; i++) {
  if (i == currentDay) {
    if (week[i] == ' Суббота '  || week[i] == ' Воскресенье ') { /* если текущий день, то */
      document.write(`<p><i><b>${week[i]}</p></i><b>`);
    } else {
      document.write(`<p><b>${week[i]}</p></b>`);
    }
    
  } else if(week[i] == ' Суббота '  || week[i] == ' Воскресенье '){ /* если все остальные дни, то */
    document.write(`<p><i>${week[i]}</p></i>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }  
 
}
