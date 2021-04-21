'use strict';

const collections = document.querySelectorAll('.book');
const href = document.querySelectorAll('h2 > a');
const bodyElem = document.querySelectorAll('div');
const bookList = document.querySelectorAll('div > ul');
const bookListItem = document.querySelectorAll('div > ul > li');
const newChapterSixBook = document.createElement('li');
const sixBook = document.querySelectorAll('div.book > ul > li')[25];


  
/* Восстановить порядок книг */
collections[0].before(collections[1]);
collections[2].before(collections[4]);
collections[2].before(collections[5]);
collections[5].before(collections[3]);

/* Заменить картинку заднего фона на другую из папки image */
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

/* Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов") */
href[4].innerText = 'Книга 3. this и Прототипы Объектов';

/* Удалить рекламу со страницы */
bodyElem[6].remove();

/* Восстановить порядок глав во второй и пятой книге  */
bookListItem[8].after(bookListItem[2]);
bookListItem[5].before(bookListItem[6]);
bookListItem[7].before(bookListItem[8]);
bookListItem[4].before(bookListItem[6]);
bookListItem[4].before(bookListItem[8]);
bookListItem[2].before(bookListItem[9]);

bookListItem[51].before(bookListItem[55]);
bookListItem[48].after(bookListItem[55]);
bookListItem[48].after(bookListItem[55]);
bookListItem[51].before(bookListItem[48]);
bookListItem[53].before(bookListItem[51]);
bookListItem[51].before(bookListItem[53]);

/* в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место */
newChapterSixBook.textContent = 'Глава 8: За пределами ES6';
sixBook.append(newChapterSixBook);


/* 
console.log(collections);
console.log(bodyElem);
console.log(href);
console.log(bookListItem);
console.log(bookList);
console.log(newChapterSixBook); */

