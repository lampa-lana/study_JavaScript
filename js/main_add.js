'use strict'

function onlyStringMax(arg) {
  if (typeof arg !== 'string') {
    return ('Это не строка!');
  } else if (arg.length <= 30) {
     return arg.trim();    
  }else{
   return arg.trim().slice(0, 30) + '...';
  }
}
console.log(onlyStringMax('   Это оччееень длиная строка с лишними пробелами    '));
console.log(onlyStringMax('   Это оччееень длиная строка с лишними пробелами    ').length);

// Длина строки получается 33 знака за счет '...', если не учитывать их как знаки входящие в 30 заявленных

// если нужно ровно 30, тогда 
function onlyStringMin(arg1) {
  if (typeof arg1 !== 'string') {
    return ('Это не строка!');
  } else if (arg1.length <= 30) {
     return arg1.trim();    
  }else{
   return arg1.trim().slice(0, 27) + '...';
  }
}
console.log(onlyStringMin('   Это оччееень длиная строка с лишними пробелами    '));
console.log(onlyStringMin('   Это оччееень длиная строка с лишними пробелами    ').length);

